export default function PuppyCard({ puppy }) {
  return (
    <div>
      <h4>{puppy.name}</h4>
      <ul>
        <li>
          <span>Age: {puppy.age}</span>
        </li>
        <li>
          {" "}
          <span>Breed: {puppy.breed}</span>
        </li>
      </ul>
      <h6>Tricks {puppy.name} knows:</h6>
      <ul>
        {puppy.Puppy_Trick.map((pt) => {
          return <li>{pt.trick.title}</li>;
        })}
      </ul>
    </div>
  );
}
