var colors = require('colors');
var keypress = require('keypress');
var open = require('open');

open('http://google.com');
keypress(process.stdin);

process.stdin.on('keypress', function(ch, key){
  var isKeyDown = ch
  if(key.name === 'escape'){
    console.log('Escape pressed, exiting...');
    process.exit();
  }else{
    if(isKeyDown === ch) {
      console.log('Key: ' + ch + ' is held...');
      isKeyDown = ch;
    }
  }
});

process.stdin.setRawMode(true);
