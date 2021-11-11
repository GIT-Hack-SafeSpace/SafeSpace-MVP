import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getOnboarding } from "./api/user";

export default function Mood({ session }) {
  const [obComplete, setObComplete] = useState(null);
  const router = useRouter();

  useEffect(() => {
    !session ? router.push("/login") : getOnboarding().then(setObComplete);
  }, [session]);

  // getting the value of the personality score (either null or a string)
  // if null, show onboarding, else show mood component
  return <div>{obComplete?.personality}</div>;
}
