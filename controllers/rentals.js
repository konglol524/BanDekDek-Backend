const Rental = require('../models/Rental');

exports.createRental= async (req, res, next) => {
    const rental = await Rental.create(req.body);
    res.status(201).json({success:true, data: rental});
};

exports.getRentals= async (req, res, next) => {
    try{
        const rentals = await Rental.find();
        res.status(200).json({success:true, count:rentals.length, data:rentals});
    } catch(err){
        res.status(400).json({success:false});
    }
};

exports.getRental= async (req, res, next) => {
    try{
        const rental = await Rental.findById(req.params.id);
       
        if(!rental){
            return res.status(400).json({success:false});
        }

        res.status(200).json({success:true, data:rental});
    } catch(err){
        res.status(400).json({success:false});
    }
};

exports.updateRental= async (req, res, next) => {
    try{
        const rental = await Rental.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
       
        if(!rental){
            return res.status(400).json({success: false});
        }

        res.status(200).json({success:true, data: rental});
    } catch(err){
        res.status(400).json({success:false});
    }
};

exports.deleteRental= async (req, res, next) => {
    try{
        const rental = await Rental.findByIdAndDelete(req.params.id);
        if(!rental){
            return res.status(400).json({success: false});
        }
        res.status(200).json({success:true, data: {}});
    } catch(err){
        res.status(400).json({success:false});
    }
};
