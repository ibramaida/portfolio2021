const icon = document.getElementById("icon")
const navbar = document.getElementById("navbar")



let touchStart, touchEnd

icon.addEventListener('click', () => {
    navbar.classList.toggle('open')
} )


navbar.addEventListener(
    'touchstart',
     e => (touchStart = e.targetTouches[0].clientX)
)
navbar.addEventListener(
    'touchmove',
    e => (touchEnd = e.targetTouches[0].clientX)
)

navbar.addEventListener('touchend', e => {
    if (touchStart - touchEnd > 45) {
        navbar.classList.remove("open")
    }
})
function closeMenu(e){
    e.classList.toggle("close");
}