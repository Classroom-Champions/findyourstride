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

<style lang="scss">
@import 'assets/css/master.scss';
@import 'assets/css/foundation.scss';
@import 'assets/css/style.scss';
</style>
