const TestimonialCard = ({ item: { author, profileImg, job, text } }) => {
  return (
    <div className="px-6 bg-white">
      {/* text */}
      <p className="text-gray-600">"{text}"</p>

      {/* profile */}
      <div className="mt-5 flex flex-col items-center">
        <img
          src={profileImg}
          alt={author}
          className="w-16 h-16 rounded-full object-cover"
        />

        <h3 className="mt-3 font-semibold">{author}</h3>
        <p className="">{job}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
