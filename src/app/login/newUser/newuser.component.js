import templateUrl from './newuser.component.html'

/* @ngInject */
class NewUserController {
  constructor ($log, $authenticate) {
    this.$authenticate = $authenticate
    $log.debug('NewUserController instantiated')
  }

  create () {
    this.$authenticate.create()
  }

  validateUsername () {
    this.$authenticate.validateUsername()
  }
}

export const newuser = {
  templateUrl,
  controller: NewUserController,
  controllerAs: '$newuser'
}
