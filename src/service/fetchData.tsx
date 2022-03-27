import { DataModel } from "../entities-interfaces/entities";

export const fetchData = async (
  url: string
): Promise<DataModel | undefined> => {
  const result = await (
    await fetch(
      `${process.env.REACT_APP_BASE_URL_NOEMBED}embed?dataType=json&url=${url}`
    )
  ).json();

  if (result.video_id) {
    const resultVideo = await (
      await fetch(
        `${process.env.REACT_APP_BASE_URL_VIMEO}videos/${result.video_id}`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
          },
        }
      )
    ).json();

    const { embed, link, name, user, created_time, release_time, duration } =
      resultVideo;

    return {
      video_id: result.video_id,
      overView: embed.html,
      url: link,
      title: name,
      type: result.type,
      author_name: user.name,
      upload_date: created_time,
      release_time,
      duration,
    };
  } else if (result.flickr_type) {
    const photo_id = result.thumbnail_url.split("/").pop().split("_")[0];

    const resultPhoto = await (
      await fetch(
        `${process.env.REACT_APP_BASE_URL_FLICK}services/rest?method=flickr.photos.getInfo&api_key=${process.env.REACT_APP_API_KEY}&photo_id=${photo_id}&format=json&nojsoncallback=1`
      )
    ).json();

    const { dates } = resultPhoto.photo;

    return {
      photo_id,
      overView: result.thumbnail_url,
      url: result.url,
      title: result.title,
      type: result.type,
      author_name: result.author_name,
      upload_date: dates.taken,
      release_time: dates.posted,
      height: result.height,
      width: result.width,
    };
  } else {
    alert("Type de lien non supporté");
    return undefined;
  }
};
