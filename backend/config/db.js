// config/db.js
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "postgres",
  "postgres",
  "123",
  {
    host: "localhost",
    dialect: "postgres",
    port:5433,
    logging: false,
  }
);

export default sequelize;
