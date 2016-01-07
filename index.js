var five = require("johnny-five");
var Console = require('console').Console;
var logger = console.Console;

var board = new five.Board();
board.on("ready", function() {
  var ledR = new five.Led(13);
  var ledO = new five.Led(12);
  var ledG = new five.Led(11);
  console.log("ctuvybin");
  ledG.pulse();
  ledO.on();
  ledR.on();
  // Stop and turn off the led pulse loop after
  // 10 seconds (shown in ms)
  this.wait(10000, function() {

    // stop() terminates the interval
    // off() shuts the led off
    ledG.stop().off();
    process.exit();
  });
});