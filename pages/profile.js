import { useState, useEffect } from "react";
import { supabase } from "../utils/client";
import { useRouter } from "next/router";
import Select from "react-select";
import styled from "styled-components";
import { industries } from "../data/industries";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ButtonStyle } from "../styles/ButtonStyle";
import MainLayout from "../layouts/MainLayout";

const SelectStyle = styled.div`
  margin-top: 10px;
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
          .select(`username, industry, avatar_url, personality, lgbtqa`)
          .eq("id", user.id)
          .single();

        if (error && status !== 406) {
          throw error;
        }
        if (data) {
          setUser({ ...data, id: user.id });
        } else {
          setUser({ id: user.id });
        }
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile(e) {
    e.preventDefault();
    const { id, username, industry, avatar_url, personality, lgbtqa } = user;

    try {
      setLoading(true);
      const updates = {
        id,
        username,
        industry,
        avatar_url,
        personality,
        lgbtqa,
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

  const handleQuiz = (e) => {
    updateProfile(e).then(() => router.push("/conflict-quiz"));
  };

  if (!user) return null;
  return (
    <MainLayout>
      <ButtonStyle className="d-flex justify-content-end">
        <Button className="btn-danger" onClick={signOut}>
          Sign Out
        </Button>
      </ButtonStyle>
      <Form onSubmit={updateProfile}>
        <div>
          <label htmlFor="username">Username</label>
          <Form.Control
            type="text"
            placeholder="Don't use your real name"
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
          <label htmlFor="industry">Your Industry</label>
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
        <div className="mt-3">
          <label htmlFor="group1">
            Do you a member of the LGBTQA+ community?
          </label>
          <div key="inline-radio" className="mb-3">
            <Form.Check
              required
              inline
              className="mx-2"
              label="Yes"
              name="lgbtqa"
              value="yes"
              type="radio"
              id="inline-radio-1"
              checked={user.lgbtqa === "yes"}
              onChange={(e) =>
                setUser((prevState) => ({
                  ...prevState,
                  lgbtqa: e.target.value,
                }))}
            />
            <Form.Check
              inline
              label="No"
              className="mx-2"
              name="lgbtqa"
              type="radio"
              value="no"
              checked={user.lgbtqa === "no"}
              id="inline-radio-2"
              onChange={(e) =>
                setUser((prevState) => ({
                  ...prevState,
                  lgbtqa: e.target.value,
                }))}
            />
            <Form.Check
              inline
              label="Prefer not to answer"
              className="mx-2"
              name="lgbtqa"
              type="radio"
              value="pref-not-answer"
              checked={user.lgbtqa === "pref-not-answer"}
              id="inline-radio-3"
              onChange={(e) =>
                setUser((prevState) => ({
                  ...prevState,
                  lgbtqa: e.target.value,
                }))}
            />
          </div>
        </div>
        <ButtonStyle>
          {user.personality ? (
            <Button className="btn-update" disabled={loading} type="submit">
              {loading ? "Loading ..." : "Update Profile"}
            </Button>
          ) : (
            <Button
              className="btn-update"
              disabled={loading}
              onClick={handleQuiz}
            >
              Continue
            </Button>
          )}
        </ButtonStyle>
      </Form>
    </MainLayout>
  );
}
