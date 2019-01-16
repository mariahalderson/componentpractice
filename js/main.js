
// let ActiveUserComponent = {
// 		props: ['name'],
//         template: "activeuser"
//     }
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
            user : liveuser
        }
});