"use client"
import React from "react";
import { FiGlobe, FiKey, FiUser } from "react-icons/fi";  
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

function AuthInput() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const login = () =>{
    if(username === process.env.NEXT_LOGINUSERNAME && password === process.env.NEXT_LOGINPASSWORD){
      router.push("/home")
    }
      
  }

  return (
    <form className="h-1/3 p-3 sm:w-1/3 w-full rounded-md bg-black text-white flex flex-col justify-around items-center">
      <div className="flex items-center  w-full font-bold justify-center text-3xl ">
        <FiGlobe />
        <h1>Almanack</h1>
      </div>
      <div className="flex items-center justify-center w-full">
        <FiUser className="mr-2" />
        <Input
          className="bg-black placeholder:text-white w-1/2"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      <div className="flex items-center justify-center w-full">
        <FiKey className="mr-2" />
        <Input
          className="bg-black placeholder:text-white w-1/2"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <Button
        variant={"secondary"}
        className="rounded-s-full rounded-e-full w-1/2"
        type="submit"
      >
        <span>Login</span>
      </Button>
    </form>
  );
}

export default AuthInput;
