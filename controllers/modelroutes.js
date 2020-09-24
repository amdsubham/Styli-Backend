const Model = require("../models/model");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");

//Add Model
exports.addModel = (req, res) => {
  const model = new Model(req.body);
  model.save((err, data) => {
    if (err) {
      return res.status(400).json({
        err: "Not able to save model in db",
      });
    }
    res.json(data);
  });
};

//Get all Models
exports.getAllModelsList = (req, res) => {
  Model.find({}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

//Update Model
exports.updateModel = (req, res) => {
  if (!req.body.name || !req.body.wear || !req.body.height) {
    res.status(400).send({
      message: "required fields cannot be empty",
    });
  }
  Model.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "no user found",
        });
      }
      res.status(200).send(user);
    })
    .catch((err) => {
      return res.status(404).send({
        message: "error while updating the post",
      });
    });
};

//Filter Model
exports.filterModels = (req, res) => {
  var name = req.body.name;

  var wear = req.body.wear;

  var heightFrom = req.body.height_from;
  var heightTo = req.body.height_to;

  var brustFrom = req.body.brust_from;
  var brustTo = req.body.brust_to;

  var waistFrom = req.body.waist_from;
  var waistTo = req.body.waist_to;

  var highHipFrom = req.body.high_hip_from;
  var highHipTo = req.body.high_hip_to;

  var lowHipFrom = req.body.low_hip_from;
  var lowHipTo = req.body.low_hip_to;

  Model.find(
    {
      name: RegExp(name, "i"),
      wear: RegExp(wear, "i"),
      height: { $gt: heightFrom || 0, $lt: heightTo || 500 },
      brust: { $gt: brustFrom || 0, $lt: brustTo || 500 },
      waist: { $gt: waistFrom || 0, $lt: waistTo || 500 },
      high_hip: { $gt: highHipFrom || 0, $lt: highHipTo || 500 },
      low_hip: { $gt: lowHipFrom || 0, $lt: lowHipTo || 500 },
    },
    function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
};
