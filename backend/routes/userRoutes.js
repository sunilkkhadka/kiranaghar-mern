const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

// const userController = require("../controllers/userController");
const {
  authUser,
  registerUser,
  getUserProfile,
  deleteUser,
  getUserById,
  updateUser,
  getUsers,
} = require("../controllers/userController");

router.route("/").post(registerUser);
// .get(authMiddleware.protect, admin, userController.getUsers);

router.post("/login", authUser);

router.route("/profile").get(authMiddleware.protect, getUserProfile);
// .put(authMiddleware.protect, userController.updateUserProfile);

// router
//   .route("/:id")
//   .delete(authMiddleware.protect, admin, userController.deleteUser)
//   .get(authMiddleware.protect, admin, userController.getUserById)
//   .put(authMiddleware.protect, admin, userController.updateUser);

module.exports = router;
