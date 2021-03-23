import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Visitor = new Schema({
    title: {
        type: String
    },
    responsible: {
        type: String
    },
    severity: {
        type: String
    },
    status: {
        type: String,
        default: 'Open'
    }
});

export default mongoose.model('Visitor', Visitor);