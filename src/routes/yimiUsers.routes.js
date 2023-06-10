const { Router } = require("express");
const router = Router();

const { newLicence } = require("../controllers/yimiUsers.controller");

router.post("/create", newLicence);

module.exports = router;
