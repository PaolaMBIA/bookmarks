import { DataModel } from "../entities-interfaces/entities";

export const fetchData = async (
  url: string
): Promise<DataModel | undefined> => {
  const result = await (
    await fetch(`https://noembed.com/embed?dataType=json&url=${url}`)
  ).json();

  if (result.video_id) {
    const resultVideo = await (
      await fetch(`https://api.vimeo.com/videos/${result.video_id}`, {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer 9723603e3958ba8ffae6ec78660ed594",
        },
      })
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
        `https://api.flickr.com/services/rest?method=flickr.photos.getInfo&api_key=a3990db4c7289451bcce7d6d5db81ed9&photo_id=${photo_id}&format=json&nojsoncallback=1`
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
