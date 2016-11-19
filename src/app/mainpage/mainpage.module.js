import { mainpage } from './mainpage.component'
import { configure } from './mainpage.config'
import { menubar } from './menubar/menubar.component'
import twitterPage from './page/page.module'
import { edit } from './edit/edit.component'
import { search } from './search/search.component'
import { tweet } from './tweet/tweet.component'

export default
  angular
    .module('twitter-mainpage', [
      twitterPage
    ])
    .component('mainpage', mainpage)
    .component('tweet', tweet)
    .component('menubar', menubar)
    .component('edit', edit)
    .component('search', search)
    .config(configure)
    .name
