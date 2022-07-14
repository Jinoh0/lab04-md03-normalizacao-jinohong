const router = require("express").Router();

const carModel = require("../models/Car.model");
const reviewModel = require("../models/Review.model");

//c-review

router.post("/create-review/:carId", async (req, res) => {
  try {
    const { carId } = req.params;
    const newReview = await reviewModel.create({ ...req.body, car: carId });
    const editedCar = await carModel.findOneAndUpdate(
      { _id: carId },
      { $push: { reviews: newReview._id } },
      { new: true }
    );
    return res.status(201).json(editedCar);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

//read all

router.get("/all-reviews", async (req, res) => {
  try {
    const allReviews = await reviewModel.find();
    return res.status(200).json(allReviews);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

//read one

router.get("/review/:reviewId", async (req, res) => {
  try {
    const { reviewId } = req.params;
    const detailedReview = await reviewModel.findOne({ _id: reviewId });
    return res.status(200).json(detailedReview);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

//edit

router.patch("/edit/:reviewId", async (req, res) => {
  try {
    const { reviewId } = req.params;
    const editedReview = await reviewModel.findOneAndUpdate(
      { _id: reviewId },
      { ...req.body },
      { new: true, runValidators: true }
    );
    return res.status(200).json(editedReview);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

//delete

router.delete("/delete/:reviewId", async (req, res) => {
  try {
    const { reviewId } = req.params;
    const deletedReview = await reviewModel.deleteOne({ _id: reviewId });
    return res.status(200).json(deletedReview);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

module.exports = router;
