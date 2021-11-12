import React, { useEffect, useState } from "react";
import { supabase } from "../utils/client";
import { useRouter } from "next/router";
import Loader from "../components/Loader";

export default function Resources() {
  const [loading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // checking if a user is logged in. If not, redirect to login screen
    const user = supabase.auth.user();

    if (!user) {
      router.push("/login");
    }
  }, []);

  return <div>{loading ? <Loader /> : 'Resources'}</div>;
}
