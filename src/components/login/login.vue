<template>
  <div class="hello">
    <h1>{{ name }}</h1>
    <h2>hello</h2>
    用户名：<input v-focus type="text" v-model="userName" >
    密码：<input v-focus type="text" v-model="age" >
    <br />
    <button @click="logUser">登入</button>
    <button @click="addUser">添加</button>
    <button @click="deleteUser">删除</button>
    <button @click="upUser">更新</button>
    <button @click="getUser">查询所有</button>
     <br />
   <router-link to="/">返回首页</router-link>

   <table border="2">
      <tr v-for="(val,i) in user" :key="i">
        <td>{{i+1}}</td>
        <td>{{val.userName}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import "./login.css";
import util from "../../http.utils.js"

export default {
  name: "login",
  data() {
    return {
      name: "login",
      userName: "",
      age: "",
      user: []
    };
  },
  methods: {
    getUser() {
      var _this = this;
      // util._httpData(this,"user/getUser",{}).then = function(){
      //   if(this.state){
      //      _this.user = this.datas
      //   }
      // }
      util._httpPost(this,"user/getUser",{}).then(function(_d){
          _this.user = _d.data
      })
    },
    logUser() {
      var name = this.userName;
      var age = this.age;
      this.$http
        .post(
          process.env.API_HOST + "user/logUser",
          {
            username: name,
            age: age
          },
          {}
        )
        .then(response => {
          console.log(response);
        });
    },
    addUser() {
      var name = this.userName;
      var age = this.age;
      this.$http
        .post(
          process.env.API_HOST + "user/addUser",
          {
            username: name,
            age: age
          },
          {}
        )
        .then(response => {
          console.log(response);
          this.getUser();
        });
    },
    deleteUser() {
      var name = this.userName;
      this.$http
        .post(
          process.env.API_HOST + "user/deleteUser",
          {
            username: name
          },
          {}
        )
        .then(response => {
          console.log(response);
          this.getUser();
        });
    },
    upUser() {
      var name = this.userName;
      var age = this.age;
      this.$http
        .post(
          process.env.API_HOST + "user/upUser",
          {
            username: name,
            age: age
          },
          {}
        )
        .then(response => {
          console.log(response);
          this.getUser();
        });
    }
  }
};
</script>
