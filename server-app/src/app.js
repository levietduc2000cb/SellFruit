const express = require("express");
const cors = require("cors");

const { connectDb, disConnectDb } = require("./config/configDatabase");

const UserRouter = require("./routers/UserRouter");
const ItemsRouter = require("./routers/ItemsRouter");
const Orders = require("./routers/OrdersRouter");
const NewsRouter = require("./routers/NewsRouter");
const CommentRouter = require("./routers/CommentRouter");
const SendEmail = require("./routers/SendEmailRouter");
const TokenRouter = require("./routers/TokenRouter");

const app = express();

connectDb();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use("/user", UserRouter);
app.use("/fruitItems", ItemsRouter);
app.use("/orders", Orders);
app.use("/news", NewsRouter);
app.use("/comments", CommentRouter);
app.use("/email", SendEmail);
app.use("/", TokenRouter);

process.on("SIGINT", async () => {
  disConnectDb();
  process.exit(1);
});

module.exports = app;
