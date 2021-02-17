let fiveQuestions = [["Commonly used data types DO NOT include:", "1. strings", "2. booleans", "3. alerts", "4. numbers"], 
["The condition in an if / else statement is enclosed within ___.", "1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"], 
["Arrays in javascript can be used to store ___.", "1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"], 
["String values must be enclosed within ___ when being assigned to variables.", "1. commas", "2. curly brackets", "3. quotes", "4. parentheses"], 
["A very useful tool used during development and debugging for printing content to the debugger is:", "1. JavaScript", "2. terminal / bash", "3. for loops", "4. console.log"]];

let footer = document.querySelector("footer");
let p = document.createElement("p");
p.innerHTML = fiveQuestions;
footer.appendChild(p);