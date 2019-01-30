export default{
  template: `
    <div id="login">
      <h1>LOGIN PAGE</h1>
      <input type="text" name="username" v-model="input.username" placeholder="username">
      <input type="password" name="password" v-model="input.password" placeholder="password">
      <button type="button" v-on:click="login()">LOG IN</button>
    </div>
  `,

  data(){
    return{
      input:{username:'', password:''}
    }
  },

  methods:{
    login(){
      console.log("trying to log in");
      if(this.input.username != '' && this.input.password != ''){
        console.log("you typed shit hooray")
        if(this.input.username === this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password){
          console.log("wow its a match");
          this.$emit("authenticated", true);
          this.$router.replace({name:'users'});
        }
      }
    }
  }
}
