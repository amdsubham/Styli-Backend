require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser= require("body-parser");
const cookieParser= require("cookie-parser");
const cors= require("cors");
const modelRoutes = require("./routes/modelroutes");
const { getEnvironmentVariables } = require("./environments/env");


//DB Connections
mongoose
  .connect("mongodb+srv://model:4HeaiO2TpUA2Yoso@cluster0.2ftpa.mongodb.net/model?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB IS CONNECTED"))
  .catch((Error) => console.log.log(Error));



//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());



//Routes
app.use('/api',modelRoutes);



//Port
const port = process.env.PORT || 8000;


//Starting a Server
app.listen(port, () => {
  console.log(`App is running at ${port}`);
});
