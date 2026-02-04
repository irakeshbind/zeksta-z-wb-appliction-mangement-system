import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
const Employees = sequelize.define(
  "Employees",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    address:{
        type:DataTypes.STRING,
        allowNull:false
    },

    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
  },
  {
    tableName: "employees",
    timestamps: true,
  },
);
export default Employees;
