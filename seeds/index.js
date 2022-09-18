const mongoose = require('mongoose');

const Market = require('../models/market');
const markets = require('./marketsSeeds');



async function initDD() {
    try {
      await mongoose.connect("mongodb://localhost:27017/far-markt", {
        useNewUrlParser: true
      });
    } catch (error) {
      console.log("error is ->" + error);
    }
  }
  initDD();

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log('Database connected');
});


const seedDB = async () => {
    await Market.deleteMany({});
    for (let i = 0; i < 20; i++){
        console.log(mongoose.connection.readyState)
        const markt = new Market({
            id: `${markets[i].id}`,
            title: `${markets[i].title}`,
            neighborhood: `${markets[i].neighborhood}`,
            openingTime: `${markets[i].openingTime}`,
            openingDays: `${markets[i].openingDays}`,
            description: `${markets[i].description}`,
            geometry: {
                type: "Point",
                coordinates: [
                markets[i].longitude,
                markets[i].latitude,
                ]    
            },
            webpage: `${markets[i].webpage}`,
            contact: `${markets[i].contact}`,
            shortcut: `${markets[i].shortcut}`,
        })
        await markt.save(function (err, saved) {
            if (err) {
              console.log(err);
            } 
            else {  
               console.log(saved); 
            }
        })
    }
}

console.log(mongoose.connection.readyState)

seedDB();