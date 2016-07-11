var Movie = require('../models/movie');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


//get Function----------------------------------------------
router.get('/allMovies', function(req, res) {
Movie.find(function(error,movies){
if(error)
{
return res.send(error)
}
 res.json(movies);

});

});
//-------------------------------------------------------------
//post function--------------------------------------------------
router.post('/add', function(req, res) {
var movie=new Movie(req.body);
movie.save(function(error){
if(error)
{
  res.send(error);
}

res.send("Movie is inserted:" +movie);
});


});
//----------------------------------------------------------------
router.delete('/deleteMovie/:id', function(req, res) {
 Movie.remove({
   _id: req.params.id
 }, function(err, movie) {
     if(err) {
       res.send("Movie id not exist");
     }

     res.json(movie);

 });
});

//.................................Updating movie..............................
router.put('/updateMovie/:id', function(req, res) {
 Movie.findOne({ _id: req.params.id}, function(err, movie) {
   if(err) {
     return res.send("Movie id not exist");
   }

   for(prop in req.body) {
     movie[prop] = req.body[prop];
   }

   //save the movie
   movie.save(function(err) {
     if(err) {
       return res.send("data not possible to save");
     }

     res.json(movie);
   });
 });
});

//.......................................Getting a single movie....................
router.get('/singleMovie/:id', function(req, res) {
 Movie.findOne({ _id: req.params.id}, function(err, movie) {
   if(err) {
     return res.send("Movie id not exist");
   }

   res.json(movie);
 });
});
//---------------------------------------------------------------------
module.exports=router;
