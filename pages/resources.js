import React, { useEffect, useState } from "react";
import { supabase } from "../utils/client";
import { useRouter } from "next/router";
import Loader from "../components/Loader";

export default function Resources() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // checking if a user is logged in. If not, redirect to login screen
    const user = supabase.auth.user();

    if (!user) {
      router.push("/login");
    }else {
      getAllResources()
    }
  }, []);

  const getAllResources = async () => {
    try {
      let { data: therapy, error, status} = await supabase
        .from('therapy')
        .select('*')

      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        setData(therapy);
      }
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
          <h1>{d.name}</h1>
          <h3>{d.therapy_type}</h3>
          <p>{d.profile_id}</p>
        </div>
      ));
    }
  };

  return <div>{view()}</div>;
}
