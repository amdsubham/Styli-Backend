var mongoose = require("mongoose");
const { Schema } = mongoose;

const modelSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 80,
    },
    wear: {
      type: String,
      trim: true,
      required: true,
      maxlength: 10,
    },
    height: {
      type: Number,
      trim: true,
      required: true,
      maxlength: 50,
    },
    brust: {
      type: Number,
      trim: true,
      required: true,
      maxlength: 50,
    },
    waist: {
      type: Number,
      trim: true,
      required: true,
      maxlength: 800,
    },
    high_hip: {
      type: Number,
      trim: true,
      required: true,
      maxlength: 800,
    },
    low_hip: {
      type: Number,
      trim: true,
      required: true,
      maxlength: 800,
    },
    photo: {
      data: Buffer,
      contentType: String,
      
    },
  },

  { timestamps: true }
);
module.exports = mongoose.model("Model", modelSchema);
