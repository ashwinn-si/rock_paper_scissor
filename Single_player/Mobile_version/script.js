let score_card=[0,0,0,0]//win , loss , tie , round_count

//event listeners definition

document.getElementById('rock_button').addEventListener('click',()=>{main('rock')});
document.getElementById('paper_button').addEventListener('click',()=>{main('paper')});
document.getElementById('scissor_button').addEventListener('click',()=>{main('scissor')});
document.getElementById('reset_button').addEventListener('click',()=>{reset()});

//changes the display property of few html elements

function display_property_changer(){
    document.querySelector(".reset_text").style.display="block";
    document.querySelector(".rounds_text").style.display="block";
    document.querySelector(".compute_box").style.display = "block";
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
    }else{
        score_card[2]+=1;
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

    //changes the round count
    document.getElementById("round_count").innerHTML=score_card[3];

    let win=document.getElementById("win_text");
    let loss=document.getElementById("loss_text");
    let tie=document.getElementById("tie_text");
    let result_text=document.getElementById("result_text");
    win.innerHTML=score_card[0];
    loss.innerHTML=score_card[1];
    tie.innerHTML=score_card[2];
    result_text.innerHTML=result;

    //cahnges the result text box color

    result_text_box_color_changer(result);

    //changes the images in player_move and comp_move

    image_changer(player_move,computer_move)

}

function main(player_move){
    score_card[3]+=1//round count is incremented
    display_property_changer();
    let computer_move=generate_computer_move();
    let result=result_generator(computer_move,player_move);
    result_updator(result);
    result_displayer(computer_move,player_move,result);
    
}
function reset(){
    score_card=[0,0,0,0];
    document.querySelector(".compute_box").style.display = "none";
    document.getElementById("round_count").innerHTML=score_card[3];
}