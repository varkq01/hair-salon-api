const multer = require('multer');
const { Router } = require('express');

const upload = multer({dest: './../uploads/'});

module.exports.routes = () => {
    const api = Router();
  
    api.post('/', upload.single('image'), (req, res, next) => {
      
    });
  
    return api;
  };
  