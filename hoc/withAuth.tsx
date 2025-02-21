"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function withAuth(Component: React.ComponentType) {
  return function AuthenticatedComponent(props: any) {
    const login = useSelector((state: RootState) => state.login.login);
    const router = useRouter();

    useEffect(() => {
      if (!login) {
        router.replace("/"); // Redirect to home if not logged in
      }
    }, [login, router]);

    if (!login) return null; // Prevents rendering until redirect is complete

    return <Component {...props} />;
  };
}
