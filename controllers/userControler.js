const User = require('./../models/userModel');


// Get all users
exports.getAllUsers = async (req, res) => {
    try {
      const data = await User.find();
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
  
  // Create one User
  exports.createUser = async (req, res) => {
    try {
      const newUser = await User.create(req.body);
      res.status(200).json({
        state: "success",
        data: newUser,
      });
    } catch (err) {
      res.status(404).json({
        state: "fail",
        message: err,
      });
    }
  };
  
  // // Get one User
  exports.getOneUser = async (req, res) => {
    try {
      const id = req.params.id;
      const user = await User.findById(id);
      res.status(200).json({
        status: "success",
        data: user,
      });
    } catch (err) {
      res.status(404).json({
        status: "fail",
        massage: err,
      });
    }
  };
  
  // // Update one User
  exports.updateUser = async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      res.status(200).json({
        status: "seccess",
        data: user,
      });
    } catch (err) {
      res.status(404).json({
        status: "fail",
        message: err,
      });
    }
  };
  
  // Delete one user
  exports.deleteUser = async (req, res) => {
    try {
      await User.findByIdAndRemove(req.params.id);
      res.status(204).json({
        status: "success",
        data: "User deleted!",
      });
    } catch (err) {
      console.log(err);
      res.status(404).json({
        status: "fail",
        message: err,
      });
    }
  };