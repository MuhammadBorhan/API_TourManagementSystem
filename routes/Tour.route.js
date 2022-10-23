const { getTours, createTours } = require('../controllers/Tour.controller');

const router=require('express').Router();

router.route('/').get(getTours).post(createTours)

module.exports=router