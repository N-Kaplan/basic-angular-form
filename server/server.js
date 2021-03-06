const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = 9000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

app.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});


let allFriends = [{firstName: 'Coach', lastName: 'Tim', email: 'tim.broos@becode.org', phoneNr: '0469420666', move: 'Yeet', favLanguage: 'Javascript'}];

// Below you can define how your API handles a get or a post request.
// Try sending a get request to the root, you should get a "Hello from server" back.

app.get('/', function (request, response) {
    response.send('Hello from server');
});

app.post('/', function (request, response) {
    response.status(200).send({"message": "Data received"});
});

//new get function to send the allFriends variable as a response
app.get('/allFriends', function (request, response) {
    response.send(allFriends);
});

//post function with path "addFriend" pushes the request body to the allFriends array.
app.post('/addFriend', function (request, response) {
    if (!allFriends.some(friend => friend.email === request.body.email)) {
        allFriends.push(request.body);
        response.send(allFriends);
    }
    //console.log(allFriends);
});

app.post('/deleteFriend', function (request, response) {
    allFriends = allFriends.filter(({email}) => email !== request.body.emailDelete);
    response.send(allFriends);
    console.log(request.body.emailDelete);
    console.log(allFriends);
});


app.listen(PORT, function () {});
