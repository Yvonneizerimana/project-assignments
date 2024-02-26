const team = {
    _players: [],
    _games: [],
  
    get players() {
      return this._players;
    },
  
    get games() {
      return this._games;
    },
  
    addPlayer(newFirstName, newLastName, newAge) {
      const newPlayer = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      };
      this._players.push(newPlayer);
    },
  
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      const newGame = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };
      this._games.push(newGame);
    }
  };
  
  team.addPlayer('Pete', 'Wheeler', 54);
  team.addPlayer('John', 'Doe', 30);
  team.addPlayer('Jane', 'Smith', 25);
  
  team.addGame('Titans', 100, 98);
  team.addGame('Eagles', 80, 85);
  team.addGame('Lions', 70, 65);
  
  console.log(team.players);
  console.log(team.games);