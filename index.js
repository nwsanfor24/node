var inquirer = require("inquirer");
var fs = require('fs');

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your user name?",
    },
    {
      type: "checkbox",
      name: "language",
      message: "What languages do you know?",
      choices: ['Spanish', 'German', 'French', 'None of these you monster'],
    },
    {
      type: "checkbox",
      name: "comms",
      message: "What is your preferred method of communication?",
      choices: ['Email', 'Text', 'Call', 'Smoke Signals']
    }
  ])
  .then(function(data) {
    
    var filename = data.name.toLowerCase().split(' ').join('') + ".json";

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {

      if (err) {
        return console.log(err);
      }
      
      console.log("Success!");
    });    
  });
