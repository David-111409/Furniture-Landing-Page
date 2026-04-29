import { footerItems } from "../constant/data";

const Footer = () => {
  return (
    <footer className="pt-16 pb-8 mt-20">
      <div className="container grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <div className="lg:pr-10">
          <div className="mb-4">
            <a href="#" className="text-3xl font-extrabold  tracking-wide">
              Stilo
            </a>

            <div className="w-12 h-1 bg-primary mt-3 rounded-full"></div>
          </div>

          <p className="text-gray-500 mt-4 leading-relaxed text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae,
            reiciendis. Ex cupiditate quisquam sed fugit.
          </p>
        </div>
        {footerItems.map((section) => (
          <div key={section.id}>
            <h3 className="text-lg font-semibold mb-4">{section.title}</h3>

            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* bottom bar */}
      <div className="border-t border-gray-800 mt-12 pt-6">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} YourBrand. All rights reserved.</p>

          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms
            </a>
            <a href="#" className="hover:text-white transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
