let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => { 
    let targetNumber = Math.ceil(Math.random() *10);  
    return targetNumber
}

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
    
    let humanLenght = targetNumber - humanGuess; // 9 -8 = 1 \\ 9 - 5 = 4
    let computerLength = targetNumber - computerGuess
    
    if(humanLenght > computerLength){ 
        return false
    }else { 
        return true
    }
}

const updateScore = winner => { 
    if(winner === 'human'){ 
        humanScore++
    } else { 
        computerScore++
    }
}

const advanceRound = () =>{ 
    currentRoundNumber++
}