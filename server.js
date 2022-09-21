import express from "express";
import morgan  from "morgan";
import path from "path";
// TODO: import router from routes/

const app = express();

// Absolute file paths
const homeFile = path.join(__dirname, "./public/index.html");
const aboutFile = path.join(__dirname, "./public/about.html");

// example middleware for ANY request
/*app.use((req, res, next) => {
  console.log(`${req.url}\t${req.method}\t${new Date().toLocaleTimeString()}`)
  next();
})*/

app.use(morgan("dev"));

// Parse incoming request bodies
app.use(express.json());

// Routes are checked in order written (home, about, hobbits)
// Create a GET request for the home and about routes
app.get("/", (request, response) => {
  try {
    // sendFile takes in an ABSOLUTE filepath
    response.sendFile(homeFile);
  } catch (error) {
    next(error);
  }
});

app.get("/about", (request, response) => {
  try {
    response.sendFile(aboutFile);
  } catch (error) {
    next(error);
  }
});

app.get("/hobbit", (request, response) => {
  try {
    response.sendFile(path.join(__dirname, "./public/hobbit.json"));
  } catch (error) {
    next(error);
});

// Route URL with params
// Route with optional params = ?
app.post("/hobbit/:name?", (request, response) => {
  try {
    // access the request body
    let newHobbit = request.body;
    // Access the request url parameters
    let urlParams = request.params;
    // Access the request query parameters
    let queryParams = request.query
    response.json({ success: true, hobbit: newHobbit, urlParams, queryParams });
  } catch (error) {
    next(error);
  }
});

// Create custom middleware to handle errors
app.use((error, request, response, next) => {
  console.error(error);
  response.status(500);
  response.json({ success: false, msg: error.message });
})

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


