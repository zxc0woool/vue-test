<template>
  <div class="index">
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <a href="javaScript:;" @click="add">
          add
        </a>
      </li>
      <li>
      <button @click="add">add</button>
      </li>
    </ul>
     <ul>
      <li>
        <router-link to="/login">login跳转</router-link>
        <!-- <el-menu-item index="login"></el-menu-item> -->
        <child v-bind:name="msg"></child>
      </li>
    </ul>
    <input v-focus type="text" v-model="msg" >
    {{fold}}
  </div>

</template>

<script>
import "./index.css";
export default {
  name: "index",
  data() {
    return {
      msg: "index",
      fold: false
    };
  },
  methods: {
    add: function() {
      this.msg = this.msg + " OP";

      this.fold = !this.fold;
    }
  }
};
</script>
