const express = require('express');
const logic = require('./logic');

const app = express();
app.use(express.json());
const port = 8081;

app.get('/home', (req, res) => res.send('Nasz pierwszy serwer w Node.JS'));
app.listen(port, () => console.log(`Aplikacja działa na porcie ${port}`));

let mathTools = new logic.MathTools();
app.post('/calc/add', (request, response) => {
    console.log("New CALC/ADD request", request.body);
    let a = request.body.a;
    let b = request.body.b;
    response.json({ result: mathTools.add(a, b), message: "SUCCESSFULLY CALCULATED" }
    );
});

app.post('/calc/subtract', (request, response) => {
    console.log("New CALC/SUBTRACT request", request.body);
    let a = request.body.a;
    let b = request.body.b;
    response.json({ result: mathTools.subtract(a, b), message: "SUCCESSFULLY CALCULATED" }
    );
});

app.post('/calc/multiply', (request, response) => {
    console.log("New CALC/MULTIPLY request", request.body);
    let a = request.body.a;
    let b = request.body.b;
    response.json({ result: mathTools.multiply(a, b), message: "SUCCESSFULLY CALCULATED" }
    );
});

app.post('/calc/divide', (request, response) => {
    console.log("New CALC/DIVIDE request", request.body);
    let a = request.body.a;
    let b = request.body.b;
    response.json({ result: mathTools.divide(a, b), message: "SUCCESSFULLY CALCULATED" }
    );
});

app.get("/circle/:a", (request, response) => {
    console.log("New CIRCLE request", request.params.a);
    let a = request.params.a;
    response.json({ area: mathTools.circleArea(a),circumference: mathTools.circleCircumference(a), message: "SUCCESSFULLY CALCULATED"}
    );
});

app.get('/salut/:userName', function (req, res) {
    let userName = req.params.userName;
    console.log(`Request userName=${userName}`);
    res.status(200).send(`Hello ${userName}!`);
});
