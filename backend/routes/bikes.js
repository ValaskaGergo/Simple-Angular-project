const express = require("express");

const router = express.Router();

const Bike = require('../moddels/bike');
const checkAuth = require("../middleware/check-auth");

router.post("",checkAuth, (req, res, next) =>{
  const bike = new Bike({
    name: req.body.name,
    content: req.body.content
  });
bike.save().then(createdBike => {
  res.status(201).json({
    message: 'Bike added succesfully',
    bikeId: createdBike._id
});
});
});

router.get("",checkAuth, (req, res, next) => {
  Bike.find()
  .then(documents => {
    res.status(200).json({
      message: 'bikes fetched successfully',
      bikes:documents
    });
  });

});

router.delete("/:id",checkAuth, (req, res, next) => {
 Bike.deleteOne({_id: req.params.id}).then(result => {
   console.log(result);
   res.status(200).json({message: "bike deleted!"});
 });
});

module.exports = router;
