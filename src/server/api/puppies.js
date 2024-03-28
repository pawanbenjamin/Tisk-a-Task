const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const puppies = await prisma.puppy.findMany({
      include: {
        Puppy_Trick: {
          include: {
            trick: true
          }
        }
      }
    });
    res.json(puppies);
  } catch (error) {
    next(error);
  }
});
