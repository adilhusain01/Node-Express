const { readFile } = require("fs");
const path = require("path");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (err, result) => {
      if (err) {
        reject(err);
        return;
      } else {
        resolve(result);
      }
    });
  });
};

getText("./content/first.txt")
  .then((result) => console.log(result))
  .catch((err) => {
    console.log();
  });
