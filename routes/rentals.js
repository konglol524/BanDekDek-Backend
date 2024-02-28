const express = require("express");
const {
  createRental,
  getRental,
  getRentals,
  updateRental,
  deleteRental,
} = require("../controllers/rentals");
const router = express.Router();
const { protect, authorize } = require("../middleware/auth");

router
  .route("/")
  .get(getRentals)
  .post(protect, authorize("admin"), createRental);
router
  .route("/:id")
  .get(getRental)
  .put(protect, authorize("admin"), updateRental)
  .delete(protect, authorize("admin"), deleteRental);

module.exports = router;
