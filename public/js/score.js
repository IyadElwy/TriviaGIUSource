const player = localStorage.getItem('current_player').split('-')
const name = player[0]
const score = player[1]

document.getElementById('score').innerText = `You Scored ${score} Points`