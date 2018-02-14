var rng = Math.random();
var computerChoice = "R";

if(rng > 0.66) {
    computerChoice = "P";
} else if (rng > 0.33) {
    computerChoice = "S";
}
