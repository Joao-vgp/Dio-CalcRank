function calcRank(wins, loses){
	return wins - loses
}

let rankPoints = calcRank(298 ,214)
let elo
if (rankPoints <= 10) {
	elo = "Ferro"
}else if (rankPoints <= 20) {
	elo = "Bronze"
}else if (rankPoints <= 50) {
	elo = "Prata"
}else if (rankPoints <= 80) {
	elo = "Ouro"
}else if (rankPoints <= 90) {
	elo = "Diamante"
}else if (rankPoints <= 100) {
	elo = "Lendário"
} else {
	elo = "Imortal"
}

console.log("O Herói tem saldo de " +rankPoints + " está no nível de " +elo)