import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import path from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const data = JSON.parse(fs.readFileSync(path.join(__dirname, "data.json"), "utf-8"));

const app = express();
const port = 4000;

app.use(cors({
  origin: 'http://localhost:4200',
  allowedHeaders: ['x-api-key', 'Content-Type']
}));

app.use(express.json());

const API_KEY = process.env.API_KEY;

function authenticateApiKey(req, res, next) {
  const apiKey = req.headers["x-api-key"];
  if (apiKey === API_KEY) {
    next();
  } else {
    res.status(401).json({ error: "Unauthorized: Invalid or missing API key" });
  }
}

app.get("/api/user", authenticateApiKey, (req, res) => {
  res.json(data.users);
});

app.post("/api/user", authenticateApiKey, (req, res) => {
  
const newUser = req.body;

  if (!newUser || !newUser.id || !newUser.username || !newUser.password || !newUser.name || !newUser.role) {
    return res.status(400).json({ error: "missing user data" });
  }

  data.users.push(newUser);

  fs.writeFileSync(
    path.join(__dirname, "data.json"),
    JSON.stringify(data, null, 2),
    "utf-8"
  );

  res.status(201).json({ message: "User added successfully", user: newUser });

});

app.get("/api/product", authenticateApiKey, (req, res) => {
  res.json(data.products);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
