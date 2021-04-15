"use strict"

/*
 Exporting an object containing a getFile function
*/

//Import modules for use in getFile


const fs = require('fs');
const httpStatus = require('http-status-codes');
const contentTypes = require('./contentTypes');

//Export a function to read files
//and return a response

module.exports = {
  getFile: (file,res) =>{
    fs.readFile("./" + file,(error,data)=>{
      if(error){
        res.writeHead(httpStatus.INTERNAL_SERVER_ERROR,contentTypes.html);
        res.end("There was an error serving content!");
      }
      res.end(data);
    })
  }
};
