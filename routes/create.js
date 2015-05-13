/**
 * Created by brianaamodt on 5/12/15.
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var assignment = require('../models/assignments');
var path = require('path');
var assignments = require('./assignments');

router.get('/', function(req, res, next){
    res.sendFile(path.resolve(__dirname, '../views/create.html'));
});

router.use('/', assignments);

module.exports = router;
