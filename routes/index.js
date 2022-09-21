import express from "express";

const router = express.Router();

// Absolute file paths
const homeFile = path.join(__dirname, "./public/index.html");
const aboutFile = path.join(__dirname, "./public/about.html");

// Routes are checked in order written (home, about, hobbits)
// Create a GET request for the home and about routes
router.get("/", (request, response, next) => {
  try {
    // sendFile takes in an ABSOLUTE filepath
    response.sendFile(homeFile);
  } catch (error) {
    next(error);
  }
});

router.get("/about", (request, response, next) => {
  try {
    response.sendFile(aboutFile);
  } catch (error) {
    next(error);
  }
});

router.get("/hobbit", (request, response, next) => {
  try {
    response.sendFile(path.join(__dirname, "./public/hobbit.json"));
  } catch (error) {
    next(error);
  }
});

// Route URL with params
// Route with optional params = ?
router.post("/hobbit/:name?", (request, response, next) => {
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

export default router;
