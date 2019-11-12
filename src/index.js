require('dotenv').config()
const express = require('express');
const cors = require('cors');
const models = require('./models/index');

var routes = require('./routes');
// import saySomething from './my-other-file.js'       // must put import dotenv before any other imports to ensure env variables are included or else they will be undefined 

const app = express();

app.use(cors());
//  transform two of the body types we might receive - json, and urlencoded.
//  This extracts the entire body portion of an incoming request stream and makes it accessible on req.body 
app.use(express.json());        //  Parses the text as JSON and exposes the resulting object on req.body.
app.use(express.urlencoded({ extended: true }));    //    Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST) 
                                                    //   and exposes the resulting object (containing the keys and values) on req.body.
app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);

// custom middleware      
//  Suddenly we would have access to the me user in the request object, which is the authenticated user, in our routes.     
//  That's how the Express server can be stateless while a client always sends over the information of the currently authenticated user.
//  Being a stateless is another characteristic of RESTful services.                                         
app.use((req, res, next) => {
  req.context = {
    models,
    me: models.users[1],
  };    //all requests include "me", the current user 
    next();
});






app.post('/', (req, res) => {
    return res.send('Received a POST HTTP method');
});
app.put('/', (req, res) => {
    return res.send('Received a PUT HTTP method');
});
app.delete('/', (req, res) => {
    return res.send('Received a DELETE HTTP method');
});


//GET users list, and individual users


//sesssion
//  It's the first time you break the rules of being entirely RESTful, because you offer an API endpoint for a very specific feature. 


app.post('/users', (req, res) => {
  return res.send('POST HTTP method on user resource');
});

app.put('/users', (req, res) => {
  return res.send('PUT HTTP method on user resource');
});

app.delete('/users', (req, res) => {
  return res.send('DELETE HTTP method on user resource');
});



app.put('/users/:userId', (req, res) => {
    return res.send(
      `PUT HTTP method on user/${req.params.userId} resource`,
    );
  });

app.delete('/users/:userId', (req, res) => {
  return res.send(
    `DELETE HTTP method on user/${req.params.userId} resource`,
  );
});


// GET messages list, and individual messages 







app.listen(3000, () => {
    console.log(process.env.PORT)
});