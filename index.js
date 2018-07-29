var fs = require("fs");
var path = require('path');
var request = require('request');

var contents = fs.readFileSync("data-files.json");
var jsonContent = JSON.parse(contents);


for (i in jsonContent.objects) {
  var url = jsonContent.objects[i].url;
  var filename = path.basename(jsonContent.objects[i].url);
  var ext = path.extname(filename);
  if(ext == '.png' || ext == '.jpg' || ext == '.jpeg' || ext == '.pdf'){
    request(url).pipe(fs.createWriteStream('files/' + filename));
  }
}