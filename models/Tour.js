const mongoose=require('mongoose');

// Schema Design
const tourSchema=mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name for this tour"],
        trim: true,
        unique: [true, "Name must be unique"],
        minLength: [3, "Name must be at least 3 characters."],
        maxLength: [100, "Name is too long."]
      },
      image: {
        type: String,
        required: [true, "Please provide a image for this tour"],
      },
      description: {
        type: String,
        required: true,
      },
      cost: {
        type: Number,
        required: [true, "Please provide a price for this tour"],
        min: [0, "Cost can't be negative"],
      },
    //   catagory: {
    //     type: String,
    //     required: [true, "Please provide a catagory for this tour"],
    //   },
},{ timestamps: true });

// Creating Model
const Tour=mongoose.model("Tour",tourSchema);
module.exports=Tour
