import React, { useEffect } from "react";
import { supabase } from "../utils/client";
import { useRouter } from "next/router";

export default function Resources() {
  const router = useRouter();

  useEffect(() => {
    // checking if a user is logged in. If not, redirect to login screen
    const user = supabase.auth.user();

    if (!user) {
      router.push("/login");
    }
  }, []);

  return <div>Rant/Rave</div>;
}
