const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public"), { index: false }));

const dataPath = path.join(__dirname, "recipes.json");

// Get all recipes
app.get("/api/recipes", (req, res) => {
  if (fs.existsSync(dataPath)) {
    const data = fs.readFileSync(dataPath);
    res.json(JSON.parse(data));
  } else {
    res.json([]);
  }
});

// Add a new recipe
app.post("/api/recipes", (req, res) => {
  const newRecipe = req.body;
  let recipes = [];

  if (fs.existsSync(dataPath)) {
    const data = fs.readFileSync(dataPath);
    recipes = JSON.parse(data);
  }

  recipes.push(newRecipe);
  fs.writeFileSync(dataPath, JSON.stringify(recipes, null, 2));
  res.status(201).json({ message: "Recipe added!" });
});

// Optional: Route to serve add.html if someone types /add in browser
app.get("/add", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/add.html"));
});

// Optional: Route to serve start page (like a homepage selector)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/start.html")); // Change to index.html if not using start.html
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
