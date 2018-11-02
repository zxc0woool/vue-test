<template>
  <div class="index">
    <h1>{{ msg }}</h1>
    <ul>
      <li>
         <div>
      
        </div>
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
      <ul>
      <li>

          图片上传
      <input @change="update" type="file" accept="image/jpeg,image/x-png,image/gif" id="" value="" />

      </li>
    </ul>
  </div>

</template>

<script>
import "./index.css";
import axios from "axios";
import $ from 'jquery'
export default {
  name: "index",
  data() {
    return {
      msg: "index",
      dataImg: [],
      fold: false,
      imgUrlFromServer: "#",
      base64: ""
    };
  },
  methods: {
    add: function() {
      this.msg = this.msg + " OP";

      this.fold = !this.fold;
    },
    addImg: function() {
      var img = [
        { id: 1, name: "001", usr: "../../static/img/01.jpg" },
        { id: 2, name: "002", usr: "../../static/img/02.png" },
        { id: 3, name: "003", usr: "../../static/img/03.gif" },
        { id: 4, name: "004", usr: "../../static/img/04.jpg" },
        {
          id: 5,
          name: "005",
          usr:
            "http://p0.ifengimg.com/pmop/2018/0816/E86973D3CADD00498E68C9C3A6A7B579CCB64D96_size86_w570_h320.jpeg"
        },
        { id: 6, name: "006", usr: "../../static/img/06.jpg" }
      ];
      this.dataImg = img;
    },
    deleteImg: function() {
      this.dataImg = [];
    },
    chooseImg(event) {
      let file = event.target.files[0];
      let reader = new FileReader();

      let data = new FormData();
      data.append("multfile", this.$refs.avatarInput.files[0]);
      data.append("operaType", this.uploadType);

      let img = new Image();
      // 读取图片
      reader.readAsDataURL(file);
      // 读取完毕后的操作
      reader.onloadend = e => {
        img.src = e.target.result;
        //这里的e.target就是reader
        console.log(reader.result);
        //reader.result就是图片的base64字符串
        this.base64 = reader.result;
      };
      // 预览图片
      let canvas = this.$refs["imgPreview"];
      let context = canvas.getContext("2d");
      img.onload = () => {
        img.width = 100;
        img.height = 100;
        // 设置canvas大小
        canvas.width = 100;
        canvas.height = 100;
        // 清空canvas
        context.clearRect(0, 0, 100, 100);
        // 画图
        context.drawImage(img, 0, 0, 100, 100);
      };
    },
     update(e){
          let file = e.target.files[0];           
          let param = new FormData(); //创建form对象
          param.append('file',file,file.name);//通过append向form对象添加数据
          param.append('chunk','0');//添加form表单中其他数据
          console.log(param.get('file')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
          let config = {
            headers:{'Content-Type':'multipart/form-data'}
          };  //添加请求头
          axios.post('http://127.0.0.1:3001/fileupload',param,config)
          .then(response=>{
            console.log(response);
          })        
}
  }
};
</script>
