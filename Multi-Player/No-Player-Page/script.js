//adding event listeners

document.getElementById("player_2").addEventListener('click',()=>{
    //storing the no of players in the local storage
    localStorage.setItem("no_players",JSON.stringify(2));
    window.location.href="../Rounds-Selection-Page/index.html";
});
document.getElementById("player_3").addEventListener('click',()=>{
    //storing the no of players in the local storage
    //localStorage.setItem("no_players",JSON.stringify(3));
    //window.location.href="../Rounds-Selection-Page/index.html";
    alert("SOON AVAILABLE");
});