const router = require("express").Router();

const carModel = require("../models/Car.model");

//c

router.post("/create-car", async (req, res) => {
  try {
    const newCar = await carModel.create(req.body);
    return res.status(201).json(newCar);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

//r-all

router.get("/all-cars", async (req, res) => {
  try {
    const allCars = await carModel.find();
    return res.status(200).json(allCars);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

//r-one

router.get("/car/:carId", async (req, res) => {
  try {
    const { carId } = req.params;
    const detailedCar = await carModel
      .findOne({ _id: carId })
      .populate("reviews");
    return res.status(200).json(detailedCar);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

//e

router.patch("/edit/:carId", async (req, res) => {
  try {
    const { carId } = req.params;
    const editedCar = await carModel.findOneAndUpdate(
      { _id: carId },
      { ...req.body },
      { new: true, runValidators: true }
    );
    return res.status(200).json(editedCar);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

//d

router.delete("/delete/:carId", async (req, res) => {
  try {
    const { carId } = req.params;
    const deletedCar = await carModel.deleteOne({ _id: carId });
    return res.status(200).json(deletedCar);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

module.exports = router;
