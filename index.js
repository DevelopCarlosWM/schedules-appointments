const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./database/models");
const cors = require("cors");

// for blocking cors, should be handled differently in the future
app.use(cors());

//parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
//routes import
const transactionRoutes = require("./src/routers/transactions");
const medicineRoutes = require("./src/routers/medicines");
const doctorsRoutes = require("./src/routers/doctors");
const schedulesRoutes = require("./src/routers/schedules");
const { authMiddleware } = require("./src/middlewares/authMiddleware");

// Middlewares
app.use(authMiddleware);

//routes
app.use("/api/recipes", transactionRoutes);
app.use("/api/doctors", doctorsRoutes);
app.use("/api/medicines", medicineRoutes);
app.use("/api/schedules", schedulesRoutes);

// General route not found
app.use((req, res, next) => {
  res.status(404).send("<h1> page not found</h1>");
});

db.sequelize
  .sync()
  .then((result) => {
    // start server
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error);
  });
