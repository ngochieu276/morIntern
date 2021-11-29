<template>
  <div class="dropdown">
    <div>
      <div class="title"><h3>Select your city</h3></div>
      <div class="dropdown-list">  
          <div v-for="city of cityList" :key="city">
            <input
              :id="city"
              :name="city"
              type="checkbox"
              :value="city"
              v-model="selectedCity"
            />
            <label :for="city">{{ city }}</label>
          </div>
      </div>
    </div>
  </div>
  <results :selectedCity="selectedCity" @deselecte-City="deselecteCity"></results>
</template>

<script>
import Results from './Results.vue'
export default {
  components: {
   Results
  },
  name: "Dropdown",
  data() {
    return {
      selectedCity: []
    }
  },
  computed: {
    cityList() {
      return this.$store.state.cityList
    },
  },
  methods: {
    setlectCity(e) {
      this.selectedCity.push(e.target.value);
    },
    deselecteCity(city) {
      this.selectedCity = this.selectedCity.filter((c) => c !== city);
      
    },
    
  },
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.dropdown {
  display: flex;
  justify-content: space-around;
}
.selected-city {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px auto;
  width: 100px;
  height: 50px;
  border-radius: 5px;
  margin: 5px;
  background-color: rgba(199, 121, 69, 0.32);
}

.title {
  background-color: bisque;
  padding: 1rem;
  border-radius: 12px;
}

.title h3 {
  margin: 0;
}
select {
  font-size: 0.9rem;
  padding: 2px 5px;
}

.selected-cities {
  display: flex;
  flex-wrap: wrap;
}

.dropdown-list {
  text-align: left;
  width: 400px;
  height: 30vh;
  overflow: scroll;
  box-shadow: 0px 0px 8px rgba(0, 123, 195, 0.32);
  border-radius: 12px;
}
.selected-list {
  margin: 50px auto;
  width: 30%;
  box-shadow: 0px 0px 8px rgba(0, 123, 195, 0.32);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  }

  .selected-list button {
    margin: 0 auto;
    width: 50%;
    background-color: bisque;
    border-radius: 5px;
    padding: 5px 7px;
    box-shadow: 0px 0px 8px rgba(0, 123, 195, 0.32);
  }


select {
  width: 100%;
  height: 40px;
  border-radius: 12px;
  background: #fff;
  border: 1px solid #007bc3;
  box-shadow: 0px 0px 8px rgba(0, 123, 195, 0.32);
}
option {
  min-height: 0;
}
</style>
