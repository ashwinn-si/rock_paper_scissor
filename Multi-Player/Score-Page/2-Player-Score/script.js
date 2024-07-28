//retreving the names from the local storage

let names=JSON.parse(localStorage.getItem("player_names"));
let score=JSON.parse(localStorage.getItem("score_card"));


//changing the players name

document.getElementById("player_1_name").innerHTML=names[0];
document.getElementById("player_2_name").innerHTML=names[1];


//changing the player score 

document.getElementById("player_1_score").innerHTML=score[0];
document.getElementById("player_2_score").innerHTML=score[1];


//changing the win points || retriving the points to win
let win_rounds=JSON.parse(localStorage.getItem("no_rounds_to_be_played"));
document.getElementById("win_score").innerHTML=win_rounds;


//adding event listeners to close button
document.getElementById("close-button").addEventListener("click", () => {
    window.location.href = "../../2-Players-Mode/Move-Selection-Page/index.html";
});