import BlogComp from "../components/PageComponents/BlogComponents/BlogComp";

const Blog = () => {
  return (
    <div className="space-y-3">
      <h1 className="text-center text-2xl bg-slate-200 p-2">Blog</h1>
      <div className="container mx-auto text-white space-y-5">
        <BlogComp></BlogComp>
      </div>
    </div>
  );
};

export default Blog;
