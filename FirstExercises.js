// try {
//   var fs = require('fs');
//   var length = process.argv.length;
//   var buffer = fs.readFileSync(process.argv[length - 2]);
//   var allCaps = buffer.toString();
//   var writeToOutput = fs.writeFileSync(process.argv[length - 1], allCaps.toUpperCase());
//   var newOutput = fs.readFileSync(process.argv[length - 1]);
//   console.log(newOutput.toString());
// } catch (error) {
//   console.log('Error: ', error.message);
// }

var fs = require('fs');
var length = process.argv.length;
var readFile1 = process.argv[length - 3];
var readFile2 = process.argv[length - 2];
var writeFile = process.argv[length - 1];

fs.readFile(readFile1, function(err, buffer) {
  if (err) {
    console.log('Error: ', err.message);
    return;
  }

  var firstFile = buffer.toString();
  var firstFileArr = firstFile.match(/[^\r\n]+/g);

  fs.readFile(readFile2, function(err, buffer) {
    if (err) {
      console.log('Error: ', err.message);
      return;
    }

    var secondFile = buffer.toString();
    var secondFileArr = secondFile.match(/[^\r\n]+/g);

    var combinedArr = [];
    var x = 0;
    var n = 0;
    var arrLength = (firstFileArr.length + secondFileArr.length);
    for (var i = 0; i < arrLength; i++) {

      if (i%2 === 0) {
        combinedArr[i] = firstFileArr[n];
        n++;
      }
      else if (i%2) {
        combinedArr[i] = secondFileArr[x];
        x++;
      }
    }
    var finalArr = combinedArr.join(', \n');
    
    fs.writeFile(writeFile, finalArr, function(err) {
      console.log('You did it, braj\n');

        fs.readFile(writeFile, function(err, buffer) {
          if (err) {
            console.log('Error: ', err.message);
            return;
          }

          console.log(buffer.toString());
        });
      });
    });
  });
