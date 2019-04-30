const fs = require('fs');
const path = require('path');

// Create folder
fs.mkdir(path.join(__dirname,'/test'),{}, err =>{
    if(err) throw err;
    console.log('Folder create...')
});

// Create and write to file

fs.writeFile(path.join(__dirname,'/test', 'hello.txt'),
  'Hello world', 
    err =>{
      if(err) throw err;
      console.log('File written to...')

    //   File append
    fs.appendFile(path.join(__dirname,'/test', 'hello.txt'),
        'I like node.js', 
            err =>{
            if(err) throw err;
            console.log('File written to...')
        }
    );
  }
);

// Read File
fs.readFile(path.join(__dirname,'/test', 'hello.txt'),'utf8',(err,data) =>{
    if(err) throw err;
    console.log(data)
}
);