import express from "express";
import config from "./config";
// TODO: import router from routes/

const app = express();

// Create a GET request for the home and about routes
app.get("/", (request, response) => {
  response.send('home');
});

app.get("/about", (request, response) => {
  response.send('about');
});

app.use(express.json());

// TODO: use the imported router to handle all requests

app.use((err, req, res, next) => {
  console.error(err);
  res.json({ name: err.name, msg: err.message });
});

/*app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}...`);
});*/

app.listen(5000, () => {
  console.log(`Server listening at http://localhost/5000`)
})
