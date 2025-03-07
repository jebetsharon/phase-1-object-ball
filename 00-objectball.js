// Step 1: Define the gameObject function that returns an object with nested properties for the teams
function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
          }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
          }
        }
      }
    };
  }
  
  // Step 2: Build the functions
  
  // Function to get the home team's name
  function homeTeamName() {
    return gameObject()["home"]["teamName"];
  }
  
  // Function to get the away team's name
  function awayTeamName() {
    return gameObject()["away"]["teamName"];
  }
  
  // Function to get the colors of a given team
  function teamColors(teamName) {
    let game = gameObject();
    if (game.home.teamName === teamName) {
      return game.home.colors;
    } else if (game.away.teamName === teamName) {
      return game.away.colors;
    }
    return [];
  }
  
  // Function to get the names of both teams
  function teamNames() {
    let game = gameObject();
    return [game.home.teamName, game.away.teamName];
  }
  
  // Function to get the jersey numbers of players from a given team
  function playerNumbers(teamName) {
    let game = gameObject();
    let numbers = [];
    if (game.home.teamName === teamName) {
      for (let player in game.home.players) {
        numbers.push(game.home.players[player].number);
      }
    } else if (game.away.teamName === teamName) {
      for (let player in game.away.players) {
        numbers.push(game.away.players[player].number);
      }
    }
    return numbers;
  }
  
  // Function to get the stats of a specific player
  function playerStats(playerName) {
    let game = gameObject();
    if (game.home.players[playerName]) {
      return game.home.players[playerName];
    } else if (game.away.players[playerName]) {
      return game.away.players[playerName];
    }
    return {};
  }
  
  // Function to get the player with the largest shoe size and their rebounds
  function bigShoeRebounds() {
    let game = gameObject();
    let largestShoeSize = 0;
    let playerWithBiggestShoe = '';
    
    // Check home team players
    for (let player in game.home.players) {
      if (game.home.players[player].shoe > largestShoeSize) {
        largestShoeSize = game.home.players[player].shoe;
        playerWithBiggestShoe = player;
      }
    }
    
    // Check away team players
    for (let player in game.away.players) {
      if (game.away.players[player].shoe > largestShoeSize) {
        largestShoeSize = game.away.players[player].shoe;
        playerWithBiggestShoe = player;
      }
    }
    
    // Return the rebounds of the player with the largest shoe size
    if (game.home.players[playerWithBiggestShoe]) {
      return game.home.players[playerWithBiggestShoe].rebounds;
    } else if (game.away.players[playerWithBiggestShoe]) {
      return game.away.players[playerWithBiggestShoe].rebounds;
    }
    return 0;
  }
  
  // Function to find the player with the most points
  function mostPointsScored() {
    let game = gameObject();
    let mostPoints = 0;
    let topScorer = '';
    
    // Check home team players
    for (let player in game.home.players) {
      if (game.home.players[player].points > mostPoints) {
        mostPoints = game.home.players[player].points;
        topScorer = player;
      }
    }
    
    // Check away team players
    for (let player in game.away.players) {
      if (game.away.players[player].points > mostPoints) {
        mostPoints = game.away.players[player].points;
        topScorer = player;
      }
    }
    
    return topScorer;
  }
  
  // Function to find the team with the most points
  function winningTeam() {
    let game = gameObject();
    let homePoints = 0;
    let awayPoints = 0;
    
    // Sum points for home team
    for (let player in game.home.players) {
      homePoints += game.home.players[player].points;
    }
    
    // Sum points for away team
    for (let player in game.away.players) {
      awayPoints += game.away.players[player].points;
    }
    
    // Return the team with the most points
    if (homePoints > awayPoints) {
      return game.home.teamName;
    } else if (awayPoints > homePoints) {
      return game.away.teamName;
    } else {
      return "It's a tie!";
    }
  }
  