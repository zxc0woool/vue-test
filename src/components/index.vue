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
        <blog></blog>
        <home></home>
        <button @click="addImg">添加图片</button>
        <button @click="deleteImg">删除图片</button>
      </li>
    </ul>
    <input v-focus type="text" v-model="msg" >
    {{fold}}
      <ul>
      <li>
        <img width="100" height="100" src="../../static/img/04.jpg" />
        <img v-for="(img,i) in dataImg" :key="img.id" width="100" height="100" :src="img.usr" @click="dataImg.splice(i,1)" />
          
      </li>
    </ul>
  </div>

</template>

<script>
import "./index.css";
export default {
  name: "index",
  data() {
    return {
      msg: "index",
      dataImg:[],
      fold: false
    };
  },
  methods: {
    add: function() {
      this.msg = this.msg + " OP";

      this.fold = !this.fold;
    },
    addImg:function(){
      var img = [
        {id:1,name:'001',usr:'../../static/img/01.jpg'},
        {id:2,name:'002',usr:'../../static/img/02.png'},
        {id:3,name:'003',usr:'../../static/img/03.gif'},
        {id:4,name:'004',usr:'../../static/img/04.jpg'},
        {id:5,name:'005',usr:'http://p0.ifengimg.com/pmop/2018/0816/E86973D3CADD00498E68C9C3A6A7B579CCB64D96_size86_w570_h320.jpeg'},
        {id:6,name:'006',usr:'../../static/img/06.jpg'}
      ]
      this.dataImg = img;

    },
    deleteImg:function(){
    
      this.dataImg = [];

    }
  }
};
</script>
