let playerSlider = document.querySelector(".players__slider");
let playerSlides = document.querySelectorAll(".players__card");
let playerSliderLeft = document.querySelector("#playersLeft");
let playerSliderRight = document.querySelector("#playersRight");
let slideNumber = document.querySelector("#slideNumber")
let stagesSlider = document.querySelector(".slider__wrapper");
let stagesSlides = document.querySelectorAll(".slide");
let stagesSliderLeft = document.querySelector("#left");
let stagesSliderRight = document.querySelector("#right");
let dots = document.querySelectorAll(".dot");
let blackBtn = document.querySelector(".black__btn")
let whiteBtn = document.querySelector(".white__btn")
let blackBtnBlcok = document.querySelector(".session")
let whiteBtnBlcok = document.querySelector(".stages")
let stagescount = -2;
let stagesSlideWidth = 375;
let stagesposition = 0;
let slideIndex = 0;
let numberCount = 3;
let position = 0;
let count = -3;
let slideWidth = 413;
const screenWidth = window.screen.width;

console.log(stagesSliderLeft)
if (screenWidth == 375){
    slideWidth = 350;
    numberCount = 1
    slideNumber.innerHTML = numberCount;

}

function scrollToBlock(block, higth){
    window.scroll({
        left:0,
        top: (block.offsetTop - higth),
        behavior: "smooth"
    })
}

blackBtn.addEventListener("click", ()=>{
    scrollToBlock(blackBtnBlcok, 120)
})

whiteBtn.addEventListener("click", ()=>{
    scrollToBlock(whiteBtnBlcok, 120)
})

playerSlides.forEach(element => {
    count += 1;
});

playerSliderLeft.addEventListener("click", ()=>{
    position -= slideWidth;
    if (screenWidth == 375){
        if (position < 0){
            position = (count + 2) * slideWidth;
            numberCount = 7;
        }
    } else {
        if (position < 0){
            position = count * slideWidth;
            numberCount = 7;
        }
    }
    numberCount -= 1;
    slideNumber.innerHTML = numberCount;
    playerSlider.style.transform = `translateX(${-position}px)`;
})

playerSliderRight.addEventListener("click", ()=>{
    sliderRight();
})

function sliderRight(){
    position += slideWidth;

    if (screenWidth == 375){
        if (((count + 3) * slideWidth) <= position){
            position = 0;
            numberCount = 0;
        }
    } else{
        if (((count + 1) * slideWidth) <= position){
            position = 0;
            numberCount = 2;
        }
    }
  
    numberCount += 1;
    slideNumber.innerHTML = numberCount;
    playerSlider.style.transform = `translateX(${-position}px)`;
}

setInterval(sliderRight, 4000)

if (screenWidth == 375){
    playerSlides.forEach(element => {
        stagescount += 1;
    });
    
    stagesSliderLeft.addEventListener("click", ()=>{
        stagesposition -= stagesSlideWidth;
       
        if (stagesposition <= 0){
            stagesSliderLeft.classList.add("disabled");
        }
        slideIndex--
        dots.forEach(dot => {
            dot.classList.remove("active")
            dots[slideIndex].classList.add("active")
        });
        stagesSliderRight.classList.remove("disabled");
        stagescount -= 1;
        slideNumber.innerHTML = stagescount;
        stagesSlider.style.transform = `translateX(${-stagesposition}px)`;
    })
    
    stagesSliderRight.addEventListener("click", ()=>{
        stagesRight();
    })
    function stagesRight(){
        stagesposition += stagesSlideWidth;
        if (stagesposition >= 1500){
            stagesSliderRight.classList.add("disabled");
            console.log(1)
        }
        slideIndex++
        dots.forEach(dot => {
            dot.classList.remove("active")
            dots[slideIndex].classList.add("active")
            
        });
        stagesSliderLeft.classList.remove("disabled");
        stagescount += 1;
        slideNumber.innerHTML = stagescount;
        stagesSlider.style.transform = `translateX(${-stagesposition}px)`;
    }
} else {
    
}