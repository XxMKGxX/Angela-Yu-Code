// jshint esversion:6

// const fs = require('fs');

// fs.copyFileSync("file1.txt", "file2.txt");

var superheroes = require("superheroes");

var mySuperHeroName = superheroes.random();

console.log("random SuperHero Name " +
    mySuperHeroName);

var supervillains = require("supervillains");

var mySuperVillainName = supervillains.random();

console.log("random SuperVillain Name " +
    mySuperVillainName);