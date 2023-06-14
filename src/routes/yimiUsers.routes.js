const { Router } = require("express");
const router = Router();

const {
  newLicence,
  getLicences,
  getOneLicence,
  deleteLicence,
  updateLicence,
  getLicencesByStatus
} = require("../controllers/yimiUsers.controller");

router.post("/create", newLicence);
router.get("/getlicences", getLicences);

router.get("/:id", getOneLicence);
router.delete("/:id", deleteLicence);
router.put("/:id", updateLicence);

router.get("/status/:fk_id_status_licencia", getLicencesByStatus);

module.exports = router;
