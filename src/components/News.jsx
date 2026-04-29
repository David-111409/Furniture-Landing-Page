import { Send } from "lucide-react";

const News = () => {
  return (
    <section className="section">
      <div className="container grid gap-11 sm:items-center sm:grid-cols-2">
        {/* content */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Subscribe to Newsletter
          </h2>

          <form className="flex flex-col md:flex-row gap-4 my-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full md:max-w-[250px] h-11 px-3 rounded-md 
              border border-gray-300 bg-white shadow-sm 
              focus:outline-none focus:ring-2 focus:ring-primary/40 
              focus:border-primary transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full md:max-w-[250px] h-11 px-3 rounded-md 
              border border-gray-300 bg-white shadow-sm 
              focus:outline-none focus:ring-2 focus:ring-primary/40 
              focus:border-primary transition"
            />
          </form>
          <button
            type="submit"
            className="h-11 px-5 bg-primary text-white rounded-md 
              hover:bg-primary/90 transition flex items-center justify-center gap-2"
          >
            <Send size={18} />
            Subscribe
          </button>
        </div>

        {/* image */}
        <figure>
          <img src="/images/news-banner.png" alt="News Banner" />
        </figure>
      </div>
    </section>
  );
};

export default News;
