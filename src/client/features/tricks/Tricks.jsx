import React from "react";
import { useGetTricksQuery } from "./tricksSlice";

import CreateTrick from "./CreateTrick";

export default function AllTricks() {
  const data = useGetTricksQuery();

  console.log("data?", data);
  return (
    <div>
      <h1>All Tricks</h1>
      <p>{JSON.stringify(data, null, 2)}</p>
      <div>
        <h2>Create a Trick:</h2>
        <CreateTrick />
      </div>
    </div>
  );
}
