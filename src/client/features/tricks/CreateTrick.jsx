import { useState } from "react";

export default function CreateTrick() {
  const [title, setTitle] = useState("");
  return (
    <div>
      <form>
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
