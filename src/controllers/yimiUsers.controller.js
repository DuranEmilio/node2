const { LicenciaUsuario } = require("../models/yimiusers.model");

async function getLicences(req, res) {
  const licences = await LicenciaUsuario.findAll();
  res.json({
    data: licences,
  });
}

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

module.exports = { newLicence, getLicences };
