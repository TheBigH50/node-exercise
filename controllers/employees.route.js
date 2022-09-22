import express from "express";
import employees from "../controllers/employees.controller";

const router = express.Router();

router.get("/:id?", async (req, res, next) => {
    try {
      let { id } = req.params;
      let data;
      if (id) {
        data = await db.findOne(id);
      } else {
        data = await db.findAll();
      }
      res.json(data);
    } catch (error) {
      next(error);
    }
  });
  