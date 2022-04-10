const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moviesinfoSchema = new Schema({
    //_id: ObjectId 
    titel: {type:String, required:true},
    year: {type:String, required:true},
    director: {type:String, required:true},
    plot: {type:String, required:true},
    poster: {type:String, required:true},
});

const Moviesinfo = mongoose.model('movies', moviesinfoSchema, 'movies' );

module.exports= Moviesinfo;