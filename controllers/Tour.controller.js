const { createTourService, getTourService, getThreeTrendingToursService, getThreeCheapestToursService, getTourDetailService, updateTourService, deleteTourService } = require("../services/Tour.services");

//Getting All Tours
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

// Create new tour
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


//Getting Tour Details
exports.tourDetails = async (req, res, next) => {
    try {
        const { id } = req.params;
        const detail = await getTourDetailService(id);

      res.status(200).json({ 
        status: "Success!", 
        data: detail });
    } catch (error) {
      res.status(400).json({ 
        status: "Failed", 
        error: error.message });
    }
  };

//update Tour Details
exports.updateTourDetails = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedItem = await updateTourService(id, req.body);

      res.status(200).json({ 
        status: "Update Successfully done", 
        data: updatedItem 
    });
    } catch (error) {
      res.status(400).json({ 
        status: "Failed to update", 
        error: error.message });
    }
  };


//Delete Tour by one
exports.deleteTourByOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await deleteTourService(id);

        if(!result.deletedCount){
            return res.status(400).json({
              status:"fail",
              error:"Couldn't delete the product"
            })
          }

      res.status(200).json({ 
        status: "Success", 
        message:"data delete successfully done"
    });
    } catch (error) {
      res.status(400).json({ 
        status: "Failed to delete", 
        error: error.message });
    }
  };


//Getting Top 3 Trending Tours
exports.getThreeTrendingTours=async(req,res,next)=>{
    try {
    const tours = await getThreeTrendingToursService();
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

//Getting Top 3 cheapest Tours
exports.getThreeCheapestTours=async(req,res,next)=>{
    try {
    const tours = await getThreeCheapestToursService();
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