const colorToggle = document.querySelector('.btn-color-menu')
const colorNav = document.querySelector('.color-navigation')

const colorItems = document.querySelectorAll('.color-item')

window.onload = () => {
    document.documentElement.style.setProperty('--hue', localStorage.getItem('--hue'))
}

const  closeNav = () => {
    colorNav.classList.remove('show')
    colorToggle.classList.remove('active')
}

const openNav = () => {
    colorNav.classList.add('show')
    colorToggle.classList.add('active')
}

colorToggle.addEventListener('click', () => {
    if(colorNav.classList.contains('show')) {
        closeNav()
    } else {
        openNav()
    }
})

window.addEventListener('click', e => {

    let isOutside = !e.target.closest('.color-navigation')
    
    if(e.target === colorToggle) {
        return
    } else if(isOutside){
        closeNav()
    }
})

// colorItems.forEach(btn => {
//     btn.addEventListener('click', e => {
//         let styles = getComputedStyle(e.target)
//         let bgValue = styles.getPropertyValue('background-color')
//         document.documentElement.style.setProperty('--primary-color', bgValue)
//         localStorage.setItem('--primary-color', bgValue)
//     })
// })

colorItems.forEach(btn => {
    btn.addEventListener('click', e => {
        let styles = getComputedStyle(e.target)
        let hue = styles.getPropertyValue('--hue')
        document.documentElement.style.setProperty('--hue', hue)
        localStorage.setItem('--hue', hue)
    })
})