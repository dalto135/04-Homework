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
let boldTitle = document.querySelector("#bold h2");

let content = document.querySelector("#content");
let div = document.querySelector("div");
let footer = document.querySelector("footer");
let button = document.querySelector(".button");
let highScoresBtn = document.querySelector("#highscores");

let submit = document.createElement("button");
let input = document.createElement("input");
let result = document.createElement("p");
let play = document.createElement("button");
let back = document.createElement("button");
let clear = document.createElement("button");

let timer = document.querySelector("#time");
let start = document.querySelector(".start");
let timeLeft = 75;
let timeInterval;

let body = document.createElement("body");

function press() {
        if (this.innerHTML !== "Start Quiz" && this.innerHTML !== "Play again?") {
            
            if (this.innerHTML.includes(answers[i])) {
                correct++;
                result.innerHTML = "Correct!";
            }
            else {
                incorrect++;
                result.innerHTML = "Incorrect!";
                timeLeft = timeLeft - 15;
            }
            i++;
            footer.innerHTML = "";
            footer.appendChild(result);
        }
        
        // console.log(this.innerHTML);
        // console.log(answers[i]);
        // console.log("Correct: " + correct);
        // console.log("Incorrect: " + incorrect);

    if (i < 5) {
        bold.innerHTML = "";
        let question = document.createElement("h2");
        question.innerHTML = fiveQuestions[i][0];
        bold.appendChild(question);
        // console.log(question);

        content.innerHTML = "";

        for (j = 1; j <= 4; j++) {
            let one = document.createElement("button");
            one.classList.add("button");
            one.innerHTML = fiveQuestions[i][j];
            content.appendChild(one);
            one.addEventListener("click", press);
        }
        // console.log(div);
    }
    else {
        allDone();
    }
}

function allDone() {
        clearInterval(timeInterval);
        timer.innerHTML = "Time: " + timeLeft;
        bold.innerHTML = "";
        let finish = document.createElement("h2");
        finish.innerHTML = "All done!";
        bold.appendChild(finish);
        // console.log(finish);

        content.innerHTML = "";
        let score = document.createElement("h2");
        score.innerHTML = "Your final score is " + timeLeft + ".";
        content.appendChild(score);
        // timeLeft = 0;
        // console.log(score);

        div.innerHTML = "";
        content.appendChild(div);
        let initials = document.createElement("h2");
        initials.innerHTML = "Enter initials:";
        div.appendChild(initials);
        // console.log(initials);

        // input.setAttribute("type", "text");
        div.appendChild(input);
        // console.log(input);

        submit.classList.add("submit");
        submit.innerHTML = "Submit";
        div.appendChild(submit);
        // console.log(submit);

        // footer.innerHTML = "";
        result.innerHTML = "Correct: " + correct + " Incorrect: " + incorrect;
}

function submitIt() {
    let name = input.value;
    scores.push([name, timeLeft, correct, incorrect]);
    // console.log(scores[scores.length - 1]);
    play.innerHTML = "Play again?";
    play.classList.add("start");
    play.classList.add("button");
    bold.innerHTML = "";
    
    
    // div.appendChild(play);

    // back.innerHTML = "Back";
    // div.appendChild(back);

    i = 0;
    correct = 0;
    incorrect = 0;
    highScores();
    // console.log(i);
}

function highScores() {
    clearInterval(timeInterval);
    timeLeft = 0;
    time.innerHTML = "";
    i = 0;
    correct = 0;
    incorrect = 0;
    footer.innerHTML = "";
    highScoresBtn.innerHTML = "";
    content.innerHTML = "";
    div.innerHTML = "";
    content.appendChild(div);
    // highScoresBtn.innerHTML = "Main menu";
    // boldTitle.innerHTML = "High Scores";

    bold.innerHTML = "";
    let intro = document.createElement("h2");
    intro.innerHTML = "High Scores";
    bold.appendChild(intro);

    for (j in scores) {
        let hs = document.createElement("p");
        hs.innerHTML = scores[j][0] + " - Score: " + scores[j][1] + " Correct: " + scores[j][2] + " Incorrect: " + scores[j][3];
        div.appendChild(hs);
    }

    let div2 = document.createElement("div");
    div2.classList.add("div2");
    div.appendChild(div2);
    
    back.innerHTML = "Go Back";
    div2.appendChild(back);

    clear.innerHTML = "Clear Highscores";
    div2.appendChild(clear);

    // for (j in scores) {
    //     console.log(scores[j]);
    // }
}

function goBack() {
    bold.innerHTML = "";
    content.innerHTML = "";
    div.innerHTML = "";
    footer.innerHTML = "";
    highScoresBtn.innerHTML = "View Highscores";
    timeLeft = 0;
    time.innerHTML = "Time: " + timeLeft;

    let intro = document.createElement("h2");
    intro.innerHTML = "Coding Quiz Challenge";
    bold.appendChild(intro);

    let directions = document.createElement("h2");
    directions.innerHTML = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your scoreTime by ten seconds!";
    content.appendChild(directions);

    button.innerHTML = "";
    button.classList.add("start");
    button.classList.add("button");
    button.innerHTML = "Start Quiz";
    div.appendChild(button);
    content.appendChild(div);
}

function countdown() {
    timer.innerHTML = "Time: " + timeLeft;

        timeInterval = setInterval(function () {
            timeLeft--;
            timer.innerHTML = "Time: " + timeLeft;

            // if (timeLeft >= 0) {
                
            // }
            if (timeLeft === 0) {
                clearInterval(timeInterval);
                allDone();
            }
            
        }, 1000);
}

button.addEventListener("click", press);
button.addEventListener("click", countdown);
button.addEventListener("click", function() {
    timeLeft = 75;
    time.innerHTML = "Time: " + timeLeft;
    footer.innerHTML = "";
})

submit.addEventListener("click", submitIt);
highScoresBtn.addEventListener("click", highScores);

// play.addEventListener("click", press);
play.addEventListener("click", function() {
    // press();
    timeLeft = 75;
    footer.innerHTML = "";
    // countdown();
})
play.addEventListener("click", press);
play.addEventListener("click", countdown);

back.addEventListener("click", goBack);

clear.addEventListener("click", function() {
    scores = [];

    div.innerHTML = "";

    let div2 = document.createElement("div");
    div2.classList.add("div2");
    div.appendChild(div2);

    back.innerHTML = "Go Back";
    div2.appendChild(back);

    clear.innerHTML = "Clear Highscores";
    div2.appendChild(clear);
})

