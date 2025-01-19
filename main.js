
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const rounds = $$('.round')
const iframe_container = $('.iframe-container')

const sections = $$('section');
const navLinks = $$('.nav');
const scroll_to_top = $('.scroll-to-top')


window.addEventListener('scroll', ()=>
{
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
  {
    scroll_to_top.style.display = 'flex'
  }else scroll_to_top.style.display = 'none'
})

scroll_to_top.addEventListener('click', ()=>
  {
      window.scroll({
          top: 0,
          scrollBehavior: 'smooth'
      })
  })



window.addEventListener('scroll', () => {
  let currentSection = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(currentSection)) {
      link.classList.add('active');
    }
  });
});


navLinks.forEach(n =>
{
    n.addEventListener('click', function()
    {
        $('.nav.active').classList.remove('active')
        
        this.classList.add('active')
    })
}
)

let typed = new Typed('.two', 
    {
        strings: ["&nbsp;Student", "&nbsp;Learner", "&nbsp;Thinker","&nbsp;Coder"],
        typeSpeed: 150,
        backSpeed: 150,
        loop: true,
        showCursor: true, 
        cursorChar: "_",
    }
)

const links = [
    'https://insanegroup.github.io/WebProject/',
    'https://insanegroup.github.io/WebProject/src/html/recipes.html',
    './img/search1-result.webp',
    './img/info-result.webp',
    './img/profile-result.webp',
]

rounds.forEach((round, index) =>
{
  
    round.addEventListener('click', ()=>
    {
        const iframe = iframe_container.querySelector('iframe')
        
        iframe.src = links[index]
        iframe_container.style.display = 'block'
        
    })
  
}
)

/////////////////animation on srcoll\


window.onscroll = ()=>
{
  sections.forEach(sec =>
  {
    let top = window.scrollY
    let offset = sec.offsetTop
    let height = sec.offsetHeight

    if(top >= offset && top < offset + height)
    {
      sec.classList.add('show-animate')
    }else sec.classList.remove('show-animate')
  }
  )
}


