import { cn } from "@/lib/utils";
import React from "react";


interface DataCardProps {
    className?: string;
}

const DataCard: React.FC<DataCardProps> = ({ className }) => {
  return (
    <div className={cn("h-full bg-white flex-1 rounded-lg shadow-lg border-[0.5px]", className)}>
      
    </div>

  );
};


export default DataCard



