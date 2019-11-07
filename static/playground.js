
const enterBtn = document.getElementById("enterPlayground");
const heart = document.getElementById("heart");


function makeHeartDisappearOrReappear(evt) {
    if(heart.style.visibility === "hidden"){
        heart.style.visibility = "visible"}
    else {
        heart.style.visibility = "hidden"
      }
}

enterBtn.addEventListener("click", makeHeartDisappearOrReappear); 

