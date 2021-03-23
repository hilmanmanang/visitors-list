import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Visitor from './models/visitors';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/visitors');

const connetion = mongoose.connection;

connetion.once('open', () => {
    console.log('MongoDB database connection established successfully!')
});

router.route('/visitors').get((req, res) => {
    Visitor.find((err, visitors) => {
        if (err) 
            console.log(err);
        else 
            res.json(visitors);
    })
});

router.route('/visitors/:id').get((req, res) => {
    Visitor.findById(req.params.id, (err, visitor) => {
        if (err) console.log(err);
        else res.json(visitor);
    })
});

router.route('/visitors/add').post((req, res) => {
    let visitor = new Visitor(req.body);
    visitor.save()
        .then(visitor => {
            res.status(200).json({'visitor': 'Added successfully'});
    })
    .catch(err => {
        res.status(400).send('Failed to add new visitor');
    })
});

router.route('/visitors/update/:id').post((req, res) => {
    Visitor.findById(req.params.id, (err, visitor) => {
        if (!visitor) return next(new Error('Could not load document'));
        else 
            visitor.name = req.body.name;
            visitor.idNo = req.body.idNo;
            visitor.company = req.body.company;
            visitor.host = req.body.host;
            visitor.purpose = req.body.purpose;

            visitor.save()
                .then(visitor => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed')
            });
    })
});

router.route('/visitors/delete/:id').get((req, res) => {
    Visitor.findByIdAndRemove({_id: req.params.id}, (err, visitor) => {
        if (err) res.json(err);
        else res.json('Remove successfully')
    })
})

router.route('/')

app.use('/', router);

app.listen(4000, () => console.log('Express server running on port 4000'));