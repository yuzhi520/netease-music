<template>
  <div id="app">
     <div id="header">
         <img src="./assets/image/rz.png" alt="toggle">
         <div id="nav-main">
           <img src="./assets/image/t_actionbar_music_normal.png" alt="">
           <img src="./assets/image/t_actionbar_discover_selected.png" alt="">
           <img src="./assets/image/t_actionbar_video_normal.png" alt="">
         </div>
         <img src="./assets/image/sj.png" alt="search">
     </div>
     <router-view></router-view>
  </div>
</template>
<style lang="stylus" scoped>
#app
  width 100vw
  height 100vh
  position relative
  left 0
  top 0
#header
  height 100px
  width 100%
  background-color rgb(212,60,51)
  position relative
  left 0
  top 0
  &>img 
    height 44px
    position absolute
    top 50% 
    transform translate(0,-50%)
#header>img:nth-child(1)
  left 28px
#header>img:nth-child(3)
  right 28px
#nav-main
  height 68px
  position absolute
  top 50%
  left 50%
  transform translate(-50%,-50%)
  &>img 
    height 68px
</style>
