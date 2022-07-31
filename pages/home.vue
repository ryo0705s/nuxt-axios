<template>
  <div>
    <h1>寄付管理アプリ</h1>
    <h2>寄付情報</h2>
    <ul class="title">
      <li>
        寄付先<input v-model="state.donateFor" /><button @click="search">
          寄付先を探す
        </button>
      </li>
      <li>
        金額<input v-model="state.donation" /><button @click="add">寄付</button>
      </li>
      <li>予定日</li>
      <li>実施日</li>
      <li>ステータス</li>
    </ul>
    <div class="sideList">
      <ul>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
      </ul>
      <ul>
        <li v-for="(price, index) in state.prices" :key="index">
          {{ price }}
          <button @click="edit(index)">編集</button>
          <span v-if="state.editIndex === index && state.edited"
            ><input v-model="state.editDonation" /><button
              @click="finish(index)"
            >
              完了
            </button></span
          >
          <span else></span>
          <button @click="remove(index)">削除</button>
        </li>
      </ul>
      <ul>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
      </ul>
      <ul>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
      </ul>
      <ul>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
      </ul>
    </div>
  </div>
</template>
<script>
import { reactive } from "@nuxtjs/composition-api";
export default {
  setup() {
    const state = reactive({
      prices: [],
      donation: "",
      edited: false,
      editDonation: "",
      editIndex: "",
    });
    const add = () => {
      state.prices.push(state.donation);
      state.donation = "";
    };
    const edit = (index) => {
      state.editDonation = state.prices[index];
      state.editIndex = index;
      state.edited = true;
    };
    const finish = (index) => {
      state.prices.splice(index, 1, state.editDonation);
      state.edited = false;
    };
    const remove = (index) => {
      state.prices.splice(index, 1);
    };
    const search = () => {};
    return {
      state,
      add,
      edit,
      finish,
      remove,
    };
  },
};
</script>
<style>
.title {
  display: flex;
  justify-content: space-between;
}
li {
  list-style: none;
}
.sideList {
  display: flex;
  justify-content: space-between;
}
</style>
