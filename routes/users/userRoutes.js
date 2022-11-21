const express = require("express");
const storage = require("../../config/cloudinary");
const {
  userRegisterCtrl,
  usersCtrl,
  userLoginCtrl,
  userProfileCtrl,
  updateUserCtrl,
  profilePhotoUploadCtrl,
  whoViewedMyProfileCtrl,
  followingCtrl,
  blockUsersCtrl,
  unFollowCtrl,
  unblockUserCtrl,
  adminBlockUserCtrl,
  adminUnblockUserCtrl,
  updatePasswordCtrl,
  deleteUserAccountCtrl,
} = require("../../controllers/users/userCtrl");
const isLogin = require("../../middlewares/isLogin");
const multer = require("multer");
const isAdmin = require("../../middlewares/isAdmin");
const userRouter = express.Router();

//instance of multer
const upload = multer({ storage });

//POST/api/v1/users/register
userRouter.post("/register", userRegisterCtrl);

//POST/api/v1/users/login
userRouter.post("/login", userLoginCtrl);

//GET/api/v1/users
userRouter.get("/", usersCtrl);

//GET/api/v1/users/profile/:id
userRouter.get("/profile/", isLogin, userProfileCtrl);

//PUT/api/v1/users/:id
userRouter.put("/", isLogin, updateUserCtrl);

//GET/api/v1/users/profile-viewers/:id
userRouter.get("/profile-viewers/:id", isLogin, whoViewedMyProfileCtrl);

//GET/api/v1/users/following/:id
userRouter.get("/following/:id", isLogin, followingCtrl);

//GET/api/v1/users/unfollow/:id
userRouter.get("/unfollowing/:id", isLogin, unFollowCtrl);

//GET/api/v1/users/block/:id
userRouter.get("/block/:id", isLogin, blockUsersCtrl);

//GET/api/v1/users/unblock/:id
userRouter.get("/unblock/:id", isLogin, unblockUserCtrl);

//PUT/api/v1/users/unblock/:id
userRouter.put("/admin-block/:id", isLogin, isAdmin, adminBlockUserCtrl);

//PUT/api/v1/users/unblock/:id
userRouter.put("/admin-unblock/:id", isLogin, isAdmin, adminUnblockUserCtrl);

//PUT/api/v1/users/unblock/:id
userRouter.put("/update-password", isLogin, updatePasswordCtrl);

//DELETE/api/v1/users/unblock/:id
userRouter.delete("/delete-account", isLogin, deleteUserAccountCtrl);

//POST/api/v1/users/:id
userRouter.post(
  "/profile-photo-upload",
  isLogin,
  upload.single("profile"),
  profilePhotoUploadCtrl
);
module.exports = userRouter;
