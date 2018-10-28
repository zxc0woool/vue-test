<template>
  <div class="hello">
    <h1>{{ name }}</h1>
    <h2>hello</h2>
   <router-link to="/">首页</router-link>
  </div>
</template>

<script>

import './login.css'
export default {
    name: "login",
    data() {
      return {
        name: "login"
      };
    }
  };
</script>
