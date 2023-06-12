const { Router } = require("express");
const router = Router();

const { newLicence, getLicences } = require("../controllers/yimiUsers.controller");

router.post("/create", newLicence);
router.get("/getLicences",getLicences);


module.exports = router;



