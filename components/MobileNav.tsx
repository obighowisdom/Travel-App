import { NAV_LINKS } from "@/contants";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Button from "./Button";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const navOpenStyle = nav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div
      className={`transform ${navOpenStyle} w-[100%] pl-8 transition-all duration-500 fixed top-0 left-0 z-[200] h-[100vh] right-0 bottom-0 bg-[#000]`}
    >
      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer w-[2rem] h-[2rem] absolute top-[2rem] text-white z-[202] right-[2rem]"
        onClick={closeNav}
      />
      <ul className="relative z-[201] space-y-10 flex flex-col items-start h-[100%] ">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-white flex mt-20 flex-col cursor-pointer pb-1.5 transition-all hover:font-bold "
          >
            {link.label}
          </Link>
        ))}
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </ul>
    </div>
  );
};

export default MobileNav;
