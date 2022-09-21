import express from "express";

const router = express.Routes();

// Route URL with params
// Route with optional params = ?
router.post("/hobbit/:name?", (request, response, next) => {
  try {
    // access the request body
    let newHobbit = request.body;
    // Access the request url parameters
    let urlParams = request.params;
    // Access the request query parameters
    let queryParams = request.query;
    response.json({ success: true, hobbit: newHobbit, urlParams, queryParams });
  } catch (error) {
    next(error);
  }
});

export default router;
