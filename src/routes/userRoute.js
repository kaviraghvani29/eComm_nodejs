const express = require("express");
const {
  getProfile,
  updateProfile,
  deleteProfile,
} = require("../controllers/userController");
const { isAuthenticated } = require("../middlewares/isauthentication");

const router = express.Router();

router.get("/myprofile", isAuthenticated, getProfile);
router.put("/updateProfile", isAuthenticated, updateProfile);
router.delete("/deleteProfile", isAuthenticated, deleteProfile);

module.exports = router;
