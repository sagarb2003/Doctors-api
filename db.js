require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const { Schema } = mongoose;

const doctorSchema = new Schema({
  name: String,
  imageUrl: String,
  experience: String,
  specialization: String,
  fees: String,
});

const Doctors = mongoose.model("Doctors", doctorSchema);

module.exports = {
  Doctors
};
