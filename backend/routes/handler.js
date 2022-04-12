const express = require('express');
const router = express.Router();
const mySchemas = require('../models/Schemas.js');
const request = require('request');

require('dotenv/config');


router.get('/search', async(req,res) => {
   const searchData= req.query.SearchItem;
   if (searchData){
    const result = await mySchemas.Movies.find(
        {$or:[{"title":{'$regex': searchData,"$options" : "i"}},
             {"director":{'$regex': searchData,"$options" : "i"}},
             {"plot":{'$regex': searchData,"$options" : "i"}}]
         });
    if (result) {
            res.json(result);
        } else {
            res.end();
            }
   }
   
});


router.post('/find', (req, res) => { 
    console.log(req.body);   
    const findYear = req.body.year;
    const findTitle= req.body.title;
    const url ="https://www.omdbapi.com/?t="+findTitle+"&y="+findYear+"&apikey="+ process.env.API_KEY
    
    try{
        request(url,(error,response) =>{
            const data=JSON.parse(response.body)
            if (typeof(data.length) !== 'undefined'){
                json.forEach(element => {  
                    const movie = {
                        title:element['Title'],
                        year:element['Year'],
                        director:element['Director'],
                        plot:element['Plot'],
                        poster:element['Poster']
                    };
                    const newMovie = new mySchemas.Movies(movie);

                    try{
                        newMovie.save( (err,newMovieResult) =>{
                            if (err){
                                console.log(err);
                                res.redirect('/search');
                                res.end();
                            }
                            else{
                                res.redirect('/search');
                                res.end();
                            }
                        });
                    }catch(err){
                        console.log(err);
                        res.redirect('/search');
                        res.end();
                    }
                })
            }
            else{
                const movie = {
                    title:data['Title'],
                    year:data['Year'],
                    director:data['Director'],
                    plot:data['Plot'],
                    poster:data['Poster']
                };
                const newMovie = new mySchemas.Movies(movie);

                try{
                    newMovie.save( (err,newMovieResult) =>{
                        if (err){
                            console.log(err);
                            res.redirect('/search');
                            res.end();
                        }
                        else{
                            res.redirect('/search');
                            res.end();
                        }                           
                    });
                }catch(err){
                    console.log(err);
                    res.redirect('/search');
                    res.end();
                }
            }
        })
    }catch(err){
        console.log(err);
        res.redirect('/search');
        res.end();
    }    
});

module.exports = router;