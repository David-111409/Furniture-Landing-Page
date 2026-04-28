import { popularProducts } from "../constant/data";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <section className="section" id="products">
      <div className="container">
        {/* title wrapper  */}
        <div className="text-center">
          <h2>Popular products</h2>
          <p className="mx-auto mt-3 max-w-[550px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
            libero fugiat cumque.
          </p>
        </div>
        {/* products  */}
        <div className="mt-10 md:mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {popularProducts.map(({ id, ...product }) => (
            <ProductCard key={id} product={product} />
          ))}
        </div>

        <div className="flex justify-center">
          <button aria-label="All Products" className="primaryButton my-20">
            All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
