"use strict"

const port = 3000;

const http = require("http");
const httpStatus = require("http-status-codes");
const router = require("./router");
const contentTypes = require("./contentTypes");
const utils = require('./utils');


router.get("/",(req,res)=>{
  res.writeHead(httpStatus.OK,contentTypes.html);
  utils.getFile("./views/index.html",res);
});
router.get("/index.html",(req,res)=>{
  res.writeHead(httpStatus.OK,contentTypes.html);
  utils.getFile("./views/index.html",res);
});
router.get("/error.html",(req,res)=>{
  res.writeHead(httpStatus.OK,contentTypes.html);
  utils.getFile("./views/error.html",res);
});
router.get("/impressum.html",(req,res)=>{
  res.writeHead(httpStatus.OK,contentTypes.html);
  utils.getFile("./views/impressum.html",res);
});


// BILDER

router.get("/public/images/webdesign-logo.png", (req, res) => {
 res.writeHead(httpStatus.OK, contentTypes.png);
 utils.getFile("./public/images/webdesign-logo.png", res);
});

router.get("/public/images/hintergrund.jpg", (req, res) => {
 res.writeHead(httpStatus.OK, contentTypes.jpg);
 utils.getFile("./public/images/hintergrund.jpg", res);
});
router.get("/public/images/hintergrund-klein.jpg", (req, res) => {
 res.writeHead(httpStatus.OK, contentTypes.jpg);
 utils.getFile("./public/images/hintergrund-klein.jpg", res);
});

// POST
router.post("/",(req,res)=>{
  res.writeHead(httpStatus.OK,contentTypes.html);
  utils.getFile("views/index.html",res);
});
// CSS
router.get("/public/css/styles.css",(req,res)=>{
  res.writeHead(httpStatus.OK,contentTypes.css);
  utils.getFile("./public/css/styles.css",res);
});


http.createServer(router.handle).listen(port);

console.log("The server is listening on port number: " + port);
