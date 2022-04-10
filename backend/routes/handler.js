const express = require('express')
const router = express.Router();
const Schemas = require('../models/Schemas.js');


router.get('/addMovies', async (req, res)=> {
    const movie = {
        title:'Guardians of the Galaxy Vol. 2',
        year:'2017',
        director:'James Gunn',
        plot:'The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord\'s encounter with his father the ambitious celestial being Ego.',
        poster:'https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg'
    };

    const newMovie = new Schemas.Movies(movie);

    try{
        await newMovie.save( async(err,newMovieResult) =>{
            console.log('New Movies are added!');
            res.end('New Movies are added!');
        });
    }catch(err){
        console.log(err);
        res.end('Movie not added!');
    }

});

router.get('/store',(req,res) => {
    const str=[{
        "name": 'pretom',
        "email": 'pretomksaha@yahoo.com'
    }];
    res.end(JSON.stringify(str))
});

router.post('/search',(req, res) => {
    res.end('NA');
});

module.exports = router;