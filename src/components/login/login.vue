<template>
  <div class="hello">
    <h1>{{ name }}</h1>
    <h2>hello</h2>
    用户名：<input v-focus type="text" v-model="userName" >
    密码：<input v-focus type="text" v-model="age" >
    <button @click="addUser">登入</button>

   <router-link to="/">返回首页</router-link>
  </div>
</template>

<script>
import "./login.css";

export default {
  name: "login",
  data() {
    return {
      name: "login",
      userName:'',
      age:''
    };
  },
  methods: {
    addUser() {
      var name = this.userName;

      var age = this.age;
      this.$http
        .post(process.env.API_HOST + "user/user",
          {
            username: name,
            age: age
          },
          {}
        )
        .then(response => {
          console.log(response);
        });
    }
  }
};
</script>
