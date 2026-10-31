
const express = require("express");

const app = express();

// GET / - Home route
app.get("/", (req, res) => {
    res.status(200).send("Welcome to my Express server!");
});

// GET /about - Name and section
app.get("/about", (req, res) => {
    res.status(200).json({
        name: "T.Neeraj Kumar reddy",
        section: "Your Section"
    });
});

// GET /time - Current date and time
app.get("/time", (req, res) => {
    res.status(200).json({
        currentTime: new Date()
    });
});

// 404 handler for unknown paths
app.use((req, res) => {
    res.status(404).send("404 - Page not found");
});

// Start the server
app.listen(3000, () => {
    console.log("Express server running at http://localhost:3000");
});
