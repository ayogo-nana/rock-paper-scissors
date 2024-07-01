/* using random number to generate computer input */


/* function to generate computer choice */
function getComputerChoice() {
    let randGen = Math.random() * 6;
    let compInput = (randGen > 0 && randGen <= 1) ? 'rock': 
                    (randGen > 1 && randGen <= 2) ? 'paper':
                    ((randGen > 2 && randGen <= 3)) ? 'scissor':
                    ((randGen > 3 && randGen <= 4)) ? 'rock':
                    ((randGen > 4 && randGen <= 5)) ? 'paper':
                    'scissor';

    return compInput;
}


/* function to pull user input */
function getHumanChoice () {
    /* retrieve user input */
    let userPrompt = prompt("Please enter your choice: ", "");

    /* transform user input's casing so that all case variations are accepted */
    let userCaseTrans = userPrompt.toLowerCase();

    /* confirm user input is one of three options */
    let userInput = (userCaseTrans != 'rock' && 
        userCaseTrans != 'paper' && 
        userCaseTrans != 'scissor') ? prompt("Wrong Input! Try again:","") :
        userCaseTrans;

    return userInput;
}

function playGame() {
    /* score variables */
    let humanScore = 0;
    let computerScore = 0;

    function playRound (humanChoice, computerChoice) {
        /* 
        - write conditionals to compare u[ser and computer inputs
        */
        if (humanChoice == 'rock' && computerChoice == 'rock') {
            return "Draw!";
        }
        else if (humanChoice == 'rock' && computerChoice == 'paper') {
            computerScore++;
            return "You lose! Paper beats Rock.";
        }
        else if (humanChoice == 'rock' && computerChoice == 'scissor') {
            humanScore++;
            return "You Win! Rock beats Scissor.";  
        }
        else if (humanChoice == 'paper' && computerChoice == 'paper') {
            return "Draw!";
        }
        else if (humanChoice == 'paper' && computerChoice == 'rock') {
            humanScore++;
            return "You win! Paper beats Rock"; 
        }
        else if (humanChoice == 'paper' && computerChoice == 'scissor') {
            computerScore++;
            return "You lose! Scissor beats Paper.";
        }
        else if (humanChoice == 'scissor' && computerChoice == 'scissor') {
            return "Draw!";
        }
        else if (humanChoice == 'scissor' && computerChoice == 'rock') {
            computerScore++;
            return "You lose! Rock beats Scissor";
        }
        else if (humanChoice == 'scissor' && computerChoice == 'paper') {
            humanScore++;
            return "You Win! Scissor beats Paper.";
        }
   }
    const humanSelection1 = getHumanChoice();
    console.log (`Round 1! Your Input: ${humanSelection1}`);
    const computerSelection1 = getComputerChoice();
    console.log (`Round 1! Computer Input: ${computerSelection1}`);
    console.log('');
    console.log(playRound(humanSelection1, computerSelection1));
    console.log('');

    const humanSelection2 = getHumanChoice();
    console.log (`Round 2! Your Input: ${humanSelection2}`);
    const computerSelection2 = getComputerChoice();
    console.log (`Round 2! Computer Input: ${computerSelection2}`);
    console.log('');
    console.log(playRound(humanSelection2, computerSelection2));
    console.log('');

    const humanSelection3 = getHumanChoice();
    console.log (`Round 3! Your Input: ${humanSelection3}`);
    const computerSelection3 = getComputerChoice();
    console.log (`Round 3! Computer Input: ${computerSelection3}`);
    console.log('');
    console.log(playRound(humanSelection3, computerSelection3));
    console.log('');

    const humanSelection4 = getHumanChoice();
    console.log (`Round 4! Your Input: ${humanSelection4}`);
    const computerSelection4 = getComputerChoice();
    console.log (`Round 4! Computer Input: ${computerSelection4}`);
    console.log('');
    console.log(playRound(humanSelection4, computerSelection4));
    console.log('');

    const humanSelection5 = getHumanChoice();
    console.log (`Round 5! Your Input: ${humanSelection5}`);
    const computerSelection5 = getComputerChoice();
    console.log (`Round 5! Computer Input: ${computerSelection5}`);
    console.log('');
    console.log(playRound(humanSelection5, computerSelection5));  

    console.log('');
    console.log(`Your Score is : ${humanScore}`);
    console.log(`Computer Score is : ${computerScore}`);

    let winner = (humanScore > computerScore) ? 'You Win!' : (humanScore == computerScore) ? 'Draw!' : 'You lose :(';

    console.log('');
    console.log(winner);
}

console.log(playGame());