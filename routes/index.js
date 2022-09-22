import express from "express";
import userRouter from "./users.route"
import employeeRouter from "./employees.route"
// TODO: import router from users.route

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("working");
});

router.use("/employees", employeeRouter);

router.use("/users", userRouter);
// TODO: use the imported router to handle all routes matching "/users"

export default router;
