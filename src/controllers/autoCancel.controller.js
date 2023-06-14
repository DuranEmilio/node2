const { LicenciaUsuario } = require("../models/yimiusers.model");

async function autoCancellLicence(req, res) {
    try {
      const licences = await LicenciaUsuario.findAll();
      const licenceArray = licences.map((licence) => licence.toJSON());
      console.log(licenceArray);
      res.json(licenceArray);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  

autoCancellLicence();

module.exports = { autoCancellLicence }