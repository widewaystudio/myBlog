import ins from "./request";

async function getNews() {
  return await ins.get("/api/banner");
}

export default getNews;
