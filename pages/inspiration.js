import React, { useEffect, useState } from "react";
import { supabase } from "../utils/client";
import { useRouter } from "next/router";
import ReactPlayer from "react-player/lazy";
import Loader from "../components/Loader";
import MainLayout from "../layouts/MainLayout";
import InspirationImage from "../components/InspirationImage";
import CreateInspo from "../components/CreateInspo";
import ModalComp from "../components/Modal";
import ModalCreate from "../components/buttons/ModalCreate";
import styled from "styled-components";
import Search from "../components/Search";
import InspoMedia from "../components/InspoMedia";
import NoResults from "../components/NoResults";

const InspoStyles = styled.div`
  background-color: #fefefe;

  h1 {
    border-bottom: 1px solid #e8e8e8;
    padding-bottom: 15px;
    font-size: 28px;
    margin-bottom: 25px;
  }
`;
export default function Inspiration() {
  const [data, setData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
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
      getAllInspoPosts();
      setUser(user);
    }

    // subscribe to all inserts (post)
    const inspoPost = supabase
      .from("inspo_post")
      .on("INSERT", (payload) => {
        handleInsert(payload);
      })
      .subscribe();

    return () => supabase.removeSubscription(inspoPost);
  }, []);

  const handleInsert = (payload) => {
    setData((prevPosts) => [payload.new, ...prevPosts]);
  };

  const getAllInspoPosts = async () => {
    try {
      let {
        data: inspo_post,
        error,
        status,
      } = await supabase
        .from("inspo_post")
        .select("*")
        .order("created_at", { ascending: false });

      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        setData(inspo_post);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const view = () => {
    if (loading) {
      return <Loader />;
    } else {
      return (
        <InspoStyles>
          <ModalComp
            showModal={showModal}
            handleClose={handleClose}
            handleShow={handleShow}
            title="Create Inspiration"
            trigger={ModalCreate}
          >
            <CreateInspo handleClose={handleClose} user={user} />
          </ModalComp>
          <Search
            data={data}
            func={setSearchResults}
            attrs={["content"]}
            placeholder="Search Inspirations"
          />
          <h1>Inspiration</h1>
          {!searchResults && <NoResults />}
          {searchResults?.length
            ? searchResults.map((media, i) => <InspoMedia key={i} media={media} />)
            : data.map((media, i) => <InspoMedia key={i} media={media} />)}
        </InspoStyles>
      );
    }
  };

  return <MainLayout>{view()}</MainLayout>;
}
