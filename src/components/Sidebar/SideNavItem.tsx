'use client'

import { SideNavItem } from "@/types/SideNavItem";
import { usePathname, useRouter } from "next/navigation";

interface SideNavItemProps {
    item: SideNavItem;
}

const SideNavItem: React.FC<SideNavItemProps> = ({ item }) => {


    const router = useRouter();
    const pathName = usePathname();


    function handleClick(path: string){
        router.push(path);
    }

  return (
    <div
      className={`flex w-full items-center gap-2 px-8 py-3 h-[27%] cursor-pointer ${pathName.includes(item.path) && "bg-secondaryColorSelected"}`}
        onClick={() => handleClick(item.path)}
    >
      <div className="h-[2rem] w-[2rem]">
        {item.icon && <item.icon size={"100%"} className="text-primarycolor" />}
      </div>
      <span className="text-primarycolor font-semibold text-lg">
        {item.title}
      </span>
    </div>
  );
};


export default SideNavItem;