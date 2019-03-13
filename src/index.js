//导入vue
import Vue from 'vue';

//导入路由 router
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import home from './tarbar/home.vue';
import membae from './tarbar/membae.vue';
import cat from './tarbar/cat.vue';
import search from './tarbar/search.vue';
import { Field } from 'mint-ui';

Vue.component(Field.name, Field);
//焦点图
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

var router=new VueRouter({
	routes:[
		{path:'/',redirect:"/home"},
		{path:'/home',component:home},
		{path:'/membae',component:membae},
		{path:'/cat',component:cat},
		{path:'/search',component:search},
	],
	linkActiveClass:"mui-active"
})

//导入APP组件
import app from './App.vue';
//导入mint-ui
import './mul/css/mui.css';
import './mul/js/mui.min.js';
import './mul/css/icons-extra.css';
import { Header } from 'mint-ui';

Vue.component(Header.name, Header);


var vm=new Vue({
	el:'#app',
	render:c=>c(app), //将APP组件挂载至vm中
	//挂载路由
	router:router,
})
// export default router;