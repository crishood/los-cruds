const express = require("express");
const cors = require("cors");
const { connect } = require("./src/db");
const userRouter = require("./src/routes/user");
const reviewRouter = require("./src/routes/review");

const port = 8080;
const app = express();

connect();

app.use(express.json());
app.use(cors());

app.use("/users", userRouter);
app.use("/reviews", reviewRouter);

app.listen(port, ()=>{
    console.log(`Estamos al aire en la ${port}`);
})