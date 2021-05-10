/*## Menu Show ##*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*## Remove Menu Mobile ##*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click',linkAction))

/*## Scroll Section Acrive Link ##*/
const section = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)
function scrollActive(){
    const scrollY = window.pageYOffset

    section.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.remove('active')
        }

    })
}

/*## Fungsi scroll ##*/
const fs = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})
/*## Scroll home ##*/
fs.reveal('.home__title',{})
fs.reveal('.home__scroll',{delay: 200})
fs.reveal('.home__img',{delay: 400, origin:'right'})

/*## Scroll about ##*/
fs.reveal('.about__img',{delay: 200})
fs.reveal('.about__subtitle',{delay: 300})
fs.reveal('.about__profession',{delay: 350})
fs.reveal('.about__text',{delay: 350})
fs.reveal('.about__social',{delay: 600, interval: 200})

/*## Scroll skills ##*/
fs.reveal('.skills__subtitle',{})
fs.reveal('.skills__name',{distance: '20px', delay: 50, interval: 100})
fs.reveal('.skills__img',{delay: 300})

/*## SCroll portfolio ##*/
fs.reveal('.portfolio__img',{interval: 200})

/*## Scroll contact ##*/
fs.reveal('.contact__subtitle',{})
fs.reveal('.contact__text',{delay: 200})
fs.reveal('.contact__input',{delay: 300})
fs.reveal('.contact__button',{delay: 400})


/*## Selesai juga ##*/