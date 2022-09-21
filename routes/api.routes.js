import express from "express";
import db from "../mockdb";

const router = express.Router();

// Get all users from the DB

router.get("/users", async (req, res, next) => {
    try {
    let data = await db.getAll();
    res.json(data)
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
    let queryParams = request.query;
    response.json({ success: true, hobbit: newHobbit, urlParams, queryParams });
  } catch (error) {
    next(error);
  }
});

export default router;
