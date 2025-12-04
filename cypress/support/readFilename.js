const fs = require('fs');
const readfilename = (directoryPath) => {
  return new Promise((resolve, reject) => {
    fs.readdir(directoryPath, function (err, files) {
      if (err) {
        reject(`Unable to scan directory: ${err}`);
      } else {
        resolve(files);
      }
    });
  });
};

module.exports = { readfilename };
