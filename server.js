require("dotenv").config();

const express = require("express");
const authRoute = require("./routes/auth-route");
const contactForm = require("./routes/contactForm");
const productRoute = require("./routes/product-route");
const cors = require("cors");
const app = express();
const errorMiddleware = require("./Middleware/error-Middleware");
const connectDb = require("./Utils/db");

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactForm);
app.use("/api/data", productRoute);

app.use(errorMiddleware);

const PORT = process.env.PORT;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
  });
});
