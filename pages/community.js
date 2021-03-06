import React, { useEffect, useState } from "react";
import { supabase } from "../utils/client";
import { useRouter } from "next/router";
import styled from "styled-components";
import MainLayout from "../layouts/MainLayout";
import CommunityPost from "../components/community/CommunityPost";
import { Search, NoResults, Loader } from "../components/shared";

const CommunityView = styled.div`
margin-bottom: 200px;
  h1 {
    font-size: 28px;
    border-bottom: 1px solid #e8e8e8;
    padding-bottom: 15px;
  }
`;

export default function Community() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchResults, setSearchResults] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const user = supabase.auth.user();

    if (!user) {
      router.push("/login");
    } else {
      getPosts();
    }
  }, []);
  const getPosts = async () => {
    try {
      let {
        data: rave_rant_post,
        error,
        status,
      } = await supabase
        .from("rave_rant_post")
        .select("*")
        .eq("share", true)
        .eq("deleted", false)
        .order("created_at", { ascending: false });

      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        setData(rave_rant_post);
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
        <CommunityView>
          <Search
            data={data}
            func={setSearchResults}
            attrs={["content", 'title', 'tag_1', 'tag_2', 'tag_3']}
            placeholder="Search Community"
          />
          <h1>Community</h1>
          {!searchResults && <NoResults />}
          {searchResults?.length
            ? searchResults.map((item, i) => (
                <CommunityPost key={i} data={item} />
              ))
            : data.map((item, i) => <CommunityPost key={i} data={item} />)}
        </CommunityView>
      );
    }
  };

  return <MainLayout>{view()}</MainLayout>;
}
