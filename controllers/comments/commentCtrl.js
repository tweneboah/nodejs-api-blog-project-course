const Comment = require("../../model/Comment/Comment");
const Post = require("../../model/Post/Post");
const User = require("../../model/User/User");
const { appErr } = require("../../utils/appErr");

//create
const createCommentCtrl = async (req, res, next) => {
  const { description } = req.body;
  try {
    //Find the post
    const post = await Post.findById(req.params.id);
    //create comment
    const comment = await Comment.create({
      post: post._id,
      description,
      user: req.userAuth,
    });
    //push the comment to post
    post.comments.push(comment._id);
    //Find the user
    const user = await User.findById(req.userAuth);
    //Push to user
    user.comments.push(comment._id);
    //save
    //Disable validation
    await post.save({ validateBeforeSave: false });
    await user.save({ validateBeforeSave: false });

    res.json({
      status: "success",
      data: comment,
    });
  } catch (error) {
    next(appErr(error.message));
  }
};

//delete
const deleteCommentCtrl = async (req, res, next) => {
  try {
    //find the Comment
    const comment = await Comment.findById(req.params.id);
    if (comment.user.toString() !== req.userAuth.toString()) {
      return next(appErr("You are not allowed to update this comment", 403));
    }
    await Comment.findByIdAndDelete(req.params.id);
    res.json({
      status: "success",
      data: "Comment has been deleted successfully",
    });
  } catch (error) {
    next(appErr(error.message));
  }
};

//update
const updateCommentCtrl = async (req, res, next) => {
  const { description } = req.body;
  try {
    //find the Comment
    const comment = await Comment.findById(req.params.id);
    if (comment.user.toString() !== req.userAuth.toString()) {
      return next(appErr("You are not allowed to update this comment", 403));
    }

    const category = await Comment.findByIdAndUpdate(
      req.params.id,
      { description },
      { new: true, runValidators: true }
    );
    res.json({
      status: "success",
      data: category,
    });
  } catch (error) {
    next(appErr(error.message));
  }
};

module.exports = {
  createCommentCtrl,
  updateCommentCtrl,
  deleteCommentCtrl,
};
