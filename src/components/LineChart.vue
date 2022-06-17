<template>
  <div class="home">
  
    <div>
      <div>
        <h4>Bar Chart</h4>
        <bar-chart :data="chartData.map(i => [i.date, i.total])"></bar-chart>
      </div>
      <div>
        <h4>Line Chart</h4>
        <line-chart :data="chartData.map(i => [i.date, i.total])"></line-chart>
      </div>
      <div>
        <h4>Pie Chart</h4>
        <pie-chart :data="chartData.map(i => [i.date, i.total])"></pie-chart>
      </div>
      <div>
        <h4>Area Chart</h4>
        <area-chart :data="chartData.map(i => [i.date, i.total])"></area-chart>
      </div>
      <div>
        <h4>Column Chart</h4>
        <column-chart :data="chartData.map(i => [i.date, i.total])"></column-chart>
      </div>
      <div>
        <h4>Scatter Chart</h4>
        <scatter-chart :data="chartData.map(i => [i.date, i.total])"></scatter-chart>
      </div>
    </div>
  </div>
</template>


<script>
import { mapState } from "vuex";

export default {
  props: {
    chartData: {
      type: Array,
    },
  },

  data() {
    return {
       data: {},
    };
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

  methods: {},
  created() {},
  mounted() {},

};
</script>

