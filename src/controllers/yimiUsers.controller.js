const { LicenciaUsuario } = require("../models/yimiusers.model");
const { LicenciaStatus } = require("../models/licence_status.model");

async function newLicence(req, res) {
  const {
    fecha_inicio,
    fecha_fin,
    fecha_pausa,
    dias_restantes_pausa,
    prueba_gratis,
    fk_id_usuario,
    fk_id_licencia,
    fk_id_pasarela,
    fk_id_status_licencia,
  } = req.body;
  try {
    let newLicence = await LicenciaUsuario.create({
      fecha_inicio,
      fecha_fin,
      fecha_pausa,
      dias_restantes_pausa,
      prueba_gratis,
      fk_id_usuario,
      fk_id_licencia,
      fk_id_pasarela,
      fk_id_status_licencia,
    })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(error);
        return false;
      });
    if (newLicence) {
      return res.status(200).json({
        code: "001",
        message: "Licencia creada",
        data: newLicence,
      });
    } else {
      return res.status(404).json({
        code: "002",
        message: "no se creo",
      });
    }
  } catch (error) {
    return res.status(500).json({
      code: "000",
      message: error.message,
    });
  }
}

async function getLicences(req, res) {
  try {
    const licences = await LicenciaUsuario.findAll();
    res.json({
      data: licences,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      code: "000",
    });
  }
}

async function getOneLicence(req, res) {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({
      code: "002",
      error: "ID is missing",
    });
  }
  try {
    const licence = await LicenciaUsuario.findOne({
      where: {
        id,
      },
    });
    if (!licence) {
      return res.status(404).json({
        code: "003",
        error: "Licence not found",
      });
    }
    res.json(licence);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      code: "000",
      error: "Internal server error",
    });
  }
}

async function deleteLicence(req, res) {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({
      code: "002",
      error: "ID is missing",
    });
  }
  try {
    const deleteRowCount = await LicenciaUsuario.destroy({
      where: {
        id,
      },
    });
    if (!deleteRowCount) {
      return res.status(404).json({
        code: "003",
        error: "Licence not found",
      });
    }
    res.json({
      code: "000",
      message: "Licencia eliminada",
      data: deleteRowCount,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      code: "000",
      error: "Internal server error",
    });
  }
}

// no funciona correctamente
async function updateLicence(req, res) {
  const { id } = req.params;
  const {
    fecha_inicio,
    fecha_fin,
    fecha_pausa,
    dias_restantes_pausa,
    prueba_gratis,
    fk_id_usuario,
    fk_id_licencia,
    fk_id_pasarela,
    fk_id_status_licencia,
  } = req.body;
  const licence = await LicenciaUsuario.findAll({
    attributes: [
      fecha_inicio,
      fecha_fin,
      fecha_pausa,
      dias_restantes_pausa,
      prueba_gratis,
      fk_id_usuario,
      fk_id_licencia,
      fk_id_pasarela,
      fk_id_status_licencia,
    ],
    where: {
      id,
    },
  });
  if (licence.length > 0) {
    licence.forEach(async (licences) => {
      await licences.update({
        fecha_inicio,
        fecha_fin,
        fecha_pausa,
        dias_restantes_pausa,
        prueba_gratis,
      });
    });
  }
  return res.json({
    code: "000",
    message: "Licencia actualizada",
    data: licence,
  });
}

async function getLicencesByStatus(req, res) {
  const { id } = req.params;
  const licences = await LicenciaStatus.findAll({
    where: {
      id,
    },
  });
  res.json({
    data: licences,
  });
}

module.exports = {
  newLicence,
  getLicences,
  getOneLicence,
  deleteLicence,
  updateLicence,
  getLicencesByStatus,
};
