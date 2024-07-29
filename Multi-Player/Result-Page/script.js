//retreving the name of the winner fomr local storgae

let winner=JSON.parse(localStorage.getItem("game_winner"));
document.getElementById('winner_result').innerHTML=winner;


//when clicked player again
document.getElementById("play_again_button").addEventListener("click",()=>{
    /*if(window.innerWidth>768){
      window.location.href="../Desktop_version/index.html";
    }else{
        window.location.href="../Mobile_version/index.html";
    }*/
   window.location.href="../2-Players-Mode/Move-Selection-Page/index.html";

   //setting the score card to zero
   localStorage.setItem("score_card",JSON.stringify([0,0]));

})

//when clicked change points
document.getElementById("change_points_button").addEventListener('click',()=>{
    window.location.href="../Rounds-Selection-Page/index.html";

    //setting the score card to zero
   localStorage.setItem("score_card",JSON.stringify([0,0]));
})

document.getElementById("change_players_name").addEventListener('click', ()=>{
    window.location.href="../2-Players-Mode/Input-Name-Page/index.html";
})
//when clicked return to main menu
document.getElementById("return_main_button").addEventListener('click',()=>{
    window.location.href='../../index.html';
})