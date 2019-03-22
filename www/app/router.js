import VueRouter from "vue-router";
import index from "./components/index.vue";
import carlist from  "./components/carlist/index.vue";
import users from "./components/users/index.vue";
import coolfrom from "./components/coolfrom/index.vue";

export default new VueRouter({
    routes:[
        {path:"/", name:"首页", component:index },
        {path:"/carlist", name:"汽车列表", component:carlist },
        {path:"/users", name:"用户中心", component:users },
        {path:"/coolfrom", name:"酷表单", component:coolfrom },
        {path:"*", redirect:"/"}
    ]
})