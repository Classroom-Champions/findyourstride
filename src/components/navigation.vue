<style scoped>

</style>
<template>
    <div>
        <div @click="makeSelection" :class="{ 'shape--size-full': isSelected }">
            <img class="shape" :src="require('@/assets/triangle.svg')">

            <div class="shape-content">
                <div class="container">
                    <div class="row">
                        <div class="one column">One</div>
                        <div class="eleven columns">Eleven</div>
                    </div>
                </div>
            </div>
        </div>
        <div @click="makeSelection" :class="{ 'shape--size-full': isSelected }">
            <img class="shape" :src="require('@/assets/triangle.svg')">

            <div class="shape-content">
                <div class="container">
                    <div class="row">
                        here we goooo
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Navigation",
    data() {
      return {
        isSelected: false,
      };
    },
    methods: {
        makeSelection() {
            this.isSelected = true;
        }
    },
}
</script>
