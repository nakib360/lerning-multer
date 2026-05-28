import express from "express";
import cors from "cors";
import multer from "multer";
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, "uploads/");
    },

    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({storage});

app.post("/upload", upload.single("image"), (req, res) => {
    console.log(req.file);

    res.send("File uploaded in server!!!");
})

app.get("/", (req, res) => {
    res.send("server created");
})


app.listen(port, () => {
    console.log("app is running");
});