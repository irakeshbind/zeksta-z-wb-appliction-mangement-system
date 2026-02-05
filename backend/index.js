import express from "express";
import sequelize from "./config/db.js";
import userRoutes from "./view/routes.js";
import employeeRoute from "./view/routes.js";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });
const app = express();
const PORT = process.env.PORT;
// middleware
app.use(express.json());

await sequelize.authenticate();
console.log("PostgreSQL connected");

await sequelize.sync({ alter: true });
// console.log("Models synced");

// routes
app.use("/api/users", userRoutes);
app.use("/api/employee", employeeRoute);

// server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
