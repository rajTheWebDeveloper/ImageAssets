import express from "express";
import cors from "cors";
import connect from "./connect.js";
import PortRoutes from "./routes/portfolio.js";

let app = express();

app.use(express.json());
app.use("/public", express.static("./port-uploads"));
app.use("/portfolio", PortRoutes);

let start = async () => {
  await connect();
  app.listen(2000, () => {
    console.log("Listening on port 2000");
  });
};

start();
