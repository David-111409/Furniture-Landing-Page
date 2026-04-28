import { useState } from "react";
import { navItems } from "../constant/data";
import Link from "./Link";
import { ShoppingCart, User, Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen((prev) => !prev);

  return (
    <header className="fixed top-0 left-0 w-full z-40">
      <div className="container flex items-center justify-between py-6">
        {/* Logo */}
        <a href="#" className="font-rubik font-bold text-3xl text-white">
          Stilo
        </a>

        {/* Mobile Menu */}
        <nav
          className={`md:hidden p-6 absolute inset-0 z-50 bg-white ${
            !open && "-translate-x-[290px]"
          } transition-transform duration-300 ease-in-out max-w-[290px] h-screen w-full`}
        >
          <div className="flex justify-end">
            <button onClick={handleClick}>
              <X size={30} />
            </button>
          </div>
          <ul className="mt-10 grid gap-8">
            {navItems.map((item) => (
              <li
                className="justify-self-start"
                key={item.id}
                onClick={handleClick}
              >
                <Link label={item.label} path={item.path} />
              </li>
            ))}
          </ul>
        </nav>

        {/* big screen nav */}
        <ul className="md:flex md:gap-[52px] hidden text-white">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link label={item.label} path={item.path} />
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-[14px] z-10 text-white">
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
            className={`z-30 transition-opacity duration-300 fixed inset-0 bg-neutral-700/50`}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
