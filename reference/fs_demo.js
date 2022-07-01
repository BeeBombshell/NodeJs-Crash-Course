const fs = require('fs');
const path = require('path');

// create a folder
// fs.mkdir(path.join(__dirname, 'test'), {}, err => {
//     if (err) throw err;
//     console.log('Folder created...');
// });

// create and write to a file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!',
    err => {
    if (err) throw err;
    console.log('File written to...');
    
    // appending a file
    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' I Love Node.js',
        err => {
            if (err) throw err;
            console.log('File written to...');
        });
        
});


