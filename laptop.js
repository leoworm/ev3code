//TODO switch to http and sockets so electron can be used to make a GUI
//All modules are required here. They must be installed with the --save argument
var colors = require('colors');
var keypress = require('keypress');
var ev3 = require('ev3dev-lang');

var leftMotor = new ev3.LargeMotor('port')
var rightMotor = new ev3.LargeMotor('port')

var leftConnected = true;
var rightConnected = true;

//Checking if the motors are connected
if(leftMotor.connected != true) {
  var leftConnected = false
  console.log("The left motor doesn't seem to be connected.".yellow);
}
if(rightMotor.connected != true) {
  var rightConnected = false
  console.log("The right motor doesn't seem to be connected.".yellow);
}
if(rightConnected==false || leftConnected==false) {
  console.log('Something is wrong, aborting...'.red);
  process.exit();
}else{
  console.log("Motors seem connected, continuing...\n".green)
}

keypress(process.stdin);

process.stdin.on('keypress', function(ch, key){
  var isKeyDown = ch
  if(key.name === 'escape'){
    console.log('Escape pressed, exiting...');
    process.exit();
  }else if (ch==='w') {
    //both motors forward
    leftMotor.runForever(75);
    rightMotor.runForever(75);
  }else if (ch==='a') {
    leftMotor.runForever(-75);
    rightMotor.runForever(75);
  }else if (ch==='d') {
    leftMotor.runForever(75);
    rightMotor.runForever(-75);
  }else if (ch==='s') {
    leftMotor.runForever(-75);
    rightMotor.runForever(-75);
  }else if (ch==='w' && ch==='a') {
    leftMotor.runForever(30);
    rightMotor.runForever(85);
  }else if (ch==='w' && ch==='d') {
    leftMotor.runForever(85);
    rightMotor.runForever(30);
  }
  leftMotor.stop();
  rightMotor.stop();
});

process.stdin.setRawMode(true);
