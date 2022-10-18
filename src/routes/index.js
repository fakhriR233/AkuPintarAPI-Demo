const express = require("express");

const {
  addUsers,
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");

const router = express.Router();

//add
router.post("/user", addUsers);

//get
router.get("/user", getAllUsers);
router.get("/user/:id", getOneUser);

//patch
router.patch("/user/:id", updateUser);

//delete
router.delete("/user/:id", deleteUser);

module.exports = router;
