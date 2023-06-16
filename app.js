const express = require("express");
const { json } = require("express");
const morgan = require("morgan");
const cors = require("cors");

const yimiUsersRoutes = require("./src/routes/yimiUsers.routes")

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(json());

app.use("/api/yimiUsers", yimiUsersRoutes);

module.exports = app;
