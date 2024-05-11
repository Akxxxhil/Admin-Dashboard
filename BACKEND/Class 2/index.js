const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());

const PORT = process.env.PORT || 4000;

const todoRoutes = require("./Routes/Todo");
app.use("/app/v1", todoRoutes);

app.listen(PORT, () => {
    console.log("server is listening");
});

const dbconnect = require("./config/database");
dbconnect();

app.get('/', (req, res) => {
    res.send("everything good");
});
