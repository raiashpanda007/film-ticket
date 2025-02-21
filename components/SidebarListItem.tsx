"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";

type SidebarListItemProps = {
  label: string;
  children: React.ReactNode;
};

export default function SidebarListItem({ label, children }: SidebarListItemProps) {
  const router = useRouter();
  const pathname = usePathname();

  let isSelected = false;
  if (label.toLowerCase() === "booking") {
    isSelected = pathname === "/home" || pathname.startsWith("/movie");
  } else if (label.toLowerCase() === "activity") {
    isSelected = pathname === "/activity";
  }

  const handleClick = () => {
    if (label.toLowerCase() === "booking") {
      router.push("/home");
    } else {
      router.push(`/${label.toLowerCase()}`);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={
        isSelected
          ? "bg-white text-black w-full h-14 flex items-center justify-center space-x-4 rounded-lg text-2xl font-extrabold cursor-pointer"
          : "bg-black text-white w-full h-14 flex items-center justify-center space-x-4 rounded-lg text-2xl font-extrabold cursor-pointer"
      }
    >
      <div>{children}</div>
      <p>{label}</p>
    </div>
  );
}
