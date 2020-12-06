const express = require('express');
const logic = require('./logic');

const app = express();
app.use(express.json());
const port = 8081;

app.get('/home', (req, res) => res.send('Nasz pierwszy serwer w Node.JS'));
app.listen(port, () => console.log(`Aplikacja działa na porcie ${port}`));

let mathTools = new logic.MathTools();
app.post('/calc/add', (request, response) => {
 console . log ( "New CALC/ADD request" , request . body );
 let a = request . body . a ;
 let b = request . body . b ;
 response . json ({ result: mathTools . add ( a , b ), message: "SUCCESSFULLY CALCULATED" }
);
});

app.get('/salut/:userName', function (req, res) {
    let userName = req.params.userName;
    console.log(`Request userName=${userName}`);
    res.status(200).send(`Hello ${userName}!`);
    });
    