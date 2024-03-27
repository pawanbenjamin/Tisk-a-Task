const prisma = require("../prisma");

const { puppies, owners, tricks, puppies_tricks } = require("./seedData");
/** Seeds the database with a user and some tasks */
const seed = async () => {
  console.log("Starting To Seed Owners... 🙋🏽‍♂️");
  for (const owner of owners) {
    await prisma.user.upsert({
      where: { username: owner.username },
      update: {},
      create: {
        ...owner
      }
    });
  }

  console.log("Starting to seed Puppies... 🐶");

  for (const puppy of puppies) {
    await prisma.puppy.upsert({
      where: { name: puppy.name },
      update: {},
      create: {
        ...puppy
      }
    });
  }

  console.log("Starting to seed tricks... 🪄");

  for (const trick of tricks) {
    await prisma.trick.upsert({
      where: { title: trick.title },
      update: {},
      create: {
        ...trick
      }
    });
  }

  console.log("Teaching the puppers some tricks... 🙋🏽‍♂️ 🏀 🪄 🐕");
  for (const puppy_trick of puppies_tricks) {
    await prisma.puppy_Trick.upsert({
      where: { id: puppy_trick.id },
      update: {},
      create: {
        ...puppy_trick
      }
    });
  }
};

seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
