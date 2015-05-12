var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var assignment = require('../models/assignments');


router.get('/', function(req, res, next) {
  assignment.find(function (err, assignment) {
    if (err) return next(err);
    res.json(assignment);
  });
});


router.post('/', function(req, res, next) {
  assignment.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


router.get('/:id', function(req, res, next) {
  assignment.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.put('/:id', function(req, res, next) {
  assignment.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


router.delete('/:id', function(req, res, next) {
  assignment.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

console.log('assignments loaded');

module.exports = router;
