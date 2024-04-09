const mongoose = require("mongoose");

const conn = async (req, res) => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://raihanakib:ToDoList101@cluster0.3amynth.mongodb.net/"
      )
      .then(() => {
        console.log("connected");
      });
  } catch (error) {
    res.status(400).json({
      message: "Not Connected",
    });
  }
};

conn();
