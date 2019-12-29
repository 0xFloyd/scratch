https://www.robinwieruch.de/javascript-project-setup-tutorial
https://www.robinwieruch.de/node-express-server-rest-api


then -- https://www.robinwieruch.de/mongodb-express-setup-tutorial/

Client -> REST API -> Server -> Database

REST - Representational State Transfer 


Install node
Install Nodemon for automatic refresh 
install babel for conversion to vanilla javascript (package.json:   "start": "nodemon --exec babel-node src/index.js",)
Install dotenv for environment file 
Install CORS for cross origin control
Install uuid for unique identifiers 

.babelrc --> file that allows you to activate different upcoming JavaScript features by adding them as presets to Babel. 

.env file to store application passwords, etc 

A server application that offers a REST API is also called a RESTful server. Servers that don't follow the REST architecture a 100% are rather called RESTish than RESTful. 

Once running, open another terminal window and enter curl http://localhost:3000 to see if the route is working. curl -X POST http://localhost:3000

*** 
One of the key aspects of REST: It uses HTTP methods to perform operations on URI(s). Often these operations are referred to as CRUD operations for create, read, update, and delete operations. 
*** REST APIs are stateless, which is why thousands of requests can be served simultaneously 

// Making sense of the Naming
Express Route's Method <=> HTTP Method <=> REST Operation
Express Route's Path <=> URI <=> REST Resource
        This is how routes are named in index.js


Whereas it's important to notice that the REST API belongs to the server application. You can take this always one step further by having multiple server applications offering REST APIs. Often you they come with the name microservices or web services whereas each server application offers a well-encapsulated functionality.

Usually, REST Api works the same way as a website. You make a call to a server, and you get data back over the HTTP protocol. 

//  REST API concepts
https://www.youtube.com/watch?v=7YcW25PHnAA
graph.facebook.com/youtube      -->  this is making a request to facebook graph API. what we get back is JSON formatted data. 
parameters --> if you make API request to graph.facebook.com/youtube?fields=id,name,likes   --> you only get those three keys 

// Another example 
maps.googleapis.com/maps/api/geocode/json?address=chicago&sensor=false

API server = maps.googleapis.com
resources = /maps    /API   /geocode
parameters = address, sensor 

You can use instagram api to grab your own photos 

//HTTP Request methods
GET, POST 
POSTMAN - Rest Client. you can use postman to send tweets out. 

0AUTH --> top authentication 


What are RESTful Services (RESTful APIs)? | Mosh
https://www.youtube.com/watch?v=SLwpqD8n3d0

API endpoint at vidly.com/api/customers
// many companies include API somewhere in their API endpoint to expose their restful services 
all the CRUD operations access this endpoint 

HTTP MEthods
GET - for getting data
POST - for creating data 
PUT - for updating data 
DELETE - for deleting data 


Getting, creating, updating, and delete customer 
HTTP request                                                  HTTP Response
GET /api/customers                                            JSON array of customers        

PUT /api/customers/1                                            update customer object 
body: updates to customer in JSON object 

DELETE /api/customers/1                 

POST /api/customers


This is the restful convention. We expose resources using a simple meaningful address and naming scheme, and support various operations around them using standard http methods 