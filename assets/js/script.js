function initVisibleElements(){
    const elements = document.querySelectorAll('[data-js="visible"]')
    elements[0].classList.add('active-scroll')
    const height = window.innerHeight * 0.8
    elements.forEach((element) => {
        const innerTop = element.getBoundingClientRect().top - height
        const isSectionSmall = innerTop < 0

        if(isSectionSmall){
            element.classList.add('active-scroll')
        }
    })
}

initVisibleElements()
window.addEventListener('scroll', initVisibleElements)
