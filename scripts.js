//scroll section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let navLinksFoot = document.querySelectorAll('footer a');

console.log(navLinks);

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offSet = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec?.getAttribute('id');
        console.log(id);

        if (top >= offSet && top < offSet + height) {

            navLinks.forEach(links => {
                links.classList.remove('active');
                // id.classList.add("active");
                document.querySelector('header nav a[href*= ' + id + ']')?.classList.add('active');
            });
            navLinksFoot.forEach(links => {
                links.classList.remove('active');
                // id.classList.add("active");
                document.querySelector('footer a[href*= ' + id + ']')?.classList.add('active');
            });

        }

    });
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
}


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
const message = document.querySelectorAll("a[data-hover].content");
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
})

const scrollContainer = document.querySelector(".scroll-images");
const scrollLength = scrollContainer.scrollWidth - scrollContainer.clientWidth;

let left = document.getElementById("left");
let right = document.getElementById("right");

const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

function checkScroll(qualifiedName) {
    const currentScroll = scrollContainer.scrollLeft;
    if (currentScroll === 0) {
        leftBtn.setAttribute("disabled", "true");
        rightBtn.removeAttribute("disabled");
    } else if (currentScroll === scrollLength) {
        rightBtn.setAttribute("disabled", "true");
        leftBtn.removeAttribute("disabled");
    } else {
        leftBtn.removeAttribute("disabled");
        rightBtn.removeAttribute("disabled");
    }
}

scrollContainer.addEventListener("scroll", checkScroll);
window.addEventListener("resize", checkScroll);
checkScroll();

right.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 380;
});
left.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 380;
});


//
const openQuestion = document.querySelectorAll(".que-item");


openQuestion.forEach((element) => {
    element.addEventListener("click", function (el) {
        let crossQuestion = el?.currentTarget.querySelector(".cross");
        let contentQuestion = el?.currentTarget.querySelector(".que-2");

        if (crossQuestion.style.transform === "none") {
            crossQuestion.style.transform = "rotate(135deg)";
            contentQuestion.style.display = "block";
        } else {
            crossQuestion.style.transform = "none";
            contentQuestion.style.display = "none";
        }
    })
})


//
const elementsSlide = document.querySelector('.slideText');
console.log(elementsSlide);
const observer = new IntersectionObserver(entries => {
    elementsSlide.classList.toggle('slide-top', entries[0].isIntersecting);
});

observer.observe(elementsSlide);

document.addEventListener("DOMContentLoaded", function () {
    const elementsSlide = document.querySelectorAll('.slideText');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("slide-top");
            } else {
                entry.target.classList.remove("slide-top");
            }
        });
    },);
    elementsSlide.forEach(el => {
        observer.observe(el);
    });
});
