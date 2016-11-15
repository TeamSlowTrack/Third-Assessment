import ngAnimate from 'angular-animate'
import ngAria from 'angular-aria'
import ngMaterial from 'angular-material'
import ngMessages from 'angular-messages'
import uiRouter from 'angular-ui-router'
import ngCookies from 'angular-cookies'
import twitterLogin from './login/login.module'
import mainpage from './mainpage/mainpage.module'

import { app } from './app.component'
import { configure } from './app.config'
import { visualizeRouting } from './app.run'
import { AuthenticateService } from './global/auth.service.js'

export default
  angular
    .module('twitter-app', [
      ngAnimate,
      ngAria,
      ngMaterial,
      ngMessages,
      uiRouter,
      ngCookies,
      twitterLogin,
      mainpage

    ])
    .component('app', app)
    .service('$authenticate', AuthenticateService)
    .config(configure)
    .run(visualizeRouting)
    .name
