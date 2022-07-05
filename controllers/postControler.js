const Post = require("./../models/postModel");

// // Get all posts
exports.getAllPosts = async (req, res) => {
  try {
    const data = await Post.find();
    res.status(200).json({
      status: "success",
      data: data,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      data: err,
    });
  }
};

// Create one Post
exports.createPost = async (req, res) => {
  try {
    const newPost = await Post.create(req.body);
    res.status(200).json({
      state: "success",
      data: newPost,
    });
  } catch (err) {
    res.status(404).json({
      state: "fail",
      message: err,
    });
  }
};

// // Get one Post
exports.getOnePost = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await Post.findById(id);
    res.status(200).json({
      status: "success",
      data: post,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      massage: err,
    });
  }
};

// // Update one Post
exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "seccess",
      data: post,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// Delete one Post
exports.deletePost = async (req, res) => {
  try {
    await Post.findByIdAndRemove(req.params.id);
    res.status(204).json({
      status: "success",
      data: "post deleted!",
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
