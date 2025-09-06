<template>
  <div>
    <h2>{{ title }}</h2>
    <p>{{ desc }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "组件化开发",
      desc: "组件化开发是Vue.js的核心概念之一。通过将UI拆分为独立的、可复用的组件，可以提高代码的可维护性和复用性。",
    };
  },
  methods: {
    btnClick() {
      console.log("按钮被点击了");
    },
  },
};
</script>
<style scoped></style>
