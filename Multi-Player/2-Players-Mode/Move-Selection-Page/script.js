//retreving the player names from local storage

let player_names=JSON.parse(localStorage.getItem("player_names"))

//declaring a array to store player_moves

let players_moves=[];


//decalring a count to keep the track of player move

let player_index=0


//adding event listener to open the score card page
document.getElementById("score-button").addEventListener('click',()=>{
    window.location.href="../../Score-Page/2-Player-Score/index.html";
})


//Changes the names span to player-1 name

document.querySelector(".name").innerHTML=player_names[0];


//change the name for displaying
function name_changer(){
    if(player_index==0){
        document.querySelector(".name").innerHTML=player_names[0];
    }else if(player_index==1){
        document.querySelector(".name").innerHTML=player_names[1];
    }
}

//adding event listeners to store the player moves
document.getElementById("rock_button").addEventListener('click',()=>{
    player_index+=1;
    main("rock",player_index);
})
document.getElementById("paper_button").addEventListener('click',()=>{
    player_index+=1;
    main("paper",player_index);
})
document.getElementById("scissor_button").addEventListener('click',()=>{
    player_index+=1;
    main("scissor",player_index);
})


//function that stores the player moves

function move_storing_array(curr_move){
    players_moves.push(curr_move)//append the move to the array
}


//function that stores the move in local storage

function move_storage_local(){
    localStorage.setItem("player_moves",JSON.stringify(players_moves));
}   


//function that renders the next page

function render_next_page(){
    if(window.innerWidth>768){
    window.location.href="../Moves-Display-Page/Desktop-version/index.html";
    }
    else{
        window.location.href="../Moves-Display-Page/Mobile-version/index.html";
    }
}


function main(curr_move,player_index){
    move_storing_array(curr_move)
    name_changer()
    if(player_index==2){
        move_storage_local();
        render_next_page();
    }
}