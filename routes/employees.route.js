import express from "express";
import employees from "../controllers/employees.controller";

const router = express.Router();

router.get("/:id?", async (req, res, next) => {
    try {
      let { id } = req.params;
      let data;
      if (id) {
        [data] = await employees.findOne(parseInt(id));
      } else {
        data = await employees.findAll();
      }
      res.json(data);
    } catch (error) {
      next(error);
    }
  });
  
  export default router;