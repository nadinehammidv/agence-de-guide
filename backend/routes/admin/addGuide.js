const Guide = require("../../models/Guide");
const fs = require("fs");
const path = require("path");
module.exports = async (req, res) => {
  try {
    let { name, resume, adress } = req.body;
    // console.log("__dirname", __dirname);
    const imgBuffer = fs.readFileSync(
      path.join(
        "C:/Users/Nadine/Desktop/blogapp/backend",
        "uploads",
        req.file.filename
      )
    );
    const base64Image = await imgBuffer.toString("base64");
    const newGuide = await new Guide({
      name,
      resume,
      adress,
      imgUrl: base64Image,
    });
    await newGuide.save();
    res
      .status(200)
      .json({ status: true, message: "Your guide was added successfully" });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
