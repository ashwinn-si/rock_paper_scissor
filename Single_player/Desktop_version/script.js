let score_card=[0,0]//player_score , computer_score

//retreving the no of rounds from local storage

let no_rounds_to_be_played=JSON.parse(localStorage.getItem("no_rounds_to_be_played"));
//event listeners section

document.getElementById('rock_button').addEventListener('click',()=>{main('rock')});
document.getElementById('paper_button').addEventListener('click',()=>{main('paper')});
document.getElementById('scissor_button').addEventListener('click',()=>{main('scissor')});
document.getElementById('reset_button').addEventListener('click',()=>{reset();});


// event listeners for key pressing

document.body.addEventListener('keydown',(event)=>{
    let key_pressed=event.key;//event contains the alphabet pressed
    // r - ROCK || p - PAPPER || s - SCISSOR || Shift - RESET 
    console.log(key_pressed);
    if(key_pressed==='r'){
        main('rock');
    }else if(key_pressed==='p'){
        main('paper');
    }else if(key_pressed==='s'){
        main('scissor');
    }else if(key_pressed==='Shift'){
        reset()
    }
})


//changes the display property of few html elements

function display_property_changer(){
    document.querySelector(".reset_text").style.display="block";
    document.querySelector(".rounds_text").style.display="block";
    document.querySelector(".compute_box").style.display = "block";
    document.getElementById("total_round").innerHTML=no_rounds_to_be_played;
}


//generate a random computer move

function generate_computer_move(){
    const random_number=Math.random();
    if(random_number>0.66){
        return("scissor");
    }else if(random_number>0.33){
        return("paper");
    }else{
        return("rock");
    }
}

//checking the computer and player move and returning the result

function result_generator(computer_move,player_move){
    if(computer_move===player_move){
        return('tie');
    }else{
        if(player_move==='rock'){
            if(computer_move==='scissor'){
                return("win");
            }else{
                return("loss")
            }

        }else if(player_move==='paper'){
            if(computer_move==='rock'){
                return("win");
            }else{
                return("loss");
            }
        }else{
            if(computer_move==='paper'){
                return("win");
            }else{
                return("loss");
            }
        }
    }
}


//updating the score card 

function result_updator(result){
    if(result==='win'){
        score_card[0]+=1;
    }else if(result==='loss'){
        score_card[1]+=1;
    }
}

//function that changes the color of the result text box
function result_text_box_color_changer(result){
    let result_text_box=document.getElementById("result_text");
    if (result == 'win') {
        result_text_box.style.backgroundColor = "rgb(0, 255, 34)";
    } else if (result == 'loss') {
        result_text_box.style.backgroundColor = "red";
    } else {
        result_text_box.style.backgroundColor = "gray";
    }
}

//changes the images in comp move and player move

function image_changer(player_move,computer_move){
    let computer_img=document.getElementById("computer_move_img");
    let player_img=document.getElementById("player_move_image");
    if(computer_move=='rock'){
        computer_img.src="../images/rock.png";
    }else if(computer_move=='paper'){
        computer_img.src="../images/paper.png";
    }else{
        computer_img.src="../images/scissor.png";
    }
    if(player_move=='rock'){
        player_img.src="../images/rock.png";
    }else if(player_move=='paper'){
        player_img.src="../images/paper.png";
    }else{
        player_img.src="../images/scissor.png";
    }
}


//changes the moves , result values, and many more

function result_displayer(computer_move,player_move,result){
    
    let player_score=document.getElementById("player_score");
    let computer_score=document.getElementById("computer_score");
    let result_text=document.getElementById("result_text");
    player_score.innerHTML=score_card[0];
    computer_score.innerHTML=score_card[1];
    result_text.innerHTML=result;

    //cahnges the result text box color

    result_text_box_color_changer(result);

    //changes the images in player_move and comp_move

    image_changer(player_move,computer_move)

}

//checks for the score and displays who won and returns to the main screen

function result_checker(){
    let player_score=score_card[0];
    let computer_score=score_card[1];
    if(player_score==no_rounds_to_be_played){
        localStorage.setItem("winner",JSON.stringify('PLAYER'))
        window.location.href='../Player_decission/index.html';
    }else if(computer_score==no_rounds_to_be_played){
        
        localStorage.setItem("winner",JSON.stringify('COMPUTER'))
        window.location.href='../Player_decission/index.html';
    }else if(player_score==(no_rounds_to_be_played-1) && computer_score==(no_rounds_to_be_played-1)){
        alert("game point");
    }
}

function main(player_move){
    display_property_changer();
    let computer_move=generate_computer_move();
    let result=result_generator(computer_move,player_move);
    result_updator(result);
    result_displayer(computer_move,player_move,result);
    result_checker();
    
}
function reset(){
    score_card=[0,0];
    document.querySelector(".compute_box").style.display = "none";
    

}