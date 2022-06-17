<template>
  <div class="home">
    <div>
      <div>
        <h4>Bar Chart</h4>
        <bar-chart :data="data"></bar-chart>
      </div>
      <div>
        <h4>Line Chart</h4>
        <line-chart :data="data"></line-chart>
      </div>
      <div>
        <h4>Pie Chart</h4>
        <pie-chart :data="data"></pie-chart>
      </div>
      <div>
        <h4>Area Chart</h4>
        <area-chart :data="data"></area-chart>
      </div>
      <div>
        <h4>Column Chart</h4>
        <column-chart :data="data"></column-chart>
      </div>
      <div>
        <h4>Scatter Chart</h4>
        <scatter-chart :data="data"></scatter-chart>
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
      // chartData:[],
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

  methods: {
    getValues() {
      const values = this.chartData.map((item) => ({
        [item.date]: item.total,
      }));
      var newObj = Object.assign({}, ...values);

      this.data = newObj;
    },
  },
  created() {},
  mounted() {
    this.getValues();
  },
};
</script>

