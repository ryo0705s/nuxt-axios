<template>
  <el-form :inline="true" :model="form" class="demo-form-inline">
    <el-form-item label="ID検索">
      <el-input v-model="form.id" placeholder="IDを入力してください"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="searchData(Path.RESULT)"
        >検索</el-button
      >
    </el-form-item>
  </el-form>
</template>
<script>
import Vue from "vue";
import { Path } from "~/constants";

export default Vue.extend({
  data() {
    return {
      form: {
        id: "",
      },
      Path: Path,
    };
  },
  methods: {
    searchData(path) {
      this.$router.push({ path, query: { id: this.form.id } });
    },
  },
});
</script>
