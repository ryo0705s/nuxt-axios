<template>
  <div class="container">
    <h1>寄付アプリケーション</h1>
    <template>
      <el-table :data="tableDonateforData" style="width: 100%">
        <el-table-column prop="id" label="ID" width="180"></el-table-column>
        <el-table-column prop="name" label="Name" width="180"></el-table-column>
        <el-table-column prop="intro" label="Intro"></el-table-column>
      </el-table>
    </template>
  </div>
  <!-- <Tutorial/> -->
</template>

<script>
import Vue from "vue";
import donateForApi from "~/api/index";

export default Vue.extend({
  data() {
    return {
      tableDonateForData: [],
    };
  },
  methods: {
    async getDonateForData() {
      const res = await donateForApi.getDonateForData();
      this.tableDonateForData = res.data;
    },
  },
  mounted() {
    this.getDonateForData();
  },
});
// export default {
//   name: 'IndexPage'
// }
</script>
<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
