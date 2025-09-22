// Contact info highlight
const contactChips = document.querySelector('.contact-info').querySelectorAll('p')
contactChips.forEach(chip => {
    chip.addEventListener('mouseover', () => {
        chip.classList.add('highlight')
    })
    chip.addEventListener('mouseout', () => {
        chip.classList.remove('highlight')
    })
})

// Element fading
const fadeElements = document.querySelectorAll('.section')

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
        }
    })
})

fadeElements.forEach(element => {
    observer.observe(element)
})

// Export button fading
// const exportButton = document.querySelector('.export-button')
// exportButton.addEventListener('mouseover', () => {
//     exportButton.classList.add('highlight')
// })
// exportButton.addEventListener('mouseout', () => {
//     exportButton.classList.remove('highlight')
// })