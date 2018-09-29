<template>
    <div id="index-navbar">
        <div id="index-nav">
            <span>推荐</span>
            <span>电台</span>
        </div>
    </div>
</template>
<style lang="stylus" scoped>
#index-navbar
  width 100%
  height 80px
  background-color rgb(212,60,51)
  font-size 24px
  position relative
#index-nav>span:nth-child(1)
  position absolute
  left 3rem
#index-nav>span:nth-child(2)
  position absolute
  right 3rem
#index-nav>span
  top 5% 
  transform translate(0,-50%)
  
  

</style>
