const fs = require('fs');

fs.appendFile('message.txt', ' Append this, Captain!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
