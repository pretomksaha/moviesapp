const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moviesSchema = new Schema({
    //_id: ObjectId 
    title: {type:String, required:true},
    year: {type:String, required:true},
    director: {type:String, required:true},
    plot: {type:String, required:true},
    poster: {type:String, required:true}
});

const Movies = mongoose.model('movies', moviesSchema, 'movies' );
const mySchemas={'Movies':Movies};

module.exports= mySchemas;