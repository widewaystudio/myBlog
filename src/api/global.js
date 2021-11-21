import request from "./request";

async function getGlobal() {
  return await request.get("/api/setting");
}

export default getGlobal;
