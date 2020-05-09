const router = require('express').Router();
let Update = require('../models/update.model');

router.route('/').get((req, res) => {
    Update.find()
        .then(update => res.json(update))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const product = req.body.product;
    const event = req.body.event;
    const quantity = Number(req.body.quantity);
    const change = req.body.change;

    const newUpdate = new Update({
        product,
        event,
        quantity,
        change,
    });

    newUpdate.save()
        .then(() => res.json('Update added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) =>{
    Update.findById(req.params.id)
        .then(update => res.json(update))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) =>{
    Update.findByIdAndDelete(req.params.id)
        .then(() => res.json('Update deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) =>{
    Update.findById(req.params.id)
        .then(update => {
            update.product = req.body.product;
            update.event = req.body.event;
            update.quantity = Number(req.body.quantity);
            update.change = req.body.change;

            update.save()
                .then(() => res.json('Update updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;