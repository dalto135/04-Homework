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
let scores = [];

let bold = document.querySelector("#bold");
let content = document.querySelector("#content");
let div = document.querySelector("div");
let footer = document.querySelector("footer");
let button = document.querySelector(".button");
let submit = document.createElement("button");
let input = document.createElement("input");
let highScoresBtn = document.querySelector("#highscores");

function press() {
        let result = document.createElement("p");
        if (this.innerHTML !== "Start Quiz") {
            if (this.innerHTML.includes(answers[i])) {
                correct++;
                result.innerHTML = "Correct!";
            }
            else {
                incorrect++;
                result.innerHTML = "Incorrect!";
            }
            i++;
        }
        footer.innerHTML = "";
        footer.appendChild(result);

        console.log(this.innerHTML);
        console.log(answers[i]);
        console.log("Correct: " + correct);
        console.log("Incorrect: " + incorrect);

    if (i < 5) {
        

        bold.innerHTML = "";
        let question = document.createElement("h2");
        question.innerHTML = fiveQuestions[i][0];
        bold.appendChild(question);
        console.log(question);

        
        div.innerHTML = "";
        for (j = 1; j <= 4; j++) {
            let one = document.createElement("button");
            one.classList.add("button");
            one.innerHTML = fiveQuestions[i][j];
            div.appendChild(one);
            one.addEventListener("click", press);
        }
        console.log(div);
    }
    else {
        bold.innerHTML = "";
        let finish = document.createElement("h2");
        finish.innerHTML = "All done!";
        bold.appendChild(finish);
        console.log(finish);

        div.innerHTML = "";
        let score = document.createElement("h2");
        score.innerHTML = "Your final score is 22.";
        div.appendChild(score);
        console.log(score);

        let initials = document.createElement("h2");
        initials.innerHTML = "Enter initials:";
        div.appendChild(initials);
        console.log(initials);

        // <input type="text" class="form-input w-100" id="shopping-input" name="shopping-input" placeholder="Enter item name" />
        
        div.appendChild(input);
        console.log(input);

        
        submit.classList.add("submit");
        submit.innerHTML = "Submit";
        div.appendChild(submit);
        console.log(submit);

        // footer.innerHTML = "";
        result.innerHTML = "Correct: " + correct + " Incorrect: " + incorrect;
    }
}

function submitIt() {
    let poop = input.value;
    scores.push([poop, correct, incorrect]);
    console.log(scores[scores.length - 1]);
}

function highScores() {
    for (i in scores) {
        console.log(scores[i]);
    }
}

button.addEventListener("click", press);
submit.addEventListener("click", submitIt);
highScoresBtn.addEventListener("click", highScores);

