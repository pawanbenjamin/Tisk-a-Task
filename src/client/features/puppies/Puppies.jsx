import { useGetPuppiesQuery } from "./puppiesSlice";

import PuppyCard from "./PuppyCard";

export default function Puppies() {
  const { data } = useGetPuppiesQuery();

  console.log(data);
  return (
    <div>
      {data?.map((puppy) => {
        return <PuppyCard puppy={puppy} />;
      })}
    </div>
  );
}
