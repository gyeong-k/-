var jwt = require("jsonwebtoken");
var dotenv = require("dotenv");

dotenv.config();

var token = jwt.sign({ foo: "bar" }, process.env.privateKey, {
  expiresIn: "30m",
  issuer: "gimga",
});

var decoded = jwt.verify(token, process.env.privateKey); //토큰과 시크릿키 값
console.log(decoded.foo); // bar
