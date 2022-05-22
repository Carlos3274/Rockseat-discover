
window.addEventListener('scroll',onScroll) // Evitar erro no console
onScroll()

function onScroll(){
    showNavOnScroll() 
    showBackToTopButtonOnScroll()
    
    activateMenuAtCurrentSection(home)
}






function activateMenuAtCurrentSection(section) {
    const targetLine = scrollY + innerHeight / 2
}

// verificar se a sessão passou da linha
// quais dados vou precisar?
const sectionTop = section.offsetTop
const sectionHeight = section.offsetHeight

const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

// Verificar se a base está abaixo da linha alvo
// Quais dados vou precisar?
const sectionEndsAt = sectionTop + sectionHeight

const sectionEndsPassedTargetLine = sectionEndsAt <= targetLine

const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndsPassedTargetLine

if (sectionBoundaries) {
    console.log('Estou na seção home')
}























function showNavOnScroll() {

    if(scrollY > 0 ){
        navigation.classList.add('scroll')
    } else{
        navigation.classList.remove('scroll')
    }
}

function showBackToTopButtonOnScroll(){
    if(scrollY > 550 ){
        backToTopButton.classList.add('show')
    } else{
        backToTopButton.classList.remove('show')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')  
}


ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: '700',
/* Separar as strings com acento agudo `` permite separa-las melhor(TEMPLATE LITERALS ) */
}).reveal(`
    #home, 
    #home img, 
    #home .stat,
    #services,
    #services header,
    #services .cards,
    #services .card,
    #about,
    #about header,
    #about .content`);


    

