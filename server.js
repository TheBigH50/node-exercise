import express, { response } from "express";
import config from "./config";
import router from "./index";

const app = express();

app.use(express.json());

app.use(router)

app.use((err, req, res, next) => {
  console.error(err);
  response.status(500);
  res.json({ name: err.name, msg: err.message });
});

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}...`);
});
