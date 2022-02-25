const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
const ShowController = require("./controllers/Shows.controller")
const ScreenController = require("./controllers/Screen.controller")
const TheatreController = require("./controllers/Theatre.controller")
const UserController = require("./controllers/User.controller")
const MovieController = require("./controllers/Movie.controller")
app.use("/movie", MovieController)
app.use("/user", UserController)
app.use("/theatre", TheatreController)
app.use("/screen", ScreenController)
app.use("/shows", ShowController)
module.exports = app;
