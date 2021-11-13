import React, { useEffect, useState } from "react";
import { supabase } from "../utils/client";
import { useRouter } from "next/router";
import Loader from "../components/Loader";

export default function Inspiration() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // checking if a user is logged in. If not, redirect to login screen
    const user = supabase.auth.user();

    if (!user) {
      router.push('/login');
    }else {
      getAllInspoPosts()
    }
  }, []);


  const getAllInspoPosts = async () => {
    try {
      let { data: inspo_post, error, status} = await supabase
        .from('inspo_post')
        .select('*')

        if (error && status !== 406) {
          throw error;
        }
        if (data) {
          setData(inspo_post);
        }
      console.log(data, "this tha data")
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  const view = () => {
    if (loading) {
      return <Loader />;
    } else {
      return data.map((d) => (
        <div key={d.id} className='text-white'>
          <h1>{d.content}</h1>
          <h3>{d.created_at}</h3>
          <p>{d.profile_id}</p>
        </div>
      ));
    }
  };


  return <div>{view()}</div>;
}
