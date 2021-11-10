import { useState, useEffect } from "react";
import { supabase } from "../utils/client";
import Select from "react-select";
import styled from "styled-components";
import Avatar from "./Avatar";
import { industries } from "../data/industries";

const SelectStyle = styled.div`
  .select__option {
    color: black !important;
  }
`;

export default function Account({ session }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({
    username: null,
    industry: null,
    avatar_url: null,
  });

  const { username, industry, avatar_url } = user;

  useEffect(() => {
    getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      let { data, error, status } = await supabase
        .from("profiles")
        .select(`username, industry, avatar_url`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUser({
          username: data.username,
          industry: data.industry,
          avatarUrl: data.avatar_url,
        });
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({ username, industry, avatar_url }) {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      const updates = {
        id: user.id,
        username,
        industry,
        avatar_url,
        updated_at: new Date(),
      };

      let { error } = await supabase.from("profiles").upsert(updates, {
        returning: "minimal", // Don't return the value after inserting
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

  return (
    <div className="form-widget">
      <div>
        <Avatar
          url={avatar_url}
          size={150}
          onUpload={(url) => {
            setUser((prevState) => ({ ...prevState, avatar_url: url }));
            updateProfile({ username, industry, avatar_url: url });
          }}
        />
      </div>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username || ""}
          onChange={(e) =>
            setUser((prevState) => ({ ...prevState, username: e.target.value }))
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
          value={industries.find((i) => i.value === industry) || ""}
          onChange={(e) =>
            setUser((prevState) => ({ ...prevState, industry: e?.value || "" }))
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
          onClick={() => updateProfile({ username, industry, avatar_url })}
          disabled={loading}
        >
          {loading ? "Loading ..." : "Update"}
        </button>
      </div>

      <div>
        <button
          className="button block"
          onClick={() => supabase.auth.signOut()}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
