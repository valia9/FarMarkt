const mongoose = require('mongoose');

const rels = require('./relationshipSeeds');
const Relationship = require('../models/relationship');

mongoose.connect('mongodb://localhost:27017/far-markt')

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log('Database connected');
});


const seedRels = async () => {
    await Relationship.deleteMany({});
        for(let i = 0; i < 10; i++){
        const cat = new Relationship({
            marketID: `${rels[i].marketID}`,
            categoryID: `${rels[i].categoryID}`,
            id: `${rels[i].id}`
        })
        await cat.save();
}}

seedRels().then(() => {
    mongoose.connection.close();
})
