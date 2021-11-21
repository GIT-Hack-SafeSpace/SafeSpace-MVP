import React, { useEffect, useState } from "react";
import { supabase } from "../utils/client";
import { useRouter } from "next/router";
import styled from "styled-components";
import CreateRantRave from "../components/forms/CreateRantRave";
import JournalEntry from "../components/journal/JournalEntry";
import ModalCreate from "../components/buttons/ModalCreate";
import MainLayout from "../layouts/MainLayout";
import { getPosts } from "../api/journalData";
import { Loader, ModalComp, Search, NoResults } from "../components/shared";

const JournalStyles = styled.div`
  background-color: #fefefe;

  h1 {
    border-bottom: 1px solid #e8e8e8;
    padding-bottom: 15px;
    font-size: 28px;
  }
`;

export default function RantRave() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [showModal, setShow] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const router = useRouter();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    // checking if a user is logged in. If not, redirect to login screen
    const user = supabase.auth.user();

    if (!user) {
      router.push("/login");
    } else {
      getPosts(user.id).then((posts) => {
        setData(posts);
        setLoading(false);
      });
      setUser(user);
    }
  }, []);

  const view = () => {
    if (loading) {
      return <Loader />;
    } else {
      return (
        <JournalStyles>
          <ModalComp
            showModal={showModal}
            handleClose={handleClose}
            handleShow={handleShow}
            title="Add Entry"
            trigger={ModalCreate}
          >
            <CreateRantRave
              handleClose={handleClose}
              user={user}
              setter={setData}
            />
          </ModalComp>
          <Search
            data={data}
            func={setSearchResults}
            attrs={["content", "title", 'who', 'where', 'tag_1', 'tag_2', 'tag_3', 'resolution']}
            placeholder="Search Journals"
          />
          <h1>Journal</h1>
          {!searchResults && <NoResults />}
          {searchResults?.length ? (
            searchResults.map((item, i) => (
              <JournalEntry
                key={i}
                data={item}
                user={user}
                setData={setData}
                setLoading={setLoading}
              />
            ))
          ) : data.length ? (
            data.map((item, i) => (
              <JournalEntry
                key={i}
                data={item}
                user={user}
                setData={setData}
                setLoading={setLoading}
              />
            ))
          ) : (
            <h2>Get Started, Create a Post!</h2>
          )}
        </JournalStyles>
      );
    }
  };

  return <MainLayout>{view()}</MainLayout>;
}
