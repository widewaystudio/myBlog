import request from "@/api/request.js";

export async function getBlogs(page = 1, limit = 10, categoryid = -1) {
  return await request.get("/api/blog", {
    params: {
      page,
      limit,
      categoryid,
    },
  });
}

export async function getTypeList() {
  return await request.get("/api/blogtype");
}

export async function getBlog(id = 1) {
  return await request.get(`/api/blog/${id}`);
}

// 第二种写法，你更喜欢那种？
export async function getBlogNew(id) {
  return await request.get(`/api/blog/${id}`);
}

export async function postComment(commentInfo) {
  return await request.post("/api/comment", commentInfo);
}

export async function getComments(blogid, page = 1, limit = 10) {
  return await request.get("/api/comment", {
    params: {
      blogid,
      page,
      limit,
    },
  });
}
