//adding event listener
document.getElementById("submit").addEventListener('click',()=>{
    main();
});


//function that checks whether the names are give as input

function check_the_enter_name(p1,p2,p3){
    if(p1=='' && p2=='' && p3==''){
        alert("NAMES NOT ENTERED");
        return(false);
    }
    else if((p1=='' && p2=='')||(p1=='' && p3=='')||(p2=='' && p3=='')){
        alert("NAMES MISSING");
        return(false)
    }
    else if(p1==''){
        alert("ENTER PLAYER 1 NAME");
        return(false);
    }else if(p2==''){
        alert("ENTER PLAYER 2 NAME");
        return(false);
    }else if(p3==''){
        alert("ENTER PLAYER 3 NAME");
        return(false);
    }
    else{
        return(true);
    }
}


//functions that gets the player name

function getting_player_name(){
    let player_1=document.getElementById('player_1_name').value;
    let player_2=document.getElementById('player_2_name').value;
    let player_3=document.getElementById('player_3_name').value;
    return([player_1,player_2,player_3]);  
}

//function that stores the name in local storage

function storing_names(names){
    localStorage.setItem("player_names",JSON.stringify(names));
}


function main(){
    let players_name=getting_player_name();
    if(check_the_enter_name(players_name[0],players_name[1],players_name[2])){
        storing_names(players_name);
        window.location.href="../Move-Selection-Page/index.html";//loades the next pages where the moves will be selecte
    }
    
}