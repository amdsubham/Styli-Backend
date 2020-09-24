const express = require("express");
var router = express.Router();
const {
  getAllModelsList,
  updateModel,
  addModel,
  filterModels,
} = require("../controllers/modelroutes");

router.post("/addmodel", addModel);
router.get("/models", getAllModelsList);
router.put("/model/:id", updateModel);
router.post("/filtermodels", filterModels);
module.exports = router;
