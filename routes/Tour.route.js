const { getTours, createTours, getThreeTrendingTours } = require('../controllers/Tour.controller');

const router=require('express').Router();

router.route('/').get(getTours).post(createTours)
router.route("/trending").get(getThreeTrendingTours);

module.exports=router