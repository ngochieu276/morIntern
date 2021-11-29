<template>
 <div class="selected-list">
      <h2>Your selected city</h2>
      <div class="selected-cities" v-if="selectedCity.length > 0">
        <div class="selected-city" v-for="city in selectedCity" :key="city">
          {{ city }} <span @click.prevent="deselecteCity(city)">x</span>
        </div>
      </div>
      <button>Confirm</button>
    </div>
</template>

<script>
export default {
name: 'Results',
props: ['selectedCity'],
methods: {
    deselecteCity(city) {
        this.$emit('deselecteCity',city)
    }
}
}
</script>

<style>

</style>