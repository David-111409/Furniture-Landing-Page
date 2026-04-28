import { Heart, ShoppingBag, Star } from "lucide-react";
import { useState } from "react";

const ProductCard = ({ product: { name, price, imgUrl: img, rating } }) => {
  const [like, setLike] = useState(false);
  const handleLike = () => {
    setLike(!like);
    console.log(like);
    console.log("hello");
  };
  return (
    <div className="relative bg-gray-200/50 group h-full w-full py-2 rounded-md">
      {/* card image  */}
      <div>
        <img
          className="w-full h-auto object-cover transition-transform group-hover:scale-105"
          src={img}
          alt={name}
          width={300}
          height={300}
          loading="lazy"
          decoding="async"
        />
        <div className="flex flex-col gap-3 absolute top-4 right-4">
          <button
            onClick={handleLike}
            aria-label="add to favorite"
            className={`rounded-full bg-white/90 shadow-sm p-2 transition-all`}
          >
            <Heart
              className={`transition-colors ${
                like
                  ? "fill-red-500 stroke-red-500"
                  : "fill-transparent stroke-gray-500"
              }`}
            />
          </button>
          <button className="bg-white/90 p-2 rounded-full shadow-sm transition-all">
            <ShoppingBag className="transition-colors stroke-gray-500" />
          </button>
        </div>
      </div>

      {/* content  */}
      <div className="border-t border-gray-300/50 p-4">
        <h3 className="mb-1 text-lg font-medium">{name}</h3>
        <div className="flex gap-1 items-center mb-1">
          <div className="">
            <Star size={16} className="fill-yellow-400 stroke-yellow-400" />
          </div>
          <span className="text-sm text-gray-600">{rating.toFixed(1)}</span>
          <span className="sr-only">rating</span>
        </div>
        <p className="font-semibold text-primary">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
