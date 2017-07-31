const express = require("express");
const router = express.Router();
const pictureController = require("../controllers/pictureController");
const handlers = require("../handlers/index");

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "picserver" });
});
router.get(
  "/:height/:width",
  handlers.catchErrors(pictureController.getDefaultPicture)
);

router.get(
  "/:height",
  handlers.catchErrors(pictureController.getDefaultPicture)
);

router.get(
  "/:height/:width/:color",
  handlers.catchErrors(pictureController.getColorPicture)
);

module.exports = router;
