import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { FiSearch, FiUser } from "react-icons/fi";

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
           
            <FiUser  className="rounded-full border bg-[#D8D8D9] h-12 w-12"/>
            <div className="font-bold text-lg ml-2">
                <h1 className="text-lg">Naval </h1>
                <p className="text-lg">Ravikant</p>
            </div>
            
        </div>
      </div>
      <div className="my-5 h-1/6 w-full font-bold ">
        Good Morning Mr Naval Ravikant !
      </div>
    </div>
  );
}

export default Page;
