const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const RelationshipSchema = new Schema({
    marketID: {
        type: mongoose.Types.ObjectId,
        ref: 'Market'
    },
    categoryID:   
        [{ 
            type: mongoose.Types.ObjectId,
            ref: 'Category'
        }],
    id: {type: Number}
})


module.exports = mongoose.model('Relationship', RelationshipSchema);