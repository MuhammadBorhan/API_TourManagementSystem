const Tour = require("../models/Tour")

exports.getTourService=async()=>{
const tours=await Tour.find({});
return tours;
};

exports.createTourService=async(data)=>{
    const result=await Tour.create(data);
    return result;
}