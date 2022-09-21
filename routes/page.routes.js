import express from "express";
import path from "path";

const router = express.Router();

// Absolute file paths
const homeFile = path.join(__dirname, "../public/index.html");
const aboutFile = path.join(__dirname, "../public/about.html");

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

export default router;
