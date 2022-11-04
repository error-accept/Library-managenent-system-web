import {createWebHashHistory} from "vue-router";
import {createRouter} from "vue-router";
import Login from "../view/my-login.vue"
import  Home from "../view/home-view"
const routes= [
        {
        path:"/login",
        name:"login",
        component:Login
        },{
        path:"/",
        name:"home",
        component:Home
    },
    {
        path:"/about",
        name:"about",
        component:()=>import("../view/about-us")
    }, {
        path:"/index",
        name:"index-view",
        component:()=>import("../view/index-view"),
        children:[
            {
                path:"/book/back",
                name:"book-back",
                component:()=>import("../view/book-back")
            }, {
                path:"/book/borrow",
                name:"book-borrow",
                component:()=>import("../view/book-borrow")
            }, {
                path:"/book/info",
                name:"book-info",
                component:()=>import("../view/book-info")
            }, {
                path:"/book/renew",
                name:"book-renew",
                component:()=>import("../view/book-renew")
            },{
                path:"/book/shelf",
                name:"book-shelf",
                component:()=>import("../view/book-shelf")
            },{
                path:"/book/type",
                name:"book-type",
                component:()=>import("../view/book-type")
            },{
                path:"/changeSystem",
                name:"change-system",
                component:()=>import("../view/change-system")
            },{
                path:"/my/admin",
                name:"my-admin",
                component:()=>import("../view/my-admin")
            },{
                path:"/person/seeting",
                name:"person-seeting",
                component:()=>import("../view/person-setting")
            },{
                path:"/reader/type",
                name:"reader-type",
                component:()=>import("../view/reader-type")
            },{
                path:"/reader/info",
                name:"reader-info",
                component:()=>import("../view/reader-info")
            },{
                path:"/query/book",
                name:"query-book",
                component:()=>import("../view/query-book")
            },{
                path:"/query/borrow",
                name:"query-borrow",
                component:()=>import("../view/query-borrow")
            },
        ]
    },
    ]
const  Router=createRouter({
    history:createWebHashHistory(),
    routes
})
Router.beforeEach((to,from,next) =>{
    //验证token,只有存在token的时候，才能跳转到内容页
    console.log(to);
    console.log(from);
    let token = localStorage.getItem("token");
    //console.log(token);
    if(token || to.path === '/login'||to.path === '/'||  to.path === '/about'){
        next();
        console.log(token);
    }else{
        next("/login");
    }
})


export default Router

