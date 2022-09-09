document.getElementById("popup").addEventListener("click" , function(){
    document.querySelector(".container").style.display = "flex";
});
document.getElementById("close-popup").addEventListener("click" , function(){
    document.querySelector(".container").style.display = "none";
});