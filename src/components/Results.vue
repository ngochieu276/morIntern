<template>
 <div class="selected-list">
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
.selected-list {
  width: 100%;
  box-shadow: 0px 0px 8px rgba(0, 123, 195, 0.32);
  border-radius: 10px;
  display: flex;
  /* justify-content: space-between; */
}
</style>