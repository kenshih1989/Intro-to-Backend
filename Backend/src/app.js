import express from "express";

const app = express(); //Create an express app

app.use(express.json()); // Middleware to parse JSON request bodies

// routes import
import userRouter from "./routes/user-routes.js";

// routes declaration
app.use("/api/v1/users", userRouter);

// example route: http://localhost:4000/api/v1/users/register

export default app;