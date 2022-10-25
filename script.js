// #nav
function navBurgerMenu() {

  const navCheck = document.querySelector(".navbar") !== null;
  if (navCheck) {
  
    const offCanvas = document.querySelector("[data-toggle='offcanvas']");
    const collapse = document.querySelector(".navbar-collapse");
    const overlay = document.querySelector(".overlay");
    const navbar = document.querySelector(".navbar-nav");
    const submenus = navbar.querySelectorAll(".sub-menu");
  
    offCanvas.onclick = function() {
      collapse.classList.toggle("open");
      overlay.classList.toggle("overlayon");
      offCanvas.classList.toggle("burgeron");
      for (let submenu of submenus) {
        submenu.classList.remove("open-sub");
      }
      for (const li of document.querySelectorAll("li.activeItem")) {
        li.classList.remove("activeItem");
      }
    };
  
    const nav = document.querySelector("nav");
    const navHeight = nav.offsetHeight;
    const transparencyOffset = 200;
    let prevScrollpos = document.pageYOffset;
    document.onscroll = function() {
      /* Add dynamic transparency to nav */
      if (nav.getAttribute("data-isTransparent")) {
        if (
          // document.body.scrollTop >= transparencyOffset || document.documentElement.scrollTop >= transparencyOffset
          document.scrollingElement.scrollTop >= transparencyOffset || document.scrollingElement.scrollTop >= transparencyOffset
        ) {
          /*in some Chrome versions there is bug with 'document.body.scrollTop'*/
          nav.setAttribute("data-isTransparent", "false");
        } else {
          nav.setAttribute("data-isTransparent", "true");
        }
      }
    }
  }
  
  const links = document.querySelectorAll('.drop-down');
  
  links.forEach(link => {
    const subMenu = link.querySelector('.sub-menu');
   
    link.addEventListener('click', function() {
      if (this.classList.contains('activeItem')) {
        this.classList.remove('activeItem');
        subMenu.classList.remove('open-sub');
      } else if (document.querySelector('.activeItem')) {
        document.querySelector('.activeItem').classList.remove('activeItem');
        this.classList.add('activeItem');
        document.querySelector('.open-sub').classList.remove('open-sub');
        subMenu.classList.add('open-sub');
      } else {
        this.classList.add('activeItem');
        subMenu.classList.add('open-sub');
      }
    });
  });
  
  }
  
  if (window.innerWidth < 992) { // avoid 'click event' on large screens
    navBurgerMenu();
  }
  
  window.addEventListener('resize', () => {
    navBurgerMenu();
  })