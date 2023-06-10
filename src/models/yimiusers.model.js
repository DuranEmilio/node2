const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../database/database");
require("dotenv").config();

const LicenciaUsuario = sequelize.define(
  "LicenciaUsuario",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    fk_id_usuario: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    fk_id_licencia: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    fecha_inicio: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
    fecha_fin: {
      type: DataTypes.DATE,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    fk_id_pasarela: {
      type: DataTypes.UUID,
    },
    fk_id_status_licencia: {
      type: DataTypes.UUID,
    },
    fecha_pausa: {
      type: DataTypes.DATE,
    },
    dias_restantes_pausa: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    prueba_gratis: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: "licencias_usuarios",
    timestamps: true,
  }
);

module.exports = { LicenciaUsuario };
