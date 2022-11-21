const express = require("express");
const {
  createCommentCtrl,
  updateCommentCtrl,
  deleteCommentCtrl,
} = require("../../controllers/comments/commentCtrl");
const isLogin = require("../../middlewares/isLogin");

const commentRouter = express.Router();

//POST/api/v1/comments
commentRouter.post("/:id", isLogin, createCommentCtrl);

//DELETE/api/v1/comments/:id
commentRouter.delete("/:id", isLogin, deleteCommentCtrl);

//PUT/api/v1/comments/:id
commentRouter.put("/:id", isLogin, updateCommentCtrl);

module.exports = commentRouter;
