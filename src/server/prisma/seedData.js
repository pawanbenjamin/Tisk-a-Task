const puppies = [
  { id: 1, name: "Sir Waggington", breed: "Golden Doodle", age: 5, ownerId: 1 },
  {
    id: 2,
    name: "Fiona Penny Pickles",
    breed: "Corgi-Husky Mix",
    age: 6,
    ownerId: 1
  },
  {
    id: 3,
    name: "Professor Wagglesworth",
    breed: "Labradoodle",
    age: 6,
    ownerId: 2
  },
  {
    id: 4,
    name: "Sergeant Barkowitz",
    breed: "Bernedoodle",
    age: 4,
    ownerId: 2
  },
  {
    id: 5,
    name: "Captain Sniffer",
    breed: "Shiba Inu",
    age: 7,
    ownerId: 3
  },
  {
    id: 6,
    name: "Miss Furbulous",
    breed: "French Bulldog",
    age: 1,
    ownerId: 3
  },
  {
    id: 7,
    name: "Alfred von Wigglebottom",
    breed: "Pomeranian",
    age: 2,
    ownerId: 3
  }
];
const owners = [
  {
    id: 1,
    username: "maureenbio",
    password: "biologist123"
  },
  { id: 2, username: "teridactyl", password: "pterodactyl456" },
  { id: 3, username: "aidabug", password: "buglover789" }
];

const tricks = [
  { id: 1, title: "Sit" },
  { id: 2, title: "Lay Down" },
  { id: 3, title: "Jump through flaming hoop" },
  { id: 4, title: "ride motorcycle" }
];

const puppies_tricks = [
  { id: 1, puppyId: 1, trickId: 2 },
  { id: 2, puppyId: 1, trickId: 3 },
  { id: 3, puppyId: 3, trickId: 1 }
];

module.exports = { puppies, owners, tricks, puppies_tricks };
