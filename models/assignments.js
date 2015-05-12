/**
 * Created by brianaamodt on 5/11/15.
 */
var mongoose = require('mongoose');

var assignmentSchema = new mongoose.Schema({
    name: String,
    score: Number,
    date_completed: Date
});

module.exports = mongoose.model('assignments', assignmentSchema);