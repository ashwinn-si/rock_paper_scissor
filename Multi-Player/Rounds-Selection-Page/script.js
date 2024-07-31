//adding event listeners

document.getElementById("run-5").addEventListener("click",()=>{
    main(5)
})
document.getElementById("run-11").addEventListener("click",()=>{
    main(11)
})
document.getElementById("run-15").addEventListener("click",()=>{
    main(15)
})
document.getElementById("run-21").addEventListener("click",()=>{
    main(21)
})


//customize rounds
document.getElementById("custom_rounds").addEventListener("click",()=>{
    alert("After Entering the no of rounds PRESS <p> to play");
})
document.addEventListener("keydown",(event)=>{
    let key_pressed=event.key// key_pressed contains the key that is pressed
    if (key_pressed==='p'){
        rounds=Number(document.getElementById("custom_rounds").value);
        main(rounds);
    }
})


//function that renders the next page names are taken
function render_next_page(){
    //retriving the no of players from local storage
    let no_players=JSON.parse(localStorage.getItem("no_players"));
    if(no_players==2){
        window.location.href="../2-Players-Mode/Input-Name-Page/index.html";
    }else{
        window.location.href="../3-Players-Mode/Input-Name-Page/index.html";
    }
}
//function which stores the no_rounds in memory and render the next html file 

function main(rounds){
    localStorage.setItem("no_rounds_to_be_played",JSON.stringify(rounds))//stores the rounds in memory

    
    //setting the curr round count to zero
    localStorage.setItem("curr_round_count",JSON.stringify(0));
    //renders the next html file[names entering page]
    render_next_page();
}