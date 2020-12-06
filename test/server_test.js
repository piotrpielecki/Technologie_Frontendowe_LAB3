var request = require('request');
var args = process.argv.slice(2);
var data = { a: parseInt(args[0]), b: parseInt(args[1]) };
request({
    url: "http://127.0.0.1:8081/calc/add",
    method: "POST",
    json: true,
    body: data
}, function (error, response, body) {
    if (data.a + data.b == body.result)
    console.log("Calc add function test passed!");
});
request({
    url: "http://127.0.0.1:8081/calc/subtract",
    method: "POST",
    json: true,
    body: data
}, function (error, response, body) {
    if (data.a - data.b == body.result)
    console.log("Calc subtract function test passed!");
});
request({
    url: "http://127.0.0.1:8081/calc/multiply",
    method: "POST",
    json: true,
    body: data
}, function (error, response, body) {
    if (data.a * data.b == body.result)
    console.log("Calc multiply function test passed!");
});
request({
    url: "http://127.0.0.1:8081/calc/divide",
    method: "POST",
    json: true,
    body: data
}, function (error, response, body) {
    if (data.a / data.b == body.result)
    console.log("Calc divide function test passed!");
});
request({
    url: "http://127.0.0.1:8081/circle/" + data.a,
    method: "GET",
    json: true
}, function (error, response, body) {
    if (body.area == '9.425' && body.circumference == "12.566") {
        console.log("Circle test passed!");
    }
});
