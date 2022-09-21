import express from "express";
import config from "./config";
import path from "path";
// TODO: import router from routes/

const app = express();


// Absolute file paths
const homeFile = path.join(__dirname, "./public/index.html");
const aboutFile = path.join(__dirname, "./public/about.html");


// Create a GET request for the home and about routes
app.get("/", (request, response) => {
  try{
  // sendFile takes in an ABSOLUTE filepath
  response.sendFile(homeFile);
  } catch (error) {
    console.error(error);
    response.json({ success: false, msg: error.message});
  }
});

app.get("/about", (request, response) => {
  try {
    
  response.sendFile(aboutFile);
  } catch (error) {
    console.error(error);
    response.json({ success: false, msg: error.message});
  }
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

app.listen(5000, () => {
  console.log(`Server listening at http://localhost/5000`)
})
