const { ServerError } = require("../errors");

const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const tricks = await prisma.trick.findMany({});
    res.json(tricks);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { title } = req.body;
    const createdTrick = await prisma.trick.create({
      data: { title }
    });
    res.json(createdTrick);
  } catch (error) {
    next(error);
  }
});
