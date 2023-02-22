const router = require("express").Router();
const File = require("../model/user");

router.post("/upload", async (req, res) => {
  try {
    if (req.files == null || req.files == undefined) {
      res.json({ msg: "No file uploaded" });
    } else {
      const file = req.files.file; //file-name attribute
      console.log(file);
      const time = new Date().toLocaleTimeString("en-In");
      const filePath = "./public/uploads/" + time + file.name;
      console.log(filePath);
      console.log(__dirname);
      if (file.truncated) {
        throw new Error("File size is Too Big...");
      }
      if (file.mimetype !== "image/jpeg") {
        throw new Error("Only jpg are supported");
      }
      await file.mv(filePath, (err) => {
        if (err) {
          console.log(err);
        } else {
          res.send("File uploaded");
        }
      });

      const filePathMongoDB = new File({
        file:
          "/users/sanjay/Downloads/Sparkout tech/node/fileUpload-express/public/uploads" +
          time +
          file.name,
      });
      await filePathMongoDB.save();
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/uploads", async (req, res) => {
  try {
    const files = req.files.files;
    //console.log(Object.keys(req.files.files));
    console.log(req.files.files);
    Object.keys(files).forEach((key) => {
      //Object.key-[0,1]
      console.log(key);
      const time = new Date().toLocaleTimeString("en-In");
      const filepath = "./public/uploads/" + time + files[key].name;
      files[key].mv(filepath, (err) => {
        console.log(err);
      });
    });

    res.send("file uploaded");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
