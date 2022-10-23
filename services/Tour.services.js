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
}