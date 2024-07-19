const screenWidth = window.innerWidth;
console.log(screenWidth);
function single_player(){
    if(window.innerWidth>768){
        window.location.href="Single_player/Desktop_version/index.html";
    }else{
        window.location.href="Single_player/Mobile_version/index.html";
    }
}
function multi_player(){
    alert("WILL BE CREATED SOON....!")
}