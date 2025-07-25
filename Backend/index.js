import express from "express";
import cors from "cors";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 4000;

app.use(cors());

app.get("/api/user", (req, res) => {
  res.sendFile(__dirname + "/data.json");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
