
const RESULT_VALUES = {
  w: 3,
  d: 1,
  l: 0
}

/**
 * Takes a single result string and (one of 'w', 'l', or 'd') 
 * and returns the point value
 * 
 * @param {string} result 
 * @returns {number} point value
 */
const getPointsFromResult = function getPointsFromResult(result) {
  return RESULT_VALUES[result];
}

// Create getTotalPoints function which accepts a string of results
// including wins, draws, and losses i.e. 'wwdlw'
// Returns total number of points won
function getTotalPoints(results) {
  let total = 0;
  [...results].forEach((char) => {
    total += getPointsFromResult(char);
  });
  return total;
}

// Check getTotalPoints
console.log(getTotalPoints('wwdl')); // should equal 7

// create orderTeams function that accepts as many team objects as desired, 
// each argument is a team object in the format { name, results }
// i.e. {name: 'Sounders', results: 'wwlwdd'}
// Logs each entry to the console as "Team name: points"
function orderTeams(...teams) {
  teams.forEach((team) => {
    let points = getTotalPoints(team.results);
    console.log(`${team.name}: ${points}`);
  })
}

// Check orderTeams
orderTeams(
  { name: 'Sounders', results: 'wwdl' },
  { name: 'Galaxy', results: 'wlld' }
);
// should log the following to the console:
// Sounders: 7
// Galaxy: 4

// Create separate team objects for orderResults() IIFE function
const teamObj1 = {
  name: 'Sounders',
  results: 'wwdl'
};
const teamObj2 = {
  name: 'Galaxy',
  results: 'wlld'
};

// orderResults() IIFE function
(orderResults = function() {
  const args = Array.from(arguments);
  console.log('Team Name: ', args[1].name); // Log team name
  args.forEach(getTeamResult); // get each team result
  });
orderResults(teamObj1, teamObj2);

// Calculate total points for each team using the results string
function getTeamResult() {
  //  Split results string into an array
  let resultsArray = arguments[0].results.split('');
  let total = 0;
  resultsArray.forEach(function (resultAlphabet) {
    total += getPointsFromResult(resultAlphabet);
  })
  console.log('Total points: ', total); // Log total points
}
