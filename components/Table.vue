<template>
  <el-table :data="getTableData" style="width: 100%">
    <el-table-column prop="id" label="ID" width="180"></el-table-column>
    <el-table-column prop="name" label="Name" width="180"></el-table-column>
    <el-table-column prop="intro" label="Intro"></el-table-column>
  </el-table>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    getTableData: {
      type: Array,
      default: () => {},
    },
  },
  data() {
    return {};
  },
});
</script>
