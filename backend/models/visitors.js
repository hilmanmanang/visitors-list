import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Visitor = new Schema({
    name: {
        type: String
    },
    idNo: {
        type: Number
    },
    company: {
        type: String
    },
    host: {
        type: String
    },
    purpose: {
        type: String
    }
});

export default mongoose.model('Visitor', Visitor);