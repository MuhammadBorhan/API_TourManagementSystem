const { getTours, createTours, getThreeTrendingTours, getThreeCheapestTours, tourDetails } = require('../controllers/Tour.controller');
const { viewCount } = require('../middleware/ViewCount');

const router=require('express').Router();

router.route("/trending").get(getThreeTrendingTours);
router.route("/cheapest").get(getThreeCheapestTours);

router.route('/')
.get(getTours)
.post(createTours)

router.route("/:id")
.get(viewCount, tourDetails);

module.exports=router