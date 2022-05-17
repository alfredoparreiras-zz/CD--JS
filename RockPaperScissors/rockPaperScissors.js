const getUserChoice = userInput => { 
    userInput = userInput.toLowerCase(); 

    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') { 
        return userInput;
    } else { 
        console.log('You need to choose between Rock, Paper or Scissors!!')
    }
}

const getComputerChoice = () => { 
    let choice = Math.floor(Math.random() * 3)
    let computerMove;

    switch(choice){ 
        case 0: 
            computerMove = 'rock'
            break;
        case 1: 
            computerMove = 'paper'
            break;
        case 2: 
            computerMove = 'scissor'
            break;
        default: 
        console.log('Something here got wrong')
    }

    return computerMove
}


const determineWinner = (userChoice, computerChoice) => { 
    
    if(userChoice === computerChoice){ 
        return 'The Game was tie!';
    } 

    if(userChoice === 'rock' && computerChoice === 'paper') { 
        return 'The Computer Won!';
    } else if(userChoice === 'paper' && computerChoice === 'scissor'){
        return 'The Computer Won!';
    } else if(userChoice === 'scissor' && computerChoice === 'rock'){ 
        return 'The Computer Won!';
    } else { 
        return 'The user won!'
    }
}

const playGame = () => { 
    
    const userChoice = getUserChoice('rock'); 
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw:' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice)); 
    
}

playGame();