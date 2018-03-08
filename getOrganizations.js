var jsonfile = require('jsonfile');

var file = './organizations.json';

jsonfile.readFile(file, function(err, organizations) {
  console.dir(organizations)
});
