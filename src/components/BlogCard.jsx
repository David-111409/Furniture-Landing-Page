const BlogCard = ({ item: { title, imgUrl, postDate, text } }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      {/* image */}
      <div className="overflow-hidden">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-[220px] object-cover"
        />
      </div>

      {/* content */}
      <div className="p-4 text-left">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-500 text-sm mb-3">{text}</p>
        <p className="text-sm text-gray-400 mb-2">{postDate}</p>

        {/* read more */}
        <button className="text-primary font-medium hover:underline">
          Read More →
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
