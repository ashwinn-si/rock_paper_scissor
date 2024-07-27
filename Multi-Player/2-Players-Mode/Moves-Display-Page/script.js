//round la tha check panuthu atha score ku matanum kuda

//retriving the players-moves form local storage ||  no-total-rounds to be playes || current round count || players name

let player_moves=JSON.parse(localStorage.getItem("player_moves"));
let total_round_count=JSON.parse(localStorage.getItem("no_rounds_to_be_played"));
let curr_round_count=JSON.parse(localStorage.getItem("curr_round_count"));
let players_name=JSON.parse(localStorage.getItem("player_names"))
main()//calling the main function


//function that changes the name of the player
function name_changer(){
    document.getElementById("player_1_name").innerHTML=players_name[0];
    document.getElementById("player_2_name").innerHTML=players_name[1];
}
//function that changes the images 
function image_changer(player_1_move,player_2_move){
    let player_1_img=document.getElementById("player_1_displayer");
    let player_2_img=document.getElementById("player_2_displayer");
    if(player_2_move=='rock'){
        player_2_img.src="../../../images/stone/stone_right.gif";
    }else if(player_2_move=='paper'){
        player_2_img.src="../../../images/paper/paper_right.gif";
    }else{
        player_2_img.src="../../../images/scissor/scissor_right.gif";
    }
    if(player_1_move=='rock'){
        player_1_img.src="../../../images/stone/stone_left.gif";
    }else if(player_1_move=='paper'){
        player_1_img.src="../../../images/paper/paper_left.gif";
    }else{
        player_1_img.src="../../../images/scissor/scissor_left.gif";
    }
}

//checking the computer and player move and returning the result

function result_generator(player_1_move,player_2_move){
    if(player_1_move===player_2_move){
        return('tie');
    }else{
        if(player_2_move==='rock'){
            if(player_1_move==='scissor'){
                return("player_2_win");
            }else{
                return("player_1_win")
            }

        }else if(player_2_move==='paper'){
            if(player_1_move==='rock'){
                return("player_2_win");
            }else{
                return("player_1_win");
            }
        }else{
            if(player_1_move==='paper'){
                return("player_2_win");
            }else{
                return("player_1_win");
            }
        }
    }
}


//function that changes the result text

function result_text_box_color_changer(result){
    let result_text=document.getElementById("result_text");
    if (result == "player_1_win") {
        result_text.innerHTML=players_name[0]+' won';
        result_text.style.backgroundColor = "tomato";
    } else if (result == "player_2_win") {
        result_text.innerHTML=players_name[1]+' won';
        result_text.style.backgroundColor = "lightgreen";
    } else {
        result_text.innerHTML="TIE";
        result_text.style.backgroundColor = "#BF40BF";
    }
}


//function that checks the curr rounds and total round count

function rounds_checker(){
    if(curr_round_count==total_round_count){
        alert("game done");
    }else{
        curr_round_count+=1;
        //stores the curr_round count in local storage
        localStorage.setItem("curr_round_count",JSON.stringify(curr_round_count));
        //rendering again the moves selection page
        window.location.href="../Move-Selection-Page/index.html";
    }
}
function main(){
    name_changer();
    image_changer(player_moves[0],player_moves[1]);
    let result=result_generator(player_moves[0],player_moves[1]);

    //changes the result text box color and result text
    setTimeout(()=>{
        result_text_box_color_changer(result);
    },1000);

    //checking for the rounds
    setTimeout(()=>{
        rounds_checker();
    },5000);
}