import request from "./request";

export async function getBlogs() {
  return await request.get("/api/blogtype");
}

export async function getBlogCategory() {
  return await request.get("/api/blog");
}
