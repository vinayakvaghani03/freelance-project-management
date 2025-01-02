const mongoose = require ("mongoose")

const ProjectSchema =  mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a project title'],
    },
    duedate: {
        type: Date,
        required: [true, 'Please add a Due Date'],
    },
    amount : {
        type : Number,
        required : [true, 'Please add a Amount'],
    },
    status: {
        type: String,
        enum: ['Active', 'Completed'],
        default: 'Active',
    },
    payment : {
        type : String,
        enum: ['Pending', 'Paid'],
        default: 'Pending',
    },
   
}, {
    timestamps: true,
});

module.exports = mongoose.model('Project', ProjectSchema);