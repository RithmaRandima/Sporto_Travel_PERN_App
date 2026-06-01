import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname); // keeps original extension
    const name = path.basename(file.originalname, ext); // remove extension from name
    cb(null, `${name}_${Date.now()}${ext}`);
  },
});

const upload = multer({ storage: storage });

export default upload;
