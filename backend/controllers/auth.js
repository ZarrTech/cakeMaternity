const User = require("../model/user");
const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcryptjs");

// register
const register = async (req, res) => {
  const { name, email, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
    const tempUser = { name, email, password: hashPassword };
    
  const user = await User.create({ ...tempUser });
  res.status(StatusCodes.CREATED).json({ user });
};

// login
const login = async (req, res) => {
  res.json("logged in");
};

module.exports = { register, login };
