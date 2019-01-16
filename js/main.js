
// let ActiveUserComponent = {
// 		props: ['name'],
//         template: "activeuser"
//     }
const liveuser = {
	props: ['name', 'role', 'message'],
	template: "#activeuser",
	name: 'user',
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
			this.name = this.name.split().pop();
		}
	},
	components : {
            user : liveuser
        }
});