function onScroll(){
    
    if(scrollY > 0 ){
        navigation.classList.add('scroll')
    } else{
        navigation.classList.remove('scroll')
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
    #home .stats, 
    #services,
    #services header,
    #services .card`);

