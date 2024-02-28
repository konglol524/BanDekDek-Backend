const mongoose = require("mongoose");

const RentalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
    unique: true,
    trim: true,
    maxlength: [50, "Name can not be more than 50 characters"],
  },
  address: {
    type: String,
    required: [true, "Please add an address"],
  },
  tel: {
    type: String,
    minlength: [10, "Telephone number must be exactly 10 characters long"],
    maxlength: [10, "Telephone number must be exactly 10 characters long"],
  },
});

module.exports = mongoose.model("Rental", RentalSchema);
