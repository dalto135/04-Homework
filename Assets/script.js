let fiveQuestions = [["Commonly used data types DO NOT include:", "1. strings", "2. booleans", "3. alerts", "4. numbers"], 
["The condition in an if / else statement is enclosed within ___.", "1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"], 
["Arrays in javascript can be used to store ___.", "1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"], 
["String values must be enclosed within ___ when being assigned to variables.", "1. commas", "2. curly brackets", "3. quotes", "4. parentheses"], 
["A very useful tool used during development and debugging for printing content to the debugger is:", "1. JavaScript", "2. terminal / bash", "3. for loops", "4. console.log"]];

// let five = {
//     one: ["Commonly used data types DO NOT include:", "1. strings", "2. booleans", "3. alerts", "4. numbers"],
//     two: ["The condition in an if / else statement is enclosed within ___.", "1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"], 
//     three: ["Arrays in javascript can be used to store ___.", "1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"], 
//     four: ["String values must be enclosed within ___ when being assigned to variables.", "1. commas", "2. curly brackets", "3. quotes", "4. parentheses"], 
//     fiver: ["A very useful tool used during development and debugging for printing content to the debugger is:", "1. JavaScript", "2. terminal / bash", "3. for loops", "4. console.log"]
// }
// let keys = Object.keys(five);

let answers = ["3", "3", "4", "4", "4"];
let i = 0;
let correct = 0;
let incorrect = 0;


let bold = document.querySelector("#bold");
let content = document.querySelector("#content");
let footer = document.querySelector("footer");
let button = document.querySelector(".button");

button.addEventListener("click", function() {
    if (button.innerHTML.includes(answers[i])) {
        correct++;
        footer.innerHTML = "Correct!";
        console.log(correct);
    } else if (button.innerHTML.includes("1") || button.innerHTML.includes("2") || 
    button.innerHTML.includes("3") || button.innerHTML.includes("4")) {
        incorrect++;
        footer.innerHTML = "Wrong!";
        console.log(incorrect);
    }

    bold.innerHTML = "";
    content.innerHTML = "";
    let question = document.createElement("h2");
    question.innerHTML = fiveQuestions[i][0];
    bold.appendChild(question);
    console.log(question);

    let div = document.createElement("div");
    div.innerHTML = "";
    for (j = 1; j <= 4; j++) {
        let one = document.createElement("button");
        one.classList.add("button");
        one.innerHTML = fiveQuestions[i][j];
        div.appendChild(one);
    }
    content.appendChild(div);
    console.log(div);

    i++;
})
