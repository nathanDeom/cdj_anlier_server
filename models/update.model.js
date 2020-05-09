const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const updateSchema = new Schema({
    product: {
        type: String,
        required: true,
    },
    event: { 
        type: String,
        required: true,
    },
    quantity: { 
        type: Number,
        required: true,
    },
    change: { 
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

const Update =  mongoose.model('Update', updateSchema);

module.exports = Update;

