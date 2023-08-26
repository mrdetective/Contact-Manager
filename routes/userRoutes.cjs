const express = require("express");
const {route} = require("./ContactRoutes.cjs");
const {
  registerUser,
  loginUser,
  currentUser,
} = require("../Controllers/userController.cjs");
const validateToken = require("../middleware/validatetoken.cjs");
const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current", validateToken, currentUser);

module.exports = router;
