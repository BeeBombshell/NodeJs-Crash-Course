const path = require('path');

// basename: gets the base file name
console.log(path.basename(__filename));

// directory name
console.log(path.dirname(__filename));
//or
console.log(__dirname);

// file extension
console.log(path.extname(__filename));

// create path object
console.log(path.parse(__filename));

// concatenate paths => use join method
console.log(path.join(__dirname, 'test', 'hello.html'));
