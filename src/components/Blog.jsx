import { blogCardItem } from "../constant/data";
import BlogCard from "./BlogCard";
const Blog = () => {
  return (
    <section id="blog" className="section bg-gray-100 pb-[120px] md:pb-[150px]">
      <div className="container">
        {/* title  */}
        <div className="md:flex md:items-center md:justify-between mb-10">
          <h2>Recent Blog</h2>
          <a href="##" className="hover:underline">
            View All Posts
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogCardItem.map(({ id, ...item }) => (
            <BlogCard key={id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
