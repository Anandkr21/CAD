const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Node.js server is running!");
});

app.get("/users", (req, res) => {
    res.json([
        { id: 1, name: "Anand" },
        { id: 2, name: "Rahul" }
    ]);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});