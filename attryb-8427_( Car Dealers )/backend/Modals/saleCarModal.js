/** @format */
let mongoose = require("mongoose");

let saleCarSchema = mongoose.Schema(
  {
    MajorScratches: { type: String, required: true },
    OriginalPaint: { type: Boolean, required: true },
    noOfAccidentsReport: { type: String, required: true },
    noOfPreviousBuyers: { type: String, required: true },
    RegistrationPlace: { type: String, required: true },
    kms: { type: String, required: true },
    modal: { enum: ["TATA", "AUDI", "TASLA"] },
    author: { type: mongoose.Schema.Types.ObjectId, required: true },
    author: { type: [String], required: true },
  },
  { versionKey: false, timestamps: true }
);

let SaleCarModal = mongoose.model("dealer", saleCarSchema);

module.exports = { SaleCarModal };
