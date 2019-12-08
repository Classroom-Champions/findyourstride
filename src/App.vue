<template>
  <div id="app">
    <Splash />
    <Navigation />
    <!-- Link button with default color -->
    <Button href="https://www.classroomchampions.org/" target="_blank"
      >Register</Button
    ><br />
    <!-- Non-link regular buttons with custom colors -->
    <Button v-bind:style="{ color: '#FFF' }">Register</Button><br />
    <Button v-bind:style="{ backgroundColor: '#F59E87' }">Register</Button
    ><br />
    <Button v-bind:style="{ backgroundColor: '#F8DE31' }">Register</Button
    ><br />
    <Button v-bind:style="{ backgroundColor: '#EB6356' }">Register</Button
    ><br />
    <Button v-bind:style="{ backgroundColor: '#5FCB92' }">Register</Button
    ><br />
    <Button v-bind:style="{ backgroundColor: '#121034', color: '#FFF' }"
      >Register</Button
    ><br />
    <Button v-bind:style="{ backgroundColor: '#EBEBEB' }">Register</Button>
    <!-- End -->
  </div>
</template>

<script>
import Splash from "./components/splash";
import Navigation from "./components/navigation";
import Button from "./components/shared/button";

export default {
  name: "app",
  components: {
    Splash,
    Navigation,
    Button
  }
};
</script>

<style lang="scss">
@import 'assets/css/master.scss';
@import 'assets/css/foundation.scss';
@import 'assets/css/style.scss';
</style>
