<template>
  <div class="dropdown">
    <div>
      <div class="title" @click="toggleShow">
        <input type="text" placeholder="Chọn tỉnh thành ..." />
      </div>
      <div v-if="showForm">
        <div  class="dropdown-list">  
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
      <div v-if="!confirm" class="control-button">
        <button @click="toogleConfirm" :disabled="selectedCity.length > 0 ? false : true">Confirm</button>
        <button @click="toggleShow">Cancel</button>
      </div>
      <results v-else :selectedCity="selectedCity" @deselecte-City="deselecteCity"></results>
      </div>
      
    </div>
  </div>
  
</template>

<script>
import Results from "./Results.vue";

export default {
  components: {
    Results,
  },
  name: "Dropdown",
  data() {
    return {
      selectedCity: [],
      showForm: false,
      confirm: false,
    };
  },
  computed: {
    cityList() {
      return this.$store.state.cityList;
    },
  },
  methods: {
    setlectCity(e) {
      this.selectedCity.push(e.target.value);
    },
    deselecteCity(city) {
      this.selectedCity = this.selectedCity.filter((c) => c !== city);
      if (this.selectedCity.length === 0) {
        this.confirm = false
      }
    },
    toggleShow() {
      this.showForm = !this.showForm
    },
    toogleConfirm() {
      this.confirm = !this.confirm
    }
  },
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.dropdown {
  width: 400px;
  margin: 0 auto;
  box-shadow: 0px 0px 8px rgba(0, 123, 195, 0.32);
}
.selected-city {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px auto;
  
  height: 40px;
  border-radius: 5px;
  margin: 5px;
  background-color: rgba(199, 121, 69, 0.32);
}

.title {
  background-color: bisque;
  border-radius: 12px;
  height: 15px;
  width:100%;
  margin-bottom: 15px;
  
}

.title input {
width: 100%;
padding:6px 0px;
border: 1px solid  rgba(199, 121, 69, 0.32);
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
  overflow-y: scroll;
  
  border-radius: 12px;
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

.control-button {
  text-align: left;
  margin-top: 5px;
}

.control-button button {
  padding: 4px 6px;
  border-radius: 5px;
  background-color: bisque;
  border: 1px solid rgb(180, 158, 158)
}
</style>
