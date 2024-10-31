import express from "express";
import livrosRoutes from "./routes/livrosRoutes";

const app = express();
app.use(express.json());
app.use("/api", livrosRoutes);

export default app;