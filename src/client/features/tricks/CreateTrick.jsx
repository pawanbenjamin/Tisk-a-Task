import { useState } from "react";
import { useCreateTrickMutation } from "./tricksSlice";

export default function CreateTrick() {
  const [title, setTitle] = useState("");

  const [createTrick] = useCreateTrickMutation();

  async function handleSubmit(e) {
    e.preventDefault();
    createTrick({ title });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          type="text"
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Create Trick</button>
      </form>
    </div>
  );
}
