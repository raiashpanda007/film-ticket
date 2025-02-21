"use client";
import React, { use } from "react";
import { FiGlobe, FiKey, FiUser } from "react-icons/fi";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { setLogin } from "@/store/Login";
import type { RootState } from "@/store/store";
import Logo from "./Logo";

function AuthInput() {
  const dispatch = useDispatch();
  const router = useRouter();

  const loginState = useSelector((state: RootState) => state.login.login);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const login = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload
  
    if (username === "naval.ravikant" && password === "05111974") {
      dispatch(setLogin(true));
      router.push("/home");
      return; // Stop execution if login is successful
    }
    
    setError(true);
  };

  

  return (
    <form
      onSubmit={login}
      className="h-1/3 p-3 sm:w-1/3 w-full rounded-md bg-black text-white flex flex-col justify-around items-center"
    >
      <Logo />
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
      {error && (
        <div className="bg-red-600 p-4">Please enter correct credentials</div>
      )}
    </form>
  );
}

export default AuthInput;
