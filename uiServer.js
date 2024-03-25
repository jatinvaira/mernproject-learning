// uiServer.js

const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the "build" directory
app.use(express.static(path.join(__dirname, "build")));

// Define routes for different pages
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Add routes for other pages as needed
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Add more routes for other pages here

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`UI server running at http://localhost:${PORT}`);
});
