import express from "express";
import morgan from "morgan";
import router from "./routes/index";
import config from "./config";
import path from "path";

const app = express();

app.use(morgan("common"))

app.use(express.static(path.join(__dirname, "./public")))

app.use(express.json());

app.use("/api", router);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500);
  res.json({ name: err.name, msg: err.message });
});

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}...`);
});
