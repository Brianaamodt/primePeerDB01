/**
 * Created by brianaamodt on 5/11/15.
 */
var mongoose = require('mongoose');

var AssignmentSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String
});

module.exports = mongoose.model('assignments', AssignmentSchema);