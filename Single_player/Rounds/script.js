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