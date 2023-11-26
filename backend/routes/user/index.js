const express = require("express");
const route = express.Router();
const multer = require("../../middlewares/multer");
// // Register router :  /guide/api/register
route.post("/signin", require("./register"));

// // Login router :   /guide/api/login
route.post("/login", require("./login"));

// // Get all the guides : /guide/api/guides
route.get("/guides", require("./getGuides"));

// // Get guide : /guide/api/guide
route.get("/guide", require("./getGuide"));

// choose guide: /guide/api/chooseGuide
route.put("/chooseGuide", require("./chooseGuide"));

module.exports = route;
