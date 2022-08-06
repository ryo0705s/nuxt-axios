<template>
  <div class="container">
    <h1>寄付アプリケーション</h1>
    <SearchForm />
    <Table v-bind:getTableData="tableDonateForData"/>
  </div>
</template>
<script>
import Vue from "vue"
import DonateForApi from "~/api/index"

export default Vue.extend({
  data(){
    return{
      tableDonateForData:[]
    }
  },
  methods(){
    this.getIdDonateForData()
  },
  watch:{
    '$root'(to,from){
      this.getIdDonateForData()
    }
  }
})
</script>
<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}