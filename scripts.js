//copy logos
let copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);

//cursors
const cursorTag = document.querySelector("div.cursors");
const ball = cursorTag.querySelector("div");
const ballMessage = cursorTag.querySelector("div span");

const message=document.querySelectorAll("a[data-hover]");

document.addEventListener("mousemove", function (event){
    ball.style.left = event.pageX + "px";
    ball.style.top = event.pageY + "px";
})

message.forEach(text => {
    text.addEventListener("mouseover", function (){
        ballMessage.classList.add("visible");
        ballMessage.innerHTML = text.getAttribute("data-hover");
    });
    text.addEventListener("mouseout", function (){
        ballMessage.classList.remove("visible");
    });
})