const mongoose = require('mongoose');

const fruitSchema = new mongoose.Schema({
    name: String,
    color: String,
    readyToEat: Boolean
});

const Fruit = mongoose.model('Fruit', fruitSchema);

module.exports = Fruit;