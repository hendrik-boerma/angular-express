import express from "express";
import cors from "cors";
import { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));
const data = JSON.parse(fs.readFileSync(path.join(__dirname, "data.json"), "utf-8"));

const app = express();
const port = 4000;
const API_KEY = process.env.API_KEY;
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:4200',
  allowedHeaders: ['x-api-key', 'Content-Type']
}));

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
  const { username, password } = req.body;

  const user = data.users.find(user => user.username === username);

  if (!user) {
    return res.status(400).json({ message: 'Gebruiker bestaat niet' });
  }

  if (user.password !== password) {
    return res.status(400).json({ message: 'Combinatie van gebruikersnaam en wachtwoord is niet correct' });
  }

  return res.status(201).json({ username: user.username, name: user.name, role: user.role, promocards: user.promocards });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
