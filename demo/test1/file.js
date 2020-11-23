var fs = require("fs");
var noidung = fs.readFileSync(__dirname + "/ds.txt");
console.log(noidung);
console.log(noidung.toJSON());
console.log(noidung.toString());