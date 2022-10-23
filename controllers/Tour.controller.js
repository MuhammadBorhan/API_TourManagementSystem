const { createTourService, getTourService, getThreeTrendingToursService, getThreeCheapestToursService } = require("../services/Tour.services");

exports.getTours=async(req,res,next)=>{
    try {
        const filters = { ...req.query };

  const excluedFields = ["sort", "page","limit"];
  excluedFields.forEach((field) => delete filters[field]);

  const queries = {};

  if (req.query.sort) {
    const sortBy = req.query.sort.split(",").join(" ");
    queries.sortBy = sortBy;
  }
  if (req.query.fields) {
    const fieldsBy = req.query.fields.split(",").join(" ");
    queries.fieldsBy = fieldsBy;
  }
  if (req.query.page) {
    const { page = 1, limit = 3 } = req.query;
    const skip = (page - 1) * parseInt(limit);
    queries.skip = skip;
    queries.limit = parseInt(limit);
  }
    const tours=await getTourService(filters,queries)
    res.status(200).json({
        status: 'Successful',
        data: tours
    });
    
} catch (error) {
    res.status(400).json({
        status: "failed",
        message: "Can't get data",
        error: error.message
    });
}
};

exports.createTours=async(req,res,next)=>{
try {
    const result=await createTourService(req.body);
    res.status(200).json({
        status:'success',
        message:'Data insert successfully done',
        data:result
    })
} catch (error) {
    res.status(400).json({
        status: "Failed",
        message: "Data is not inserted",
        error: error.message,
      });  
}
};


//Getting Top 3 Trending Tours
exports.getThreeTrendingTours=async(req,res,next)=>{
    try {
    const tours = await getThreeTrendingToursService(req.query);
    res.status(200).json({ 
        status: "Success!", 
        data: tours 
    });
} catch (error) {
    res.status(400).json({ 
        status: "Failed", 
        error: error.message 
    });
}
};

//Getting Top 3 Trending Tours
exports.getThreeCheapestTours=async(req,res,next)=>{
    try {
    const tours = await getThreeCheapestToursService(req.query);
    res.status(200).json({ 
        status: "Success!", 
        data: tours 
    });
} catch (error) {
    res.status(400).json({ 
        status: "Failed", 
        error: error.message 
    });
}
};