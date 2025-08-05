import express from "express";
import cors from "cors";
import { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import path from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const data = JSON.parse(fs.readFileSync(path.join(__dirname, "data.json"), "utf-8"));

const app = express();
const port = 4000;

app.use(cors());

app.get("/api/user", (req, res) => {
  res.json(data.users);
});

app.get("/api/product", (req, res) => {
  res.json(data.products);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
