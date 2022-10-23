const { getTours, createTours, getThreeTrendingTours, getThreeCheapestTours } = require('../controllers/Tour.controller');

const router=require('express').Router();

router.route("/trending").get(getThreeTrendingTours);
router.route("/cheapest").get(getThreeCheapestTours);
router.route('/')
.get(getTours)
.post(createTours)

module.exports=router