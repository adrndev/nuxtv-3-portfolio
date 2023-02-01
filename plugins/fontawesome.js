import { library, config } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown, faPhone, faAt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faGithub,
  faBehance,
  faLinkedin,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faChevronDown,
  faPhone,
  faAt,
  faGithub,
  faBehance,
  faLinkedin,
  faFacebook
)

config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})
