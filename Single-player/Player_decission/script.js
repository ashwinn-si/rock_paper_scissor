//retreving the name of the winner fomr local storgae

let winner=JSON.parse(localStorage.getItem("winner"));
document.getElementById('winner_result').innerHTML=winner;


//when clicked player again
document.getElementById("play_again_button").addEventListener("click",()=>{
    if(window.innerWidth>768){
        window.location.href="../Desktop_version/index.html";
    }else{
        window.location.href="../Mobile_version/index.html";
    }
})

//when clicked change points
document.getElementById("change_points_button").addEventListener('click',()=>{
    window.location.href="../Rounds/index.html";
})

//when clicked return to main menu
document.getElementById("return_main_button").addEventListener('click',()=>{
    window.location.href='../../index.html';
})