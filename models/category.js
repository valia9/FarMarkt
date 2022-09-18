const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const opts = { toJSON: { virtuals: true } };

const CategorySchema = new Schema({
    categoryName: {type: String, required: true},
    market:   
        [{ 
            type: mongoose.Types.ObjectId,
            ref: 'Market'
        }],
    relationship: {type: mongoose.Types.ObjectId, ref: 'Relationship'}
}, opts)

// CategorySchema.virtual("relationship", {
//     ref: "Relationship",
//     foreignField: "categoryID",
//     localField: "_id"
// }); 


module.exports = mongoose.model('Category', CategorySchema);