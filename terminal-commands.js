const fs = require('fs');

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');
 
    console.log(filesToString);
  });

};


module.exports.touch = () => {
  fs.writeFile('test.txt', 'New Content Written', (err) => {
     if (err) throw err;
     
     console.log(`Your new file has been created`)
  });
};

module.exports.mkdir = () => {
  fs.mkdir('newDirectory', (err) => {
    if (err) throw err;

    console.log(`Your new direcory has been created`)
  });
};