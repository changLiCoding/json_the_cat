const request = require('request');
const fs = require('fs');

const fetchBreedDescription = function(breed, cb) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed.toLowerCase()}`,(err,res,body) => {
    if (err) throw new Error(err);
    const data = JSON.parse(body);
    //if (data.length === 0) throw new Error('No breed found. ');
    cb(err, data[0].description);
  });
};

module.exports = { fetchBreedDescription };

