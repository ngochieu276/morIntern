<template>
  <h1>Dropdown</h1>
  <div class="dropdown">
    <div>
       <div class="title"><h3>Select your city</h3></div>
      <div class="dropdown-list">  
          <div v-for="city of cityList" :key="city">
            <input
              id="city"
              :name="city"
              type="checkbox"
              :value="city"
              v-model="selectedCity"
            />
            <label for="city">{{ city }}</label>
          </div>
      </div>
    </div>

    <div class="selected-list">
      <h2>Your selected city</h2>
      <div class="selected-cities" v-if="selectedCity.length > 0">
        <div class="selected-city" v-for="city in selectedCity" :key="city">
          {{ city }} <span @click.prevent="deselecteCity(city)">x</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  data() {
    return {
      cityList: [],
      selectedCity: [],
    };
  },
  computed: {
    renderList() {
      return this.cityList.map((city) => city);
    },
  },
  methods: {
    setlectCity(e) {
      this.cityList = this.cityList.filter((c) => c !== e.target.value);
      this.selectedCity.push(e.target.value);
    },
    deselecteCity(city) {
      console.log("as");
      this.selectedCity = this.selectedCity.filter((c) => c !== city);
      this.cityList.push(city);
    },
    loadCitys() {
      fetch("https://provinces.open-api.vn/api/")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          const result = [];
          data.map((city) => result.push(city.name));
          this.cityList = result;
          console.log(this.cityList);
        });
    },
  },
  mounted() {
    this.loadCitys();
  },
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  background-color: rgba(0, 123, 195, 0.32);
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
  flex-direction: column;
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
  box-shadow: 0px 0px 8px rgba(0, 123, 195, 0.32);
  border-radius: 10px;
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
