<style scoped>

</style>
<template>
<div>
    <H1>Navigation</H1>
    <img class="shape" :src="require('@/assets/triangle.svg')" @click="makeSelection" :class="{ 'shape-full': isSelected }">
</div>
</template>

<script>
export default {
    name: "Navigation",
    data() {
      return {
        isSelected: false
      };
    },
    methods: {
        makeSelection() {
            this.isSelected = true;
        }
    },
}
</script>
