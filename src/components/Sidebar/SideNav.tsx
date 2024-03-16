'use client'

import { SIDENAV_ITEMS } from "@/constants/SIDENAV_ITEMS";
import { User } from "lucide-react";
import LogoMini from "../LogoMini/LogoMini";
import SideNavItem from "./SideNavItem";

const SideNavBar = () => {
  return (
    <aside className="md:w-[16rem] h-screen bg-secondaryColor flex-1 hidden fixed md:flex flex-col items-center justify-between">
      <div className="flex flex-col items-center">
        <div className="mb-5 w-[50%] flex items-center justify-center">
          <LogoMini width="100%" height="100%" />
        </div>

        {SIDENAV_ITEMS.map((item, index) => (
          <SideNavItem key={index} item={item} />
        ))}
      </div>

      <div className="w-full border-white flex items-center cursor-pointer rounded-t-lg justify-center transition-colors py-2 pr-5 gap-4 hover:bg-secondaryColorSelected">
        <div className="w-[3rem] h-[3rem]">
          <User size="100%" className="text-primarycolor" />
        </div>
        <span className="text-lg text-primarycolor font-semibold">
          Meu perfil
        </span>
      </div>
    </aside>
  );
};

export default SideNavBar;


