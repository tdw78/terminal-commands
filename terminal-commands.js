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
  fs.writeFile('fileName', "fileContent", (err) => {
     if (err) throw err;
     
     console.log(`Your new file ${fileName} has been created`)
  });
};

module.exports.mkdir = () => {
  fs.mkdir('./', (err) => {
    if (err) throw err;

    console.log(`Your new direcory has been created`)
  });
};