
var url = "http://mylogger.io/log";

function log(message) {
	//send http request
	console.log(message);
}

function hello(f) {
	console.log("ji");
}

module.exports.log = log;
module.exports.hi = hello;
