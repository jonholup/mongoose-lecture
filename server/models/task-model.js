var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/todo');

mongoose.model(
  'Task',
  new Schema({
    'name': String,
    'status': { type: Boolean, default: false},
    'description': String
  },
  {
    collection: 'tasks'
  }
));

var Task = mongoose.model('Task');

module.exports = Task;
