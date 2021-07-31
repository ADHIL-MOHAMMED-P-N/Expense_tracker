const express = require('express');
const Expense = require('../../models/Expense');

const router = express.Router();

//Getexpense
router.get('/', async(req, res) => {
    try {
        const expenses = await Expense.find({}).sort({ date: -1 }).lean();
        res.send(expenses);
    } catch (error) {
        console.error(error)
    }
});

//Add expense
router.post('/', async(req, res) => {
        try {
            await Expense.create(req.body)
            console.log(req.body)
        } catch (err) {
            console.error(err);
        }
    })
    //Delet Expense
router.delete('/:id', async(req, res) => {
    try {
        await Expense.deleteOne({ _id: req.params.id })
    } catch (err) {
        console.log(err)
    }

})

module.exports = router;