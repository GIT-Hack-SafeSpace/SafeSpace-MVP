import { useState, useEffect } from "react";
import { supabase } from "../utils/client";
import Login from "./login";
import Mood from "./mood";
// import Profile from "./profile";
import RantRave from "./rant-rave";

export default function Home() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);


  return (
    <div className="container" style={{ padding: "50px 0 100px 0" }}>
      {!session ? <Login /> : <Mood session={session} />}
    </div>
  );
}
