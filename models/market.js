const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const opts = { toJSON: { virtuals: true } };

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
    relationship: {type: mongoose.Types.ObjectId, ref: 'Relationship'},
    shortcut: {type: String, required: true},
    }, opts)


MarketSchema.virtual('properties.popUpMarkup').get(function() {
    return `
    <a href="/visit/${this.shortcut}">${this.title}</a>
    <p>
    ${this.openingTime}
    </p>
    <p>
    ${this.openingDays}
    </p>`
});

// MarketSchema.virtual("relationship", {
//     ref: "Relationship",
//     foreignField: "marketID",
//     localField: "_id"
// }); 

module.exports = mongoose.model('Market', MarketSchema);
// module.exports = mongoose.model('Category', categorySchema);