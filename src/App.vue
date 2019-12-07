<template>
  <div id="app">
    <Splash />
    <Manifesto />
    <SocialProof />
    <TeaserContent />
    <Testimonial />
    <Cta />
    <About />
  </div>
</template>

<script>
import About from './components/about';
import Cta from './components/cta';
import Manifesto from './components/manifesto';
import SocialProof from './components/socialProof';
import Splash from './components/splash';
import TeaserContent from './components/teaserContent';
import Testimonial from './components/testimonial';

export default {
  name: 'app',
  components: {
    TeaserContent,
    Splash,
    SocialProof,
    Manifesto,
    Testimonial,
    Cta,
    About,
  }
}
</script>

<style>
@import './assets/foundation.css';
@import './assets/style.css';
</style>
