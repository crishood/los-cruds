const Review = require("../models/review.model");

module.exports = {

  list(req, res) {
    Review.find()
      .then((reviews) => {
        res.status(200).json({ message: "reviews found", data: reviews });
      })
      .catch((err) => {
        res.status(404).json({ message: "reviews not found" });
      });
  },

  show(req, res) {
    const { reviewId } = req.params;

    Review.findById(reviewId)
      .then((review) => {
        res.status(200).json({ message: "review found", data: review });
      })
      .catch((err) => {
        res.status(404).json({ message: "review not found" });
      });
  },

  create(req, res) {
    const data = req.body;
    const newReview = {
      ...data,
    };

    Review.create(newReview)
      .then((review) => {
        res.status(201).json({ message: "Review created", data: review });
      })
      .catch((err) => {
        res
          .status(400)
          .json({ message: "Review could not be created", data: err });
      });
  },

  update(req, res) {
    const { reviewId } = req.params;

    Review.findByIdAndUpdate(reviewId, req.body, { new: true })
      .then((review) => {
        res.status(200).json({ message: "review updated", data: review });
      })
      .catch((err) => {
        res
          .status(400)
          .json({ message: "review could not be updated", data: err });
      });
  },

  destroy(req, res) {
    const { reviewId } = req.params;

    Review.findByIdAndDelete(reviewId)
      .then((review) => {
        res.status(200).json({ message: "review destroyed", data: review});
      })
      .catch((err) => {
        res
          .status(400)
          .json({ message: "review could not be destroyed", data: err });
      });
  },

};
