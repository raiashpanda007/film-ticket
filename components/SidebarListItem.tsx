"use client"
import React, { useEffect, useState } from "react";
import { useParams,useRouter } from "next/navigation";
function SidebarListItem({
  isSelected,
  children,
  label,
}: {
  isSelected: boolean;
  children: React.ReactNode;
  label: string;
}) {
    const params = useParams();
    const router = useRouter();
    const [selected, setIsSelected] = useState(isSelected);
    useEffect(() => {
        if(params.id === label) {
            setIsSelected(true)
        } else {
            if(selected) {
                setIsSelected(false)
            }

        }

    })
  return (
    <div onClick={() => router.push(`/${label}`)}
      className={
        isSelected
          ? "bg-white text-black w-full h-14 flex items-center justify-center space-x-4  rounded-lg text-2xl font-extrabold cursor-pointer"  
          : "bg-black text-white w-full h-14 flex items-center justify-center space-x-4  rounded-lg text-2xl font-extrabold cursor-pointer" 
      } 
    >
      <div>{children}</div>
        <p>{label}</p>
      
    </div>
  );
}

export default SidebarListItem;
