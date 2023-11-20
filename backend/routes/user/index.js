const express = require("express");
const route = express.Router();
const multer = require("../../middlewares/multer");
// Register router :  /api/register
route.post("/register", require("./register"));

// Login router :   /api/login
route.post("/login", require("./login"));

// Add blog router :  /api/addBlog
route.post("/addBlog/:id", multer.single("photo"), require("./addBlog"));

// Get all the blogs :  /api/blogs
route.get("/blogs", require("./getBlogs"));

// Update single blog :   /api/updateBlog
route.put("/updateBlog", require("./updateBlog"));

// Update single blog image :   /api/updateBlogImage
route.put(
  "/updateBlogImage",
  multer.single("photo"),
  require("./updateBlogImage")
);

// Get single blog :  /api/singleBlog
route.get("/singleBlog", require("./getSingleBlog"));

// Get own blogs :  /api/ownBlogs
route.get("/ownBlogs/:userId", require("./getOwnBlogs"));

// Report blog :  /api/reportBlog
route.put("/reportBlog/:blogId", require("./reportBlog"));

// Delete single blog :   /api/deleteBlog
route.delete("/deleteBlog", require("./deleteBlog"));

// Add comment :  /api/addComment
route.post("/addComment", require("./addComment"));

// Edit comment :   /api/editComment
route.put("/editComment", require("./editComment"));

// Delete comment :   /api/deleteComment
route.delete("/deleteComment", require("./deleteComment"));

// Get comments :   /api/getComments
route.get("/getComments", require("./getComments"));
// route.post("/addComment", require("./addComment"));

// Add like :   /api/addLike
route.post("/addLike", require("./addLike"));

// User update picture :  /api/updateProfilePicture
route.put(
  "/updateProfilePicture",
  multer.single("photo"),
  require("./updateUserImage")
);

// User get own profile :   /api/myData
route.get("/myData", require("./myData"));
module.exports = route;
