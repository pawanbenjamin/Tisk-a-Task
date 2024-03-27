import { useState } from "react";

export default function CreateTrick() {
  const [title, setTitle] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("Title: ", title);
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
