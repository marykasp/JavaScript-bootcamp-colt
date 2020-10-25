
// ****************************************
// Step 1 - UGLY UN-REFRACTORED CODE! (but it still works)
// ****************************************

const ulParent = document.createElement('ul');

for(let game of warriorsGames) {
  // destructure the warriorsGame object
  const {homeTeam, awayTeam} = game;

  // create a new list item
  const gameLi = document.createElement('li');

  const {team: hTeam, points: hPoints} = homeTeam;
  const {team: aTeam, points: aPoints} = awayTeam;

  // create string template literals
  const teamNames = `${aTeam} @ ${hTeam}`;
  let scoreLine;
  // compare the two scores to bold the winning team
  if (aPoints > hPoints) {
    scoreLine = `<b>${aPoints}</b> - ${hPoints}`
  } else {
    scoreLine = `${aPoints} - <b>${hPoints}</b>`
  }

  // check if the home team or away team in each game is Golden State
  const warriors = hTeam === 'Golden State' ? homeTeam : awayTeam;
  // apply correct class to gameLi depending on if warriors won or not
  gameLi.classList.add(warriors.isWinner ? 'win' : 'loss')
  // console.log(warriors);

  // add inner HTML to the gameLi using the template literals that contain HTML formatting
  gameLi.innerHTML = `${teamNames} ${scoreLine}`


  // append each li to the parent ul
  ulParent.appendChild(gameLi)
  // console.log(awayTeam.team, homeTeam.team);
}

document.body.prepend(ulParent);
