const menuBars = document.getElementById('menu-bars')
const overlay = document.getElementById('overlay')
const Nav1 = document.getElementById('nav-1')
const Nav2 = document.getElementById('nav-2')
const Nav3 = document.getElementById('nav-3')
const Nav4 = document.getElementById('nav-4')
const Nav5 = document.getElementById('nav-5')

NavList = [Nav1, Nav2, Nav3, Nav4, Nav5]

function NavAnimation(direction1, direction2) {
  NavList.forEach((nav, i) => {
    nav.classList.replace(
      `slide-${direction1}-${i + 1}`,
      `slide-${direction2}-${i + 1}`
    )
  })
}

function toggleNavBAr() {
  // Toggle menu bar
  menuBars.classList.toggle('change')
  //   Toggle showing menu bar element or not
  overlay.classList.toggle('overlay-active')
  if (overlay.classList.contains('overlay-active')) {
    // Animate in overlay:
    overlay.classList.replace('overlay-slide-left', 'overlay-slide-right')
    // Special Animation triggering
    NavAnimation('out', 'in')
  } else {
    overlay.classList.replace('overlay-slide-right', 'overlay-slide-left')
    // Special Animation triggering
    NavAnimation('in', 'out')
  }
}

menuBars.addEventListener('click', toggleNavBAr)
NavList.forEach((nav) => {
  nav.addEventListener('click', toggleNavBAr)
})
