const express = require("express");
const fileUpload = require("express-fileupload");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 8000;
const connectDB = require("./config/db");
const router = require("./router/user");

app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true, //Use temp files instead of memory for managing the upload process.
    tempFileDir: path.join(__dirname, "temp"),
    createParentPath: true,
    limits: { fileSize: 1000000 }, //limited to 8000 kb
  })
);
app.use("/file", router);

connectDB();

app.listen(PORT, () => {
  console.log("Server is up and running");
});
