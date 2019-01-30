import Login from './components/Login.js';
import Users from './components/Users.js';

const routes = [
	{path: '/', redirect: {name: 'login'} },
	{path: '/login', name: 'login', component: Login},
	{path: '/users', name: 'users', component: Users},
]

const router = new VueRouter({
	routes
});


const vm = new Vue({
	data:{
		name: "mariah",
		role: "developer",
		message: "",
		authenticated: false,
		mockAccount: {username:'user1', password:'password'}
	},
	methods:{
		logParent(name){
			console.log(name);
		},
		logMainMessage(message){
			console.log(message);
		},
		setAuth(status){
			this.authenticated=status;
		},
		logout(){
			this.authenticated=false;
		}
	},
    router: router
}).$mount("#app");


router.beforeEach((to, from, next)=>{
	console.log("router guard fired!");

	if(vm.authenticated == false){
		next("/login");
	}else{
		next();
	}
});
