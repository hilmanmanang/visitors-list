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
        if (err) console.log(err);
        else res.json(visitors);
    })
});

router.route('/')

app.use('/', router);

app.listen(4000, () => console.log('Express server running on port 4000'));