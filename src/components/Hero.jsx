const Hero = () => {
  return (
    <section id="home" className="section bg-primary pb-[120px] md:pb-[150px]">
      <div className="container grid grid-cols-1 gap-14 md:grid-cols-2 md:items-center">
        {/* hero content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl text-white">
            Redesign Your Space, Refine Your Look.
          </h1>
          <p className="text-white mx-auto md:mx-0 mb-8 mt-3 max-w-[500px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            libero numquam nisi, illum laboriosam ea!
          </p>

          {/* hero buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <button aria-label="Shop Now" className="primaryButton">
              Shop Now
            </button>
            <button aria-label="Explore" className="secondaryButton">
              Explore
            </button>
          </div>
        </div>

        {/* hero banner */}
        <figure>
          <img
            loading="lazy"
            src={"/images/hero-banner.png"}
            alt="why choose us illustration"
          />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
