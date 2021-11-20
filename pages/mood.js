import React, { useEffect, useState } from "react";
import { supabase } from "../utils/client";
import { useRouter } from "next/router";
import Link from "next/link";
import Loader from "../components/Loader";
import { moods } from "../data/moods";
import { MoodStyles } from "../styles/ButtonStyle";
import styled from "styled-components";

const MoodPage = styled.div`
  margin: auto;
  margin-top: 60%;
  max-width: 90%;

  .mood-font {
    margin: auto;
    max-width: 80%;
    font-family: "Playfair Display", serif;
    font-size: 40px;
    text-align: center;
    color: #ed3457;
  }

  .skip-link {
    font-size: 20px;
    color: #5a6f67;
    text-decoration: none;
  }
`;

export default function Mood({ session }) {
  const [firstUse, setFirstUse] = useState(true);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    !session && router.push("/login");
  }, [session]);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) return getProfile();

    return () => {
      isMounted = false;
    };
  }, [session]);

  async function addMood(value) {
    setLoading(true);
    const updates = {
      user_id: session.user.id,
      mood_type: value,
      created_at: new Date(),
    };
    try {
      const { data, error } = await supabase.from("mood").insert(updates, {
        returning: "minimal",
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      router.push("/journal");
    }
  }

  async function getProfile() {
    try {
      const user = supabase.auth.user();

      if (!user) {
        router.push("/login");
      } else {
        let { data, error, status } = await supabase
          .from("profiles")
          .select(`username, industry, avatar_url`)
          .eq("id", user.id)
          .single();

        if (error && status !== 406) {
          throw error;
        }
        if (data) {
          setFirstUse(false);
        }
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  const handleClick = (e) => {
    addMood(e.target.value);
  };

  const viewLogic = () => {
    if (firstUse) {
      router.push("/profile");
    } else {
      return (
        <main>
          <h1 className="mood-font">How are you feeling?</h1>
          <MoodStyles>
            {moods.map((mood) => (
              <button
                key={mood.value}
                className={`btn-mood ${mood.value}`}
                value={mood.value}
                onClick={handleClick}
                style={{ backgroundImage: `url(/moods/${mood.value}.png)` }}
              >
                <span className="visually-hidden visually-hidden-focusable">
                  {mood.value}
                </span>
              </button>
            ))}
          </MoodStyles>
          <div
            style={{ marginTop: "200px" }}
            className="d-flex flex-row-reverse"
          >
            <Link href="/journal">
              <span className="skip-link">{"Skip >"}</span>
            </Link>
          </div>
        </main>
      );
    }
  };

  return <MoodPage>{loading ? <Loader /> : viewLogic()}</MoodPage>;
}
