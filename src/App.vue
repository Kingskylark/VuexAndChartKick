<template>
  <div class="container">
    <h1 class="text-center ">COVID 19 TRACKING WITH DIFFERENT CHART</h1>

    <div class="row">
      <div class="col-sm-6 col-md-3">
        <h2 class="text-info">Positive</h2>
        <div class="card">
          <div class="card-body">
            <div>
              <LineChart :chartData="arrPositive"></LineChart>
            </div>
          </div>
        </div>
      </div>

      <div class="col-sm-6 col-md-3">
        <h2 class="text-secondary">Hospitalized</h2>
        <div class="card">
          <div class="card-body">
            <div>
              <LineChart :chartData="arrHospitalized"></LineChart>
            </div>
          </div>
        </div>
      </div>

      <div class="col-sm-6 col-md-3">
        <h2 class="text-warning">In ICU</h2>
        <div class="card">
          <div class="card-body">
            <div>
              <LineChart :chartData="arrInICU"></LineChart>
            </div>
          </div>
        </div>
      </div>

      <div class="col-sm-6 col-md-3">
        <h2 class="text-warning">On Ventilators</h2>
        <div class="card">
          <div class="card-body">
            <div>
              <LineChart :chartData="arrOnVentilators"></LineChart>
            </div>
          </div>
        </div>
      </div>

      <div class="col-sm-6 col-md-3">
        <h2 class="text-danger">Death</h2>
        <div class="card">
          <div class="card-body">
            <div>
              <LineChart :chartData="arrDeath"></LineChart>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from "./components/LineChart";
import { mapState } from "vuex";

export default {
  components: {
    LineChart,
  },
  computed: {
    ...mapState([
      "arrPositive",
      "arrHospitalized",
      "arrInICU",
      "arrOnVentilators",
      "arrDeath",
    ]),
  },
  data() {
    return {};
  },

  mounted() {
    this.$store.dispatch("getAPI");
  },
};
</script>

<style >
</style>