const fs = require('fs');

fs.appendFile('message.txt', ' data to append', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

fs.write('message.txt', ' new line added' + "\n", 'utf8', function (err) {
    if (err) throw err;
    console.log('Saved!');
});
