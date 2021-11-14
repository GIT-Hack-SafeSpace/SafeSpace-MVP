import { useState, useEffect } from "react";
import { supabase } from "../utils/client";
import { useRouter } from "next/router";
import Select from "react-select";
import styled from "styled-components";
import { industries } from "../data/industries";
import GlobalHeader from "../components/GlobalHeader";
import GlobalFooter from "../components/GlobalFooter";

const SelectStyle = styled.div`
  .select__option {
    color: black !important;
  }
`;

export default function Profile() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getProfile();
  }, []);

  async function getProfile() {
    try {
      setLoading(true);
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
          setUser({...data, id: user.id});
        } else {
          setUser({id: user.id})
        }
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile() {
    const { id, username, industry, avatar_url } = user;

    try {
      setLoading(true);
      const updates = {
        id,
        username,
        industry,
        avatar_url,
        updated_at: new Date(),
      };

      let { error } = await supabase.from("profiles").upsert(updates, {
        returning: "minimal",
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }
  async function signOut() {
    await supabase.auth.signOut();
    router.push("/login");
  }
  
  if (!user) return null
  return (
    <>
    <GlobalHeader />
    <div style={{ maxWidth: "420px", margin: "96px auto" }}>
      <div className="form-widget">
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={user.username || ""}
            onChange={(e) =>
              setUser((prevState) => ({
                ...prevState,
                username: e.target.value,
              }))
            }
          />
          <span className="form-text">
            Please choose a unique username that will not link descriptive words
            to your true identity
          </span>
        </div>

        <SelectStyle>
          <label htmlFor="industry">Industry</label>
          <Select
            id="industry"
            name="industry"
            type="industry"
            options={industries}
            value={industries.find((i) => i.value === user.industry) || ""}
            onChange={(e) =>
              setUser((prevState) => ({
                ...prevState,
                industry: e?.value || "",
              }))
            }
            className="basic-single"
            classNamePrefix="select"
            isClearable={true}
            isSearchable={true}
          />
        </SelectStyle>

        <div>
          <button
            className="button block primary"
            onClick={updateProfile}
            disabled={loading}
          >
            {loading ? "Loading ..." : "Update"}
          </button>
        </div>

        <div>
          <button className="button block" onClick={signOut}>
            Sign Out
          </button>
        </div>
      </div>
    </div>

    <GlobalFooter />
    </>
  );
}
