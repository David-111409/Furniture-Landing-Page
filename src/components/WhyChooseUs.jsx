import { wcuItems } from "../constant/data";

const WhyChooseUs = () => {
  return (
    <section id="services" className="section">
      <div className="container grid gap-12 md:grid-cols-2 md:items-center">
        {/* content  */}
        <div>
          <h2>Why Choose Us</h2>
          <p className="mt-4 max-w-[444px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            delectus tenetur alias vero excepturi voluptatem!
          </p>
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {wcuItems.map(({ id, icon, title, text }) => (
              <div key={id}>
                <div>
                  <img
                    src={icon}
                    alt={`item icon number ${id}`}
                    width={40}
                    height={40}
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="my-2">{title}</h4>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* banner  */}
        <figure>
          <img
            src="/images/wcu-banner.png"
            alt="why choose us illustration"
            width={589}
            height={715}
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
};

export default WhyChooseUs;
