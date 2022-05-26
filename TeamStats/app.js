const team = { 
    _players: [
        {   firsName: 'Alfredo', lastName: 'Silva', age: 31 },
        {   firsName: 'Carolina', lastName: 'Dias', age: 27 },
        {   firsName: 'Charlie',lastName: 'Hiptocks',age: 33 }
    ],
    _games: [
        {   opponent: 'QA', teamPoints: 50, opponentPoints: 30},
        {   opponent: 'UX/UI',teamPoints: 55, opponentPoints: 40},
        {   opponent: 'DevOPS',teamPoints: 54, opponentPoints: 60}
    ],

    get players() { 
        return Object.entries(team._players)
    },

    get games() { 
        return Object.entries(team._games)
    },

    addPlayer(newFirstName, newLastName, newAge)


}

console.log(team.games);
