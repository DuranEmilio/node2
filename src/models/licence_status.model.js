const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../database/database");
require("dotenv").config();

const LicenciaStatus = sequelize.define(
  "LicenciaStatus",
  {
    id_status_licencia: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING,
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
