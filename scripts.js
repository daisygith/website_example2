//copy logos
let copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);

//copy box
let copyBox = document.querySelector(".result").cloneNode(true);
document.querySelector(".opinions-slide").appendChild(copyBox);



//cursors
const cursorTag = document.querySelector("div.cursors");

const ball = cursorTag.querySelector("div");
const ballMessage = cursorTag.querySelector("div span");
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
        ballMessage.innerHTML = text.getAttribute("data-hover");

        let img = el?.currentTarget?.querySelector(".logo-work");
        let specialFrame = el?.currentTarget?.querySelector(".special-frame.logo");

        let changeColor = el?.currentTarget?.querySelector(".content-img.team");
        img.classList.add("transform");
        specialFrame.classList.add("transform");
        changeColor.classList.add("transform");

    });
    text.addEventListener("mouseout", function (el){
        ballMessage.classList.remove("visible");
        cursorTag.classList.remove("active");

        let img = el?.currentTarget?.querySelector(".logo-work");
        let specialFrame = el?.currentTarget?.querySelector(".special-frame.logo");
        let changeColor = el?.currentTarget?.querySelector(".content-img.team");

        img.classList.remove("transform");
        specialFrame.classList.remove("transform");
        changeColor.classList.remove("transform");
    });
})



