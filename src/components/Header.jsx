import { useEffect, useState } from "react";
import { navItems } from "../constant/data";
import Link from "./Link";
import { ShoppingCart, User, Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen((prev) => !prev);
  const [startScroll, setStartScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setStartScroll(true);
      } else {
        setStartScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`z-30 fixed top-0 left-0 w-full transition-all duration-300 ${
        startScroll
          ? "text-black bg-white shadow-md"
          : "text-white bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-6">
        {/* Logo */}
        <a href="#" className="font-rubik font-bold text-3xl text-inherit">
          Stilo
        </a>

        {/* Mobile Menu */}
        <nav
          className={`md:hidden p-6 z-20 absolute top-0 left-0 bg-white text-black ${
            !open && "-translate-x-[290px]"
          } transition-transform duration-300 ease-in-out max-w-[290px] h-screen w-full`}
        >
          <div className="flex justify-end">
            <button onClick={handleClick}>
              <X size={30} />
            </button>
          </div>
          <ul className="mt-10 flex flex-col gap-8">
            {navItems.map(({ id, label, path }) => (
              <li className="self-start" key={id} onClick={handleClick}>
                <Link label={label} path={path} />
              </li>
            ))}
          </ul>
        </nav>

        {/* big screen nav */}
        <ul className="md:flex md:gap-[52px] hidden text-inherit">
          {navItems.map(({ id, label, path }) => (
            <li key={id}>
              <Link label={label} path={path} />
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-[14px] text-inherit">
          <button className="hover:text-[#F9BF29] transition-colors duration-300">
            <ShoppingCart size={30} />
          </button>
          <button className="hover:text-[#F9BF29] transition-colors duration-300">
            <User size={30} />
          </button>
          <button
            className="md:hidden hover:text-[#F9BF29] transition-colors duration-300"
            onClick={handleClick}
          >
            <Menu size={30} />
          </button>
        </div>

        {/* overlay */}
        {open && (
          <div
            onClick={handleClick}
            className={`z-10 fixed inset-0 bg-neutral-700/50`}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
