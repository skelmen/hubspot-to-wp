var fs = require("fs");
var path = require('path');
var request = require('request');

var contents = fs.readFileSync("data-files.json");
var jsonContent = JSON.parse(contents);

for (i in jsonContent.objects) {
  var url = jsonContent.objects[i].url;
  var filename = path.basename(jsonContent.objects[i].url);
  var fileExt = path.extname(filename);
  var extensions = ['.png', '.jpg', '.jpeg', '.pdf', '.xlsx', '.docx' ];
  if(extensions.includes(fileExt) === true){
    request(url).pipe(fs.createWriteStream('files/' + filename));
  }
}