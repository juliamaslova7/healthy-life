document.addEventListener("DOMContentLoaded", () => {

  let hamburger = document.querySelector(".page-header .hamburger")
  let page = document.querySelector('html')
  let mobileMenu = document.querySelector("#main-menu")
    

  hamburger.addEventListener("click", function () {
    if (hamburger.classList.contains("is-active")) {
      drawer.close();
      page.classList.remove('no-scroll')
    } else {
      drawer.open();
      page.classList.add('no-scroll')
    }
    hamburger.classList.toggle("is-active")
  })


  const menu = new MmenuLight(mobileMenu)

  const navigator = menu.navigation({
    theme: "light",
    slidingSubmenus: false,
  });

  const drawer = menu.offcanvas({
    position: "left",
  });

  navigator.openPanel(document.querySelector("#main-menu"));

  setTimeout( ()=> {
    let backdrop = document.querySelector(".mm-ocd__backdrop")
      backdrop.addEventListener("click", function () {
      console.log('1')
      hamburger.classList.toggle("is-active")
      page.classList.toggle('no-scroll')
    })
  }, 1000)

});