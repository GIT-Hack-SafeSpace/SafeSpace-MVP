import React, { useEffect, useState } from "react";
import { supabase } from "../utils/client";
import { useRouter } from "next/router";
import ResourcePg from "../components/Resource";
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

<<<<<<< HEAD
  return <div>
    <ResourcePg />
  </div>;
=======
  return <div>{loading ? <Loader /> : 'Resources'}</div>;
>>>>>>> 5f7434684473f3b347d303618086389f4992333f
}
