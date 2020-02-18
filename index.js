var inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your user name?",
      name: "username"
    },
    {
      type: "input",
      message: "What languages do you know?",
      name: "password"
    },
    {
      type: "input",
      message: "What is your preferred method of communication?",
      name: "confirm"
    }
  ])
  .then(function(response) {

    if (response.confirm === response.password) {
      console.log("Success!");
    }
    else {
      console.log("You forgot your password already?!");
    }
  });
