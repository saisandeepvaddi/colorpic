const express = require("express");
const router = express.Router();
const pictureController = require("../controllers/pictureController");
const handlers = require("../handlers/index");

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "ColorPic" });
});
router.get(
  "/:height/:width",
  handlers.catchErrors(pictureController.getPicture)
);

router.get(
  "/:height",
  handlers.catchErrors(pictureController.getPicture)
);

router.get(
  "/:height/:width/:color",
  handlers.catchErrors(pictureController.getPicture)
);

module.exports = router;
