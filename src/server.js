// Importing node modules
import express from "express";
import "dotenv/config";
import routes from "./routes/main.routes";
import productRouter from "./product/productRouter";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

//DB config
import db from "../config/db.config";
import "../config/all.table";
import cors from "cors";

// Passport config
// import passport from "passport";
// import configPassport from "../config/passport";
// configPassport(passport);

//set up cors
const whitelist = ["http://localhost:3000", process.env.URL_WEB];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
// consts
const app = express();

db.sync().then(console.log("Syncing Database Done!"));
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes);
app.use("/api/products", productRouter);
// arrow functions
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  // destructuring
  const { address, port } = server.address();

  // string interpolation:
  console.log(`Example app listening at http://${address}:${port}`);
});
