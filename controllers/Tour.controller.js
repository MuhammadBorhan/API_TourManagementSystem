const { createTourService, getTourService } = require("../services/Tour.services");

exports.getTours=async(req,res,next)=>{
    try {
    const tours=await getTourService()
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