import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import React from "react";

interface CardSmallProps {
  className?: string;
  children: React.ReactNode;
  icon?: LucideIcon;
}

const TitleCard: React.FC<CardSmallProps> = ({ className, children, icon }) => {
  let ComponentIcon;

  if (icon) {
    ComponentIcon = icon;
  }


  if (ComponentIcon) {
    return (
      
      <div className={cn(`bg-white h-full flex items-center w-[24.5%] rounded-lg gap-4 relative shadow-lg border-[0.5px]`, className)}>
        <div className="h-full flex justify-center items-center">
          <ComponentIcon size={"80%"} className="text-secondaryColor"/>
        </div>
        <span className=" w-full text-secondaryColor font-bold text-xl absolute flex justify-center">{children}</span>
      </div>
    );
  }

  return (
    <div className={cn(`bg-white h-full flex items-center w-[24.5%] rounded-lg gap-4 relative shadow-lg border-[0.5px]`, className)}>
        <span className=" w-full text-secondaryColor font-bold text-xl absolute flex justify-center">{children}</span>
      </div>
  )
};

export default TitleCard;
