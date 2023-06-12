const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../database/database");
require("dotenv").config();

const LicenciaStatus = sequelize.define(
  "LicenciaStatus",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "licencias_usuarios",
    timestamps: true,
  }
);

module.exports = { LicenciaStatus };
