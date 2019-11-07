
const enterBtn = document.getElementById("enterPlayground");
const heart = document.getElementById("heart");
const wholePage = document.getElementById("wholePage")


function makeHeartDisappearOrReappear() {
    if(heart.style.visibility === "hidden"){
        heart.style.visibility = "visible"}
    else {
        heart.style.visibility = "hidden"
      }
}

enterBtn.addEventListener("click", makeHeartDisappearOrReappear); 
