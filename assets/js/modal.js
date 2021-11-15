const workContainer = document.querySelector('.work-items')


workContainer.addEventListener('click', e => {
    e.preventDefault()

    // console.log(e.target);

    const modalToggle = e.target.closest('.work-link')
    const onlineBtn = e.target.closest('.btn-online')
    const codeBtn = e.target.closest('.btn-code')

    if(onlineBtn) {
        let href = onlineBtn.getAttribute("href")
        window.open(href, "_blank")
    }
    if(codeBtn) {
        let href = codeBtn.getAttribute("href")
        window.open(href, "_blank")
    }

    if (!modalToggle) return

    const modal = modalToggle.parentNode.nextElementSibling
    const closeButton = modal.querySelector('.close-modal')

    const modalOpen = _ => {
        modal.classList.add('is-open')
        modal.style.animation = 'modalIn 500ms forwards'
        document.body.style.overflowY = 'hidden'
    }

    const modalClose = _ => {
        modal.classList.remove('is-open')
        modal.removeEventListener('animationend', modalClose)
        document.body.style.overflowY = 'scroll'
    }
    
    closeButton.addEventListener('click', _ => {
        modal.style.animation = 'modalOut 750ms forwards'
        modal.addEventListener('animationend', modalClose)
    })

    document.addEventListener('keydown', e => {
        if (e.keyCode === 27) {
            modal.style.animation = 'modalOut 750ms forwards'
            modal.addEventListener('animationend', modalClose)
        }
    })

    modalOpen()

})

// const codeBtn = document.querySelector(".btn-code")
// const onlineBtn = document.querySelector(".btn-online")

// codeBtn.addEventListener("click", () => {
//     codeBtn.setAttribute("href", "https://github.com/ibramaida/space_tourism/tree/master")
//     codeBtn.click()
// })
