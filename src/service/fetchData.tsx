import { DataModel } from "../entities-interfaces/entities";

export const fetchData = async (url: string): Promise<DataModel> => {
  const result = await (
    await fetch(`https://noembed.com/embed?dataType=json&url=${url}`)
  ).json();

  if (result.video_id) {
    const result1 = await (
      await fetch(`https://api.vimeo.com/videos/${result.video_id}`, {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer 9723603e3958ba8ffae6ec78660ed594",
        },
      })
    ).json();

    return result1;
  } else if (result.flickr_type) {
    const photo_id = result.thumbnail_url.split("/").pop().split("_")[0];
    console.log(photo_id);
    const result2 = await (
      await fetch(
        `https://api.flickr.com/services/rest?method=flickr.photos.getInfo&api_key=a3990db4c7289451bcce7d6d5db81ed9&photo_id=45771361701&format=json&nojsoncallback=1`,
        {
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
    ).json();

    //const data = await parser.parseStringPromise(content)
    // ).json();

    console.log("res", result2);
    return result;
  } else {
    return result;
  }
};
