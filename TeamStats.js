const team = {
  _players: [
    {firstName: "Javier", lastName:"Zanetti", age: 50},
    {firstName: "Samuel", lastName:"Eto'o", age: 50},
    {firstName: "Esteban", lastName:"Cambiasso", age: 48}
  ],
  _games:[{opponent: "Milan", teamPoints:5, opponentPoint:1},
  {opponent: "Juventus", teamPoints:1, opponentPoint:0},
  {opponent: "Napoli", teamPoints:2, opponentPoint:1}],
  get players(){
    if(this._players){
      return ` the players are :${JSON.stringify(this._players)}`
    }else{
      return 'players not found'
    }
  },
  get games(){
    if(this._games){
      return ` the matches are :${JSON.stringify(this._games)}`
    }else{
      return 'games not found'
    }
  },
  addPlayer(newPlayer){
    this._players.push(newPlayer);
  },
  addGame(newGame){
    this._games.push(newGame)
  }

  }



console.log(team.players)
console.log(team.games)

team.addPlayer({ firstName: "Bugs", lastName: "Bunny", age: 76 });
team.addGame({opponent: "Lazio", teamPoints:3, opponentPoint:2});

console.log(team.players)
console.log(team.games)
