import './styles/app.css'
import 'normalize.css'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/fontawesome'

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

    window.addEventListener('resize', () => {
      console.log(window.innerWidth)
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

// eslint-disable-next-line no-new
new NavigationBar()
