import inquirer from "inquirer";
const todos = [];
let loop = true;
while (loop) {
    const answer = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "What Do You Wanna Add In Your ToDo ?"
        },
        {
            type: "confirm",
            name: "addMore",
            message: "Do You Wanna Add More Todo",
            default: false
        }
    ]);
    const { TODO, addMore } = answer;
    loop = addMore;
    if (TODO) {
        todos.push(TODO);
    }
    else {
        console.log("kindly add valid input");
    }
}
if (todos.length > 0) {
    console.log("Your To do list: \n ");
    todos.forEach(todo => {
        console.log(todo);
    });
}
else {
    console.log("No Todos Found !");
}
