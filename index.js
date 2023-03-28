import express from "express";
import dotenv from "dotenv";
import clientRouter from "./src/routes/client.router.js";
import authorRouter from "./src/routes/author.router.js";
import bookRouter from "./src/routes/book.router.js";
import saleRouter from "./src/routes/sale.router.js";

dotenv.config();
const app = express();
app.use(express.json());

app.use("/cliente", clientRouter);
app.use("/autor", authorRouter);
app.use("/livro", bookRouter);
app.use("/venda", saleRouter);
app.use((error, req, res, next) => {
  res.status(400).send({ message: error.message });
});

app.listen(3000, () => {
  console.log(`App running on port 3000`);
});
