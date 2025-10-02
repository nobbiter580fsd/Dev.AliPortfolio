const express = require("express");
const app = express();
const PORT = 3000;

// Static files (HTML, CSS, JS) serve karne ke liye
app.use(express.static("public"));

// Home Route
app.get("/", (req, res) => {
  res.send("Welcome to My Personal Website!");
});

// Server start karna
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


