<template>
  <component :is="type" :href="href" :target="target" class="button">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: null
    },
    target: {
      type: String,
      default: null
    },
    to: {
      type: String,
      default: null
    }
  },
  computed: {
    type() {
      if (this.href) {
        return "a";
      } else {
        return "button";
      }
    }
  }
};
</script>

<style scoped>
.button {
  background-color: #59bcea;
  border: none;
  border-radius: 20px;
}
</style>
