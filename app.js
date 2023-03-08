const upBtn = document.querySelector(".up-button")
const downBtn = document.querySelector(".down-button")

const sideBar = document.querySelector(".sidebar")

const mainSlide = document.querySelector(".main-slide")

const slidesCount = mainSlide.querySelectorAll("div").length

let activeSLideIndex = 0;

sideBar.style.top =`-${(slidesCount - 1) * 100}vh`

upBtn.addEventListener("click", () => {
    changeSlide("up")
})

downBtn.addEventListener("click", () => {
    changeSlide("down")
})

function changeSlide(direction) {
    if(direction === "up"){
        activeSLideIndex++
        if(activeSLideIndex === slidesCount){
            activeSLideIndex = 0;
        }
    }else if(direction === "down"){
        activeSLideIndex--
        if(activeSLideIndex < 0){
            activeSLideIndex = slidesCount - 1
        }
    }

    const height = container.clientHeight
    mainSlide.style.transform = `translateY(-${activeSLideIndex * height}px)`

    sideBar.style.transform = `translateY(${activeSLideIndex * height}px)`
}

const container =  document.querySelector(".container")