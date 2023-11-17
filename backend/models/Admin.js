const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  adminName: {
    type: String,
    required: [true, "This is a required field, please insert a adminname"],
  },
  email: {
    type: String,
    required: [true, "This is a required field, please insert an email"],
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "This is invalid email, please check it again",
    ],
  },
  password: {
    type: String,
    required: [true, "This is a required field, please insert a password"],
    match: [
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+|~-]).{8,}$/,
      `Your password must contain 8 characters with at least one uppercase character, one lowercase character and one special character (!@#$%^&*()_+|~-)`,
    ],
  },
  isAdmin: {
    type: Boolean,
    default: true,
  },
  imgUrl: {
    type: "string",
    default:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP8BjSsGYnOeIFaSgjqS04Uv76aH5Kx7aklQ&usqp=CAU",
  },
},
    {
       timestamps:true,
   } 


);
module.exports = Admin = mongoose.model("Admin", adminSchema);
    