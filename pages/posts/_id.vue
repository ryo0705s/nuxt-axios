<template>
  <div>
    <h1>記事個別ページ{{ post.id }}</h1>
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  async asyncData(context) {
    const posts = await context.$axios.get(
      "https://jsonplaceholder.typicode.com/posts/ + context.params.id"
    );
    return { posts };
  },
  // async asyncData({ params }) {
  //   const { data } = await axios.get(
  //     "https://jsonplaceholder.typicode.com/posts/ + context.params.id"
  //   );
  //   return { post: data };
  // },
  // async asyncData(context) {
  //   const response = await axios.get(
  //     "https://jsonplaceholder.typicode.com/posts/ + context.params.id"
  //   );
  //   return { post: response.data };
  // },
  // asyncData() {
  //   return axios
  //     .get("https://jsonplaceholder.typicode.com/posts/")
  //     .then((response) => {
  //       return {
  //         posts: response.data,
  //       };
  //     });
  // },
  // head() {
  //   return {
  //     title: this.post.title,
  //   };
  // },
  // data() {
  //   return {
  //     post: {},
  //   };
  // },
  // mounted() {
  //   axios
  //     .get(
  //       "https://jsonplaceholder.typicode.com/posts/" + this.$route.params.id
  //     )
  //     .then((response) => (this.post = response.data));
  // },
};
</script>
