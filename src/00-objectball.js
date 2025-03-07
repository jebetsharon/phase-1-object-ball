// 00-objectball.js

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

// 1. Function to get the home team name
function homeTeamName() {
    return gameObject().home.teamName;
}

// 2. Function to get a player's shoe size
function shoeSize(playerName) {
    let game = gameObject();
    if (game.home.players[playerName]) {
        return game.home.players[playerName].shoe;
    } else if (game.away.players[playerName]) {
        return game.away.players[playerName].shoe;
    } else {
        return "Player not found";
    }
}

// 3. Function to get the team colors by team name
function teamColors(teamName) {
    let game = gameObject();
    if (game.home.teamName === teamName) {
        return game.home.colors;
    } else if (game.away.teamName === teamName) {
        return game.away.colors;
    } else {
        return "Team not found";
    }
}

// 4. Function to get the team names
function teamNames() {
    let game = gameObject();
    return [game.home.teamName, game.away.teamName];
}

// 5. Function to get the player numbers for a team
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
    } else {
        return "Team not found";
    }

    return numbers;
}

// 6. Function to get a player's stats
function playerStats(playerName) {
    let game = gameObject();
    if (game.home.players[playerName]) {
        return game.home.players[playerName];
    } else if (game.away.players[playerName]) {
        return game.away.players[playerName];
    } else {
        return "Player not found";
    }
}

// 7. Function to find the player with the biggest shoe size and return the rebounds
function bigShoeRebounds() {
    let game = gameObject();
    let largestShoeSize = 0;
    let playerWithLargestShoe = null;

    for (let teamKey in game) {
        for (let player in game[teamKey].players) {
            if (game[teamKey].players[player].shoe > largestShoeSize) {
                largestShoeSize = game[teamKey].players[player].shoe;
                playerWithLargestShoe = player;
            }
        }
    }

    return game.home.players[playerWithLargestShoe]?.rebounds || game.away.players[playerWithLargestShoe]?.rebounds;
}

// 8. Function to find the player with the most points
function mostPointsScored() {
    let game = gameObject();
    let mostPoints = 0;
    let playerWithMostPoints = null;

    for (let teamKey in game) {
        for (let player in game[teamKey].players) {
            if (game[teamKey].players[player].points > mostPoints) {
                mostPoints = game[teamKey].players[player].points;
                playerWithMostPoints = player;
            }
        }
    }

    return playerWithMostPoints;
}

// 9. Function to find the team with the most points
function winningTeam() {
    let game = gameObject();
    let homeTeamPoints = 0;
    let awayTeamPoints = 0;

    for (let player in game.home.players) {
        homeTeamPoints += game.home.players[player].points;
    }

    for (let player in game.away.players) {
        awayTeamPoints += game.away.players[player].points;
    }

    return homeTeamPoints > awayTeamPoints ? game.home.teamName : game.away.teamName;
}

// 10. Function to find the player with the longest name
function playerWithLongestName() {
    let game = gameObject();
    let longestName = "";

    for (let teamKey in game) {
        for (let player in game[teamKey].players) {
            if (player.length > longestName.length) {
                longestName = player;
            }
        }
    }

    return longestName;
}

// 11. Function to check if the player with the longest name has the most steals
function doesLongNameStealATon() {
    let game = gameObject();
    let longestName = playerWithLongestName();
    let mostSteals = 0;
    let playerWithMostSteals = null;

    for (let teamKey in game) {
        for (let player in game[teamKey].players) {
            if (game[teamKey].players[player].steals > mostSteals) {
                mostSteals = game[teamKey].players[player].steals;
                playerWithMostSteals = player;
            }
        }
    }

    return longestName === playerWithMostSteals;
}

// Test the functions
console.log(homeTeamName()); // Should print "Brooklyn Nets"
console.log(shoeSize("Alan Anderson")); // Should print 16
console.log(teamColors("Charlotte Hornets")); // Should print ["Turquoise", "Purple"]
console.log(teamNames()); // Should print ["Brooklyn Nets", "Charlotte Hornets"]
console.log(playerNumbers("Brooklyn Nets")); // Should print [0, 30, 11, 1, 31]
console.log(playerStats("Alan Anderson")); // Should print Alan's stats object
console.log(bigShoeRebounds()); // Should print the rebounds of the player with the largest shoe size
console.log(mostPointsScored()); // Should print the player with the most points
console.log(winningTeam()); // Should print the team with the most points
console.log(playerWithLongestName()); // Should print the player with the longest name
console.log(doesLongNameStealATon()); // Should print true or false
