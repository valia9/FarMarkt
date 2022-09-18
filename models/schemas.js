const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const opts = { toJSON: { virtuals: true }, toObject: {virtuals: true} };

const MarketSchema = new Schema({
    id: {type: Number, unique: true},
    title: {type: String, required: true},
    geometry: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    neighborhood: {type: String, required: true},
    openingTime: {type: String, required: true},
    openingDays: {type: String, required: true},
    description: {type: String, required: true},
    webpage: {type: String, required: true},
    contact: {type: String, required: true},
    }, opts)


MarketSchema.virtual('properties.popUpMarkup').get(function() {
    return `
    <h1>${this.title}</h1>
    <p>
    ${this.openingTime}
    </p>
    <p>
    ${this.openingDays}
    </p>`
});

MarketSchema.virtual("relationship", {
    ref: "Relationship",
    foreignField: "marketID",
    localField: "_id"
}); 

const CategorySchema = new Schema({
    categoryName: {type: String},
    market:   
        [{ 
            type: mongoose.Types.ObjectId,
            ref: 'Market'
        }],
}, opts)

CategorySchema.virtual("relationship", {
    ref: "Relationship",
    foreignField: "categoryID",
    localField: "_id"
}); 

const RelationshipSchema = new Schema({
    marketID: {
        type: Schema.Types.ObjectId,
        ref: 'Market'
    },
    categoryID:   
        [{ 
            type: Schema.Types.ObjectId,
            ref: 'Category'
        }],
})



module.exports = mongoose.model('Market', MarketSchema, 'Market');
module.exports = mongoose.model('Category', CategorySchema, 'Category');
module.exports = mongoose.model('Relationship', RelationshipSchema, 'Relationship');
