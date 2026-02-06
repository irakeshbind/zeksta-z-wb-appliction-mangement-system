import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const addContent = sequelize.define(
  "addContent",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNumeric: true,
        len: [10, 15],
      },
    },

    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    imageId: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    logoId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "content",
    timestamps: true,
    underscored: true,
  },
);

export default addContent;
