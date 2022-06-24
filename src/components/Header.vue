<template>
<header>
  <div class="navbar navbar-default">
    <div class="navbar-header">
      <h1><router-link class="link" :to="{path: '/'}">{{ sitename }}</router-link></h1>
    </div>
    <div class="nav navbar-nav navbar-right cart">
        <router-link active-class="active" tag="button" class="btn btn-default btn-lg" :to="{path: '/form'}">
        <span class="glyphicon glyphicon-shopping-cart">{{ cartItemCount}}</span> Корзина
        </router-link>
    </div>
  </div>
</header>
</template>

<script>
export default {
  data () {
    return {
    sitename: "Матрискин",
    }
  },
  props: ['cartItemCount'],
}
</script>

<style lang="scss">
.link{
  text-decoration: none;
  color: black;
   &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: black;
    }
}

</style>