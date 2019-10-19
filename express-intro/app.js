let express = require('express');
let app = express();

app.get('/', (req, res) => {       // first argument is request, second is response 
    res.send('Hello World');       //  send 'Hello World' response when request receivbed
});

app.listen(3000, () => {
    console.log('Example App listening on Port 3000');
});


//  Router can be used to create "sub directories" per say. So, all the routes in /wikii/...         could be stored in the wiki route 