const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
    notes:{
        type:String,
        required: true,
    },
    dueDate: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: ['in progress', 'completed'],
        default: 'in progress',
    },
    priority:{
        type:String,
        required:true,
    },
   
});

module.exports = mongoose.model("Notes", notesSchema);
