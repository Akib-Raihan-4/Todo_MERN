const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs")

router.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const hashpassword = bcrypt.hashSync(password)
    const user = new User({ email, username, password: hashpassword });
    await user.save().then(() =>
      res.status(200).json({
        user: user,
      })
    );
  } catch (error) {
    res.status(400).json({ message: "User Already Exists" });
  }
});

module.exports = router;
