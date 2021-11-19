import React, { useEffect, useState } from "react";
import { supabase } from "../utils/client";
import { useRouter } from "next/router";
import Loader from "../components/Loader";
import ModalComp from "../components/Modal";
import CreateRantRave from "../components/CreateRantRave";
import JournalEntry from "../components/JournalEntry";
import MainLayout from "../layouts/MainLayout";
import { getPosts } from "../api/journalData";

import styled from "styled-components";

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
    // subscribe to all inserts (post)
    const rave_rant_post = supabase
      .from(`rave_rant_post`)
      .on("INSERT", (payload) => {
        if(payload.profile_id === user.id){
          handleInsert(payload);
        }
      })
      .subscribe();

    return () => supabase.removeSubscription(rave_rant_post);
  }, []);

  const handleInsert = (payload) => {
    setData((prevPosts) => [payload.new, ...prevPosts]);
  };

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
          >
            <CreateRantRave handleClose={handleClose} user={user} />
          </ModalComp>
          <h1>Journal</h1>
          {data.map((item, i) => (
            <JournalEntry key={i} data={item} setData={setData} />
          ))}
        </JournalStyles>
      );
    }
  };

  return <MainLayout>{view()}</MainLayout>;
}
