import dotenv from "dotenv";
import express from "express";
import "./v1/databases/connection.mongodb";
import routerV1 from "./v1/routes";

//preload
/*
dotenv.config({
  path: "./config/example.env",
});
*/
process.on("uncaughtException", (e) => {
  console.error(e);
});

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router
app.use("/api/v1", routerV1);

// middleware notfound error
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 500;
  next(error);
});

// middleware handle error
// exception from router will call this function..
app.use((err, req, res, next) => {
  res.json({
    status: err.status || 500,
    msg: err.message,
  });
});
app.listen(1334, console.info("Server is running at port 1334!"));
