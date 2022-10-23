const Tour = require("../models/Tour")

exports.getTourService=async(filters, queries)=>{
const tours=await Tour.find()
.skip(queries.skip)
.limit(queries.limit)
.select(queries.fieldsBy)
.sort(queries.sortBy)
const totalTours = await Tour.countDocuments(filters);
const pageCount = Math.ceil(totalTours / queries.limit);
return { totalTours,pageCount,tours };
};

exports.createTourService=async(data)=>{
    const result=await Tour.create(data);
    return result;
};

exports.getTourDetailService=async(tourId)=>{
    const tourDetail=await Tour.findOne({_id:tourId});
    return tourDetail;
};

//Update Tour
exports.updateTourService = async (tourId, data) => {
    const tour = await Tour.updateOne(
      { _id: tourId },
      { $set: data },
      { runValidators: true }
    );
    return tour;
  };

//Get three trending tours service
exports.getThreeTrendingToursService=async()=>{
    const tour = await Tour.find()
    .sort({price:-1})
    .limit(3);
    return tour;
};

//Get three cheapest tours service
exports.getThreeCheapestToursService = async () => {
    const tour = await Tour.find()
    .sort({ price: 1 })
    .limit(3)
    return tour;
  };