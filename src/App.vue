<template>
  <div id="app">
    <Splash />
    <Navigation />
    <Button>Register</Button><br />
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

<style>
@import "./assets/foundation.css";
@import "./assets/style.css";
</style>
