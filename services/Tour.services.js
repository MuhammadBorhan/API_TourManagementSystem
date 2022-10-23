const Tour = require("../models/Tour")

exports.getTourService=async(filters, queries)=>{
const tours=await Tour.find().select(queries.fieldsBy);
return tours;
};

exports.createTourService=async(data)=>{
    const result=await Tour.create(data);
    return result;
}