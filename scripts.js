//copy logos
let copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);

//cursors
const cursorTag = document.querySelector("div.cursors");

const ball = cursorTag.querySelector("div");
const ballMessage = cursorTag.querySelector("div span");
// const img = document.querySelectorAll(".logo-work");
// const specialFrame = document.querySelectorAll(".special-frame.logo");
//
const message=document.querySelectorAll("a[data-hover]");
let keyword = "active";
//
document.addEventListener("mousemove", function (event){
    ball.style.left = event.pageX + "px";
    ball.style.top = event.pageY + "px";
})

message.forEach(text => {
    text.addEventListener("mouseover", function (el){
        cursorTag.classList.add("active");
        ballMessage.classList.add("visible");
        let img = el?.currentTarget?.querySelector(".logo-work");
        let specialFrame = el?.currentTarget?.querySelector(".special-frame.logo");
        img.classList.add("transform");
        specialFrame.classList.add("transform");
        ballMessage.innerHTML = text.getAttribute("data-hover");

    });
    text.addEventListener("mouseout", function (el){
        ballMessage.classList.remove("visible");
        cursorTag.classList.remove("active");
        let img = el?.currentTarget?.querySelector(".logo-work");
        let specialFrame = el?.currentTarget?.querySelector(".special-frame.logo");

        img.classList.remove("transform");
        specialFrame.classList.remove("transform");

    });
})



// img.forEach(elem => {
//     elem.classList.add("transform");
// })


// ballMessage.forEach(elem => {
//     elem.addEventListener("mouseover",function (){
//         img.classList.add("transform");
//         specialFrame.classList.add("transform");
//     });
//     elem.addEventListener("mouseout", function (){
//         img.classList.remove("transform");
//         specialFrame.classList.remove("transform");
//     });
// })
