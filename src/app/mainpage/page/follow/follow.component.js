import templateUrl from './follow.component.html'

/* @ngInject */
class followController {

  constructor ($log, $stateService, $followService, $authenticateService, $profileService, $homeService) {
    this.$followService = $followService
    this.$authenticateService = $authenticateService
    this.$stateService = $stateService
    this.$profileService = $profileService
    this.$homeService = $homeService
    this.followTabBoolean = true
    this.initiatefollowers = $followService.getfollower($authenticateService.$cookies.get('username'))
    this.initiatefollowings = $followService.getfollowing($authenticateService.$cookies.get('username'))
    $log.debug('FollowController instantiated')
  }

  getfollower () {
    return this.$followService.arrfollower
  }

  getfollowing () {
    return this.$followService.arrfollowing
  }

  getTargetFollows () {
    if (this.inputText === undefined) {
      this.inputText = ''
    }
    let searchText = this.inputText
    if (this.followTabBoolean === true) {
      let follower = this.getfollower()
      if (follower.length < 0) {
        return undefined
      } else {
        return follower.filter(function (user) { return user.username.includes(searchText) })
      }
    } else {
      let following = this.getfollowing()
      if (following.length < 0) {
        return undefined
      } else {
        return following.filter(function (user) { return user.username.includes(searchText) })
      }
    }
  }

  setFollowerTabTrue () {
    this.followTabBoolean = true
  }
  setFollowingTabFalse () {
    this.followTabBoolean = false
  }

  goToProfileFollow (username) {
    console.log(username)
    this.$followService.getfollower(username)
    this.$followService.getfollowing(username)
    this.$profileService.refreshProfile(username)
    this.$stateService.state['profile'](username)
  }
}

export const follow = {
  templateUrl,
  controller: followController,
  controllerAs: '$follow'
}
