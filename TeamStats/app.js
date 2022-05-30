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
        //return Object.entries(team._players) // Qual a diferença para return this._players // Conflitou com addPlayer
        return this._players
    },

    get games() { 
        return this._games
    },

    addPlayer(newFirstName, newLastName, newAge) {

        // Return team._players.push(player)

        let player = { 
            firstName : newFirstName,
            lastName: newLastName,
            age: newAge,
        };

        //this.players.push(player);
        return team._players.push(player)
    },

    addGame(opponent, teamPoints, opponentPoints){ 
        let game = { 
            opponent, 
            teamPoints, 
            opponentPoints
        }

        this.games.push(game);
    }
}


team.addPlayer('Alfredo', 'Junior', 32)
team.addGame('BackLog', 34, 80);

console.log(team.players);
console.log(team.games);
