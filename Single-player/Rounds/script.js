//adding event listeners

document.getElementById("run-5").addEventListener("click",()=>{
    main(5);
})
document.getElementById("run-11").addEventListener("click",()=>{
    main(11);
})
document.getElementById("run-15").addEventListener("click",()=>{
    main(15);
})
document.getElementById("run-21").addEventListener("click",()=>{
    main(21);
})
document.getElementById("custom_rounds").addEventListener("click",()=>{
    alert("after entering the no of rounds press <ENTER> to play");
})
document.addEventListener("keydown",(event)=>{
    let key_pressed=event.key// key_pressed contains the key that is pressed
    if (key_pressed==='Enter'){
        rounds=Number(document.getElementById("custom_rounds").value);
        main(rounds);
    }
})

//function which stores the no_rounds in memory and render the next html file 

function main(rounds){
    localStorage.setItem("no_rounds_to_be_played",JSON.stringify(rounds))//stores the rounds in memory

    //renders the next html file based on the view width

    if(window.innerWidth>768){
        window.location.href="../Desktop_version/index.html";
    }else{
        window.location.href="../Mobile_version/index.html";
    }
}