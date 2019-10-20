let mongoose = require('mongoose');

//Set up default mongoose connection
let mongoDB = "mongodb://127.0.0.1/my_database";
mongoose.connect(mongoDB, {useNewUrlParser: true});

//Get the default connection
let db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//define Schema
let Schema = mongoose.Schema;

let SomeModelSchema = new Schema({
    a_string: String,
    a_date: Date
});


//specify some of the validator types and error messages:

// Compile model from schema
let SomeModel = mongoose.model('SomeModel', SomeModelSchema);   //The first argument is the singular name of the collection that will be created for your model (Mongoose will create the database collection for the above model SomeModel above), and the second argument is the schema you want to use in creating the model.

// Create an instance of model SomeModel
let awesome_instance = new SomeModel({ name: 'awesome'});

// Save the new model instance, passing a callback
awesome_instance.save((err) => {
    if (err) return handleError(err);
})

// use create() to define the model instance at the same time as you save it. 
SomeModel.create({ name: "also_awesome" }, (err, awesome_instance) => {
  if (err) return handleError(err);
  // saved!
});

// Access model field values using dot notation
console.log(awesome_instance.name); //should log 'also_awesome'

// Change record by modifying the fields, then calling save().
awesome_instance.name="New cool name";
awesome_instance.save((err) => {
   if (err) return handleError(err); // saved!
});




//You can search for records using query methods, specifying the query conditions as a JSON document.
let Athlete = mongoose.model("Athlete", yourSchema);

// find all athletes who play tennis, selecting the 'name' and 'age' fields
Athlete.find({ 'sport': 'Tennis' }, 'name age', function (err, athletes) {
  if (err) return handleError(err);
  // 'athletes' contains the list of athletes that match the criteria.
})

// find all athletes that play tennis
var query = Athlete.find({ 'sport': 'Tennis' });

// selecting the 'name' and 'age' fields
query.select('name age');
// limit our results to 5 items
query.limit(5);
// sort by age
query.sort({ age: -1 });
// execute the query at a later time
query.exec(function (err, athletes) {
  if (err) return handleError(err);
  // athletes contains an ordered list of 5 athletes who play Tennis
})


//same as above, but chained together with .find().where
Athlete.
  find().
  where('sport').equals('Tennis').
  where('age').gt(17).lt(50).  //Additional where query
  limit(5).
  sort({ age: -1 }).
  select('name age').
  exec(callback); // where callback is the name of our callback function.


  // exporting model out 
  // File: ./models/somemodel.js

//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
  a_string          : String,
  a_date            : Date,
});

//Export function to create "SomeModel" model class
module.exports = mongoose.model('SomeModel', SomeModelSchema );

// other file
//Create a SomeModel model just by requiring the module
var SomeModel = require('../models/somemodel')

// Use the SomeModel object (model) to find all SomeModel records
SomeModel.find(callback_function);