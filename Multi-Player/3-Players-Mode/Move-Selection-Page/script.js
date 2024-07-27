//retreving the player names from local storage

let player_names=JSON.parse(localStorage.getItem("player_names"))


//declaring a array to store player_moves

let players_moves=[];


//decalring a count to keep the track of player move

let player_index=0


//Cames the names span to player-1 name

document.querySelector(".name").innerHTML=player_names[0];


//change the name for displaying
function name_changer(){
    if(player_index==0){
        document.querySelector(".name").innerHTML=player_names[0];
    }else if(player_index==1){
        document.querySelector(".name").innerHTML=player_names[1];
    }else if(player_index==2){
        document.querySelector(".name").innerHTML=player_names[2];
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


function main(curr_move,player_index){
    move_storing_array(curr_move)
    name_changer()
    if(player_index==3){
        move_storage_local();
    }
}