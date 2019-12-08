<template>
  <div id="app">
    <Splash />
    <Navigation />
  </div>
</template>

<script>
import Splash from './components/splash'
import Navigation from './components/navigation'

export default {
  name: 'app',
  components: {
    Splash,
    Navigation,
  }
}
</script>

<style>
@import './assets/foundation.css';
@import './assets/style.css';
</style>
