const express = require('express');
const {createRental, getRental, getRentals, updateRental, deleteRental} = require('../controllers/rentals');
const router = express.Router();

router.route('/').get(getRentals).post(createRental);
router.route('/:id').get(getRental).put(updateRental).delete(deleteRental);
module.exports=router;