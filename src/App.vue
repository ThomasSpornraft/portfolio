<script setup>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
</script>




<template>
  <TheHeader />
  <router-view></router-view>
  <TheFooter />
</template>

<style>
@import url(https://fonts.googleapis.com/css?family=Dancing+Script:regular,500,600,700);
@import url(https://fonts.googleapis.com/css?family=VT323:regular);
@import url(https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic);
@import url(https://fonts.googleapis.com/css?family=Playball:regular);
@import url(https://fonts.googleapis.com/css?family=Monoton:regular);
@import url(https://fonts.googleapis.com/css?family=Faster+One:regular);
@import url(https://fonts.googleapis.com/css?family=Anek+Latin:100,200,300,regular,500,600,700,800);
@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic);

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  position: relative;
  width: 100%;
  height: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

ul,
li {
  list-style: none;
}

#app {
  min-height: 100%;
  display: grid;
  grid-template-rows: 50px auto 50px;
  font-family: 'Anek Latin';
  background: #1A1A1A;

}
</style>
