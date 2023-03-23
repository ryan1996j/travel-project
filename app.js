var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});
var swiperCard = new Swiper(".popular ", {
    slidesPerView: 3,
    spaceBetween: 50,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
/*filtering */
const ExploreButtons = document.querySelectorAll(".explore-button");

const ExploreCards = document.querySelectorAll(".explore-card");

/*
btn active
*/
for (let i = 0; i < ExploreButtons.length; i++) {
    ExploreButtons[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("exploreActive");
        current[0].className = current[0].className.replace(" exploreActive", "");
        this.className += " exploreActive";



    })

}
function Filtering() {
    ExploreButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            ExploreCards.forEach(block => {
                block.classList.remove('active')
                block.style.transform = `translateX(0)`;
                block.style.opacity = `0`;
                block.style.visibility = `hidden`;
                block.style.width = `0`;
                block.style.marginLeft = `0`;
                block.style.marginRight = `0`;
                block.style.height = `0`;
            })

            ExploreCards.forEach(blk => {
                if (e.target.dataset.menu == blk.dataset.menu) {
                    blk.classList.add('active')
                    blk.style.transform = `translateX(25px)`;
                    blk.style.opacity = `1`;
                    blk.style.visibility = `visible`;
                    blk.style.width = `250px`;
                    blk.style.marginLeft = `0px`;
                    blk.style.marginRight = `15px`;
                    blk.style.height = `300px`;
                }
            })
            if (e.target.dataset.menu == ExploreButtons[0].dataset.menu) {

                ExploreCards.forEach(block => {
                    block.classList.add('active')
                    block.style.transform = `translateX(25px)`;
                    block.style.opacity = `1`;
                    block.style.visibility = `visible`;
                    block.style.width = `250px`;
                    block.style.marginLeft = `0px`;
                    block.style.marginRight = `15px`;
                    block.style.height = `300px`;
                })
            }


        })
    })
}
Filtering()
/*counter */
var waypoint = new Waypoint({
    element: document.getElementById('counter'),
    handler: function (direction) {
        let currentDisplays = document.querySelectorAll(".counter-num")
        let interval = 5000;
        currentDisplays.forEach((currentDisplay) => {
            let start = 0;
            let end = parseInt(currentDisplay.getAttribute("data-value"));
            let duration = Math.floor(interval / end)
            let counter = setInterval(function () {
                start += 10;
                currentDisplay.textContent = `${start}`;
                if (end == start) {
                    currentDisplay.textContent = `${start}+`;
                    clearInterval(counter)
                }
            }, duration)

        })
    },
    offset: "70%"

})



let currentDisplays = document.querySelectorAll(".counter-num")
let interval = 5000;
currentDisplays.forEach((currentDisplay) => {
    let start = 0;
    let end = parseInt(currentDisplay.getAttribute("data-value"));
    let duration = Math.floor(interval / end)
    let counter = setInterval(function () {
        start += 5;
        currentDisplay.textContent = `${start}`;
        if (end == start) {
            currentDisplay.textContent = `${start}+`;
            clearInterval(counter)
        }
    }, duration)

})