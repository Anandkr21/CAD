const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Node.js server is running!");
});
//  CRUD        METHOD
//  CREATE       POST
//  READ         GET
//  UPDATE       PATCH/PUT
//  DELETE       DELETE


app.get("/users", (req, res) => {
    res.json([
        { id: 1, name: "Anand" },
        { id: 2, name: "Rahul" }
    ]);
});

const PORT = process.env.port;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});