<template>
 <drop-down></drop-down>
</template>

<script>
import DropDown from './components/DropDown.vue';


export default {
  name: 'App',
  components: {
    DropDown,

   
  }
  ,methods: {
    setlectCity(e) {
      this.cityList = this.cityList.filter((c) => c !== e.target.value);
      this.selectedCity.push(e.target.value);
    },
    deselecteCity(city) {
      console.log("as");
      this.selectedCity = this.selectedCity.filter((c) => c !== city);
      this.cityList.push(city);
    },
    
  },
  mounted() {
    this.$store.dispatch('getCities')
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
