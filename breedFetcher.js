const request = require('request');
const fs = require('fs');

const catFetch = (breed) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed.toLowerCase()}`,(err,res,body) => {
    if (err) throw new Error(err);

    const data = JSON.parse(body);
    if (data.length === 0) throw new Error('No breed found. ');

    console.log(data[0].description);
  });
};
//node breedFetcher.js whatever
//node breedFetcher.js chartreux
const argvs = process.argv.slice(2);

catFetch(...argvs);
