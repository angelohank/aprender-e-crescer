import express from "express";
import livrosRouter from "./routes/livros-routes.js";

const app = express();
app.use(express.json());
app.use("/livros", livrosRouter);

app.listen(3000);
