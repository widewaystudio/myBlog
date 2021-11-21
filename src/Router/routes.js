import Home from "@/views/Home/";
import Blog from "@/views/Blog/";
import About from "@/views/About/";
import Detail from "@/views/Detail";
import Message from "@/views/Message/";
import Project from "@/views/Project/";

export default [
  { name: "Home", path: "/myblog", component: Home, meta: { name: "首页" } },
  {
    name: "Blog",
    path: "/article",
    component: Blog,
    meta: { name: "博客Blog" },
  },
  {
    name: "CateBlog",
    path: "/article/cate/:categoryId",
    component: Blog,
    meta: { name: "博分类情页" },
  },
  {
    name: "Detail",
    path: "/article/blog/:id",
    component: Detail,
    meta: { name: "博客详情页" },
  },
  {
    name: "About",
    path: "/About",
    component: About,
    meta: { name: "关于我们" },
  },
  {
    name: "Message",
    path: "/Message",
    component: Message,
    meta: { name: "你来留言吧" },
  },
  {
    name: "Project",
    path: "/Project",
    component: Project,
    meta: { name: "项目工程" },
  },
];
