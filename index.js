const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.SERVER_PORT || 1234;
const cors = require("cors");

app.use(express.json());

app.use(
  cors({
    origin: ["https://ecommerce-frontend-md7h.onrender.com"],
    credentials: true,
  })
);
app.use("/api", require("./API/Users/Routers"));
app.use("/api", require("./API/Products/Routers"));
app.use("/api", require("./API/Category/Routers"));
app.use("/api", require("./API/Brands/Routers"));
app.use("/api", require("./API/Orders/Routers"));

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
