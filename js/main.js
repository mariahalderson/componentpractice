
// let ActiveUserComponent = {
// 		props: ['name'],
//         template: "activeuser"
//     }
const liveuser = {
	props: ['name'],
	template: "#activeuser",
	name: 'user',
}

const vm = new Vue({
	el: '#app',
	data:{
		name: "mariah"
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