/* eslint-disable no-new */
import './styles/app.css'
import 'normalize.css'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/fontawesome'

class Page {
  constructor () {
    this.mainPageLink = document.querySelector('.main-page-logo')

    this.initListeners()
  }

  initListeners () {
    window.addEventListener('resize', () => {
      console.log(window.innerWidth)
    })

    let scrollTimer = ''
    window.addEventListener('scroll', () => {
      if (scrollTimer) clearTimeout(scrollTimer)
      scrollTimer = setTimeout(() => {
        if (pageYOffset >= 30) {
          this.mainPageLink.classList.add('main-page-logo_sticky')
        } else {
          this.mainPageLink.classList.remove('main-page-logo_sticky')
        }
        console.log(pageYOffset)
      }, 230)
    })
  }
}

class NavigationBar {
  constructor () {
    this.nestedListItems = document.querySelectorAll('.nav-bar__nested-list-item')

    this.initListeners()
  }

  initListeners () {
    this.nestedListItems.forEach(list => {
      list.addEventListener('mouseenter', this.displaySubMenu.bind(this))
      list.addEventListener('mouseleave', this.hideSubMenu.bind(this))
    })
  }

  displaySubMenu (event) {
    const subList =
      event.currentTarget.querySelector('.nav-bar__sub-list')
    subList.classList.remove('nav-bar__sub-list_hidden')
  }

  hideSubMenu (event) {
    const subList =
      event.currentTarget.querySelector('.nav-bar__sub-list')
    subList.classList.add('nav-bar__sub-list_hidden')
  }
}

new Page()
new NavigationBar()
