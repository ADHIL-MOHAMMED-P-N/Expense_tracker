const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({

    spendTitle: {
        type: String,
        required: true,
    },
    spendAmount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String,

    }


})

module.exports = mongoose.model('Expense', ExpenseSchema);