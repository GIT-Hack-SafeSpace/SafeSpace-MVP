import React from "react";
import { useRouter } from "next/router";

export default function SingleEntry() {
  const router = useRouter();
  const { id } = router.query;

  // call to the DB with the id of the item we want to get

  return <p >ID: {id}</p>;
}
