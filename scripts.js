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
const message = document.querySelectorAll("a[data-hover]");
//
document.addEventListener("mousemove", function (event) {
    ball.style.left = event.pageX + "px";
    ball.style.top = event.pageY + "px";
})

message.forEach(text => {
        text.addEventListener("mouseover", function (el) {
            cursorTag.classList.add("active");
            ballMessage.classList.add("visible");
            ballMessage.innerHTML = text.getAttribute("data-hover");

            let img = el?.currentTarget?.querySelector(".logo-work");
            let specialFrame = el?.currentTarget?.querySelector(".special-frame.logo");
            let changeColor = el?.currentTarget?.querySelector(".content-img.team");

            img?.classList.add("transform");
            specialFrame?.classList.add("transform");
            changeColor?.classList.add("transform");

        });
        text.addEventListener("mouseout", function (el) {
            ballMessage.classList.remove("visible");
            cursorTag.classList.remove("active");

            let img = el?.currentTarget?.querySelector(".logo-work");
            let specialFrame = el?.currentTarget?.querySelector(".special-frame.logo");
            let changeColor = el?.currentTarget?.querySelector(".content-img.team");

            img?.classList.remove("transform");
            specialFrame?.classList.remove("transform");
            changeColor?.classList.remove("transform");
        });
    }
)

const scrollContainer = document.querySelector(".scroll-images");
const scrollLength = scrollContainer.scrollWidth - scrollContainer.clientWidth;

let left = document.getElementById("left");
let right = document.getElementById("right");

const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

    function checkScroll(qualifiedName) {
        const currentScroll = scrollContainer.scrollLeft;
        if(currentScroll === 0){
            leftBtn.setAttribute("disabled", "true");
            rightBtn.removeAttribute("disabled");
        } else if (currentScroll === scrollLength){
            rightBtn.setAttribute("disabled", "true");
            leftBtn.removeAttribute("disabled");
        } else {
            leftBtn.removeAttribute("disabled");
            rightBtn.removeAttribute("disabled");
        }
    }

    scrollContainer.addEventListener("scroll",checkScroll);
    window.addEventListener("resize",checkScroll);
    checkScroll();

right.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 380;
});
left.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 380;
});

    // function leftScroll() {
    //     scrollContainer.scrollBy({
    //         left: -200,
    //         behavior: "smooth"
    //     });
    // }
    // function rightScroll() {
    //     scrollContainer.scrollBy({
    //         left: -200,
    //         behavior: "smooth"
    //     });
    // }
    //
    // leftBtn.addEventListener("click", leftScroll);
    // rightBtn.addEventListener("click", rightScroll);
// })