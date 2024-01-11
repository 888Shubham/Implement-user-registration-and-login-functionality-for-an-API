// Please don't change the pre-written code
// Import the necessary modules here
import {addUser, confirmLogin, getAllUsers} from '../model/user.model.js';

export const registerUser = (req, res, next) => {
  // Write your code here
  // console.log("aduser",req.body);
  const user = addUser(req.body);
  // console.log("user:",user)
  res.status(201).json({ "status": "success", "user": user });
  next();
};

export const loginUser = (req, res) => {
  // Write your code here
  // console.log("login",req.body);
  const result = confirmLogin(req.body);
  // console.log("result", result);
  if (!result) {
    return res.status(400).json({ "status": "failure", "msg": "invalid user details" });
  } else {
    return res.status(200).json({ "status": "success", "msg": "login successful" });
  }

};
