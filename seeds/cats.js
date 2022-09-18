const mongoose = require('mongoose');

const categories = require('./categoriesSeeds');
const Category = require('../models/category');

mongoose.connect('mongodb://localhost:27017/far-markt')

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log('Database connected');
});

console.log(categories[0].categoryName)

const seedCats = async () => {
    await Category.deleteMany({});
        for (let i = 0; i < categories.length; i++){
        const cat = new Category({
            categoryName: `${categories[i].categoryName}`,
            id: `${categories[i].id}`,
        })
        await cat.save();
    }
}

seedCats().then(() => {
    mongoose.connection.close();
})
