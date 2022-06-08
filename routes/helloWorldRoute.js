const { Router } = require("express");
const {
  getHelloWorldText,
  sendHelloWorldText,
} = require("../controllers/helloWorldControllers");

const router = Router();

router.get("/get-text", getHelloWorldText);
router.post("/save-text", sendHelloWorldText);

module.exports = router;
