const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const puppies = await prisma.puppy.findMany({});
    res.json(puppies);
  } catch (error) {
    next(error);
  }
});
