
import Home from './Home'
import Blog from './Blog'

const obj = {
    install:function(val){
        val.component('home',Home)
        val.component('blog',Blog)
    }
}


export default obj;
