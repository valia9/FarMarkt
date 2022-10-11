
const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');
const Market = require('./models/market');
const { Marker } = require('mapbox-gl');
const dotenv = require("dotenv");
const {DateTime} = require("luxon");
dotenv.config();



mongoose.connect('mongodb://localhost:27017/far-markt')

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log('Database connected');
});

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req,res) => {
    const markets = await Market.find({});
    res.render('farmarkt/home', {markets, DateTime})
})

app.get('/visit', async (req,res) => {
 
    const markets = await Market.find({}).sort({pNum:1});

    res.render('farmarkt/visit', {markets})
})

app.get('/visit/:shortcut', async (req, res) => {
    const market = await Market.findOne({ 'shortcut': req.params.shortcut });  
    res.render('farmarkt/show', {market})
})

app.get('/gallery', (req,res) => {
    res.render('farmarkt/gallery')
})

app.get('/contact', (req,res) => {
    res.render('farmarkt/contact')
})

app.get('*', (req,res) => {
    res.render('farmarkt/error')
})

app.listen(3000, () => {
    console.log('Port 3000 is listening')
} )


