"use client"
import MoviesList from "@/components/MoviesList";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { FiSearch, FiUser } from "react-icons/fi";
import withAuth from "@/hoc/withAuth";
function Page() {
  return (
    <div className="h-full w-full p-3">
      <div className="h-1/6 w-full flex items-center  justify-between">
        <div className="h-full relative w-4/6  flex items-center">
          <Input className="bg-[#D8D8D9] h-12" placeholder="Search" />
          <Button className="absolute right-0 bg-[#D8D8D9] h-12" variant={"ghost"}>
            <FiSearch />
          </Button>
        </div>
        <div className="h-full  flex items-center">
           
            
            
        </div>
      </div>
      <div className="my-5 h-20 w-full font-bold ">
        Good Morning Mr Naval Ravikant !
      </div>
      <div className="h-4/6 w-full">
        <MoviesList />
      </div>
    </div>
  );
}

export default withAuth(Page);
