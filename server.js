import express from "express";
import morgan from "morgan";
import router from "./routes";
// TODO: import router from routes/

// Create the express application
const app = express();

// example middleware for ANY request
/*app.use((req, res, next) => {
  console.log(`${req.url}\t${req.method}\t${new Date().toLocaleTimeString()}`)
  next();
})*/

app.use(morgan("dev"));

// Parse incoming request bodies
app.use(express.json());

// Handle routes with router
app.use(router);

// Create custom middleware to handle errors
app.use((error, request, response, next) => {
  console.error(error);
  response.status(500);
  response.json({ success: false, msg: error.message });
});

app.listen(5000, () => {
  console.log(`Server listening at http://localhost/5000`);
});

//app.use(express.json());

// TODO: use the imported router to handle all requests

/*app.use((err, req, res, next) => {
  console.error(err);
  res.json({ name: err.name, msg: err.message });
});*/

/*app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}...`);
});*/
