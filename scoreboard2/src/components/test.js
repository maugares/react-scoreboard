const state = {
  players: [
    {
      id: 3,
      name: 'Wouter',
      score: 2,
    },
    {
      id: 1,
      name: 'Mimi',
      score: 5,
    },
    {
      id: 2,
      name: 'MIlan',
      score: 4,
    },
  ]
}

// const updatePlayerScore = (id, score) => {
const updatedPlayers = state.players.map(
  player => {
    console.log(player)
    return [...player]
    // console.log(player.id)
    // console.log(id)
    // if (player.id === id) {
    //   // console.log(...player)
    //   return player
    // } else {
    //   // console.log(player)
    //   return player
  }
  // }
)
// }
// updatePlayerScore();
