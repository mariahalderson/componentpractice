
const homePage = {
	template: "<h1>Welcome to the home page</h1>"
}

const usersPage = {
	template: "<h1>Welcome to the users page</h1>"
}

const routes = [
	{path: '/', name: 'home', component: homePage},
	{path: '/users', name: 'users', component: usersPage}
]

const router = new VueRouter({
	routes
});

const liveuser = {
	props: ['name', 'role', 'message'],
	template: "#activeuser",
	name: 'user',
	created: function(){
		console.log("created");
	},
	methods:{
		runParentFunc(){
			this.$emit('passfunccallup', 'wow you did it');
		}
	}
}

const vm = new Vue({
	el: '#app',
	data:{
		name: "mariah",
		role: "developer",
		message: ""
	},
	methods:{
		logParent(name){
			console.log(name);
		},
		logMainMessage(message){
			console.log(message);
		}
	},
	components : {
            user : liveuser,
            'homePage' : homePage,
            'usersPage' : usersPage
        },
    router: router
});