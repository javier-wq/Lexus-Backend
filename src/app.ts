import "dotenv/config";
import express from "express";
import cors from "cors";
import fileUpload from "express-fileupload";
import { router } from "./routes";
import db from "./config/mongo";

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads",
  })
);

db().then(() => console.log("Connection established successfully"));

app.listen(PORT, () => console.log(`Server on port ${PORT}`));
