import express from "express";
import morgan from "morgan";
import router from "./routes/index";
import config from "./config";

const app = express();

app.use(morgan("dev"))

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
