var jsonfile = require('jsonfile');

var file = './activities.json';

jsonfile.readFile(file, function(err, activities) {
  //console.log(activities);
  console.log(activities.length + 1);

  var today = new Date();
  var dd = today.toJSON();
  var nextId = activities.length + 1;

  var activity = { "id": nextId.toString(), "name":"John", "org": "latet", "start": dd, "end": dd };

  console.log(activities);

  activities.push(activity);
  jsonfile.writeFile(file, activities, function(err, obj) {
    console.dir(obj)
  });

});
