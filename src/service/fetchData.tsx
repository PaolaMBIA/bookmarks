import { DataModel } from "../entities-interfaces/entities";

export const fetchData = async (url: string): Promise<DataModel> => {
  const result = await (
    await fetch(`https://noembed.com/embed?dataType=json&url=${url}`)
  ).json();

  return result;
};
