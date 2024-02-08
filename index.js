const express = require("express");
const {Doctors}=require('./db')

const app = express();
app.use(express.json());

app.post("/", async function (req, res) {
//   const details = req.body;
  await Doctors.create({
    name: req.body.name,
    imageUrl: req.body.imageUrl,
    experience: req.body.experience,
    specialization: req.body.specialization,
    fees: req.body.fees,
  });
  res.json({
    msg: "Doctors created successfully",
  });
});

app.get("/", async function (req, res) {
  const allDoctors = await Doctors.find();
  res.json(allDoctors);
});

app.listen(3001);
