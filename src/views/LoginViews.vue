<template>

    <div class="container mt-5 border mb-5">
        <h2 class="text-center">Login</h2>
        <div class="row">
            <div class="col-md-6 offset-md-3"> 

        <form @submit.prevent="authuser">
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
        </div>
     
        <button type="submit" class="btn btn-primary" style="width: 250px; margin-left: 20%;  margin-bottom: 5px;">Login</button> 
        <RouterLink to="/register" style="margin-left: 30%;  margin-bottom: 50px;">create an account?</RouterLink>
        </form>

        </div>
   </div>
</div>
<RouterView />
</template>

<script>

import axios from 'axios';

export default{

    data(){
        return{
            email:'',
            password:''
        }
    },

    methods:{
       async authuser(){
        console.log(this.$data)

        const details={email: this.email, password: this.password}

            const auth = await axios.post("http://127.0.0.1:8000/api/Recipe/login", details);
            const response=auth.data;

            let token = response.token;
            let userid= response.user.id;
            let name = response.user.name;
            let email =response.user.email;
            let level = response.user.level;

            if(!token)
            {
                console.log("token is null")
                alert("check your email and password")
            }
            else{ 

                localStorage.setItem('id',userid);
                localStorage.setItem('name', name);
                localStorage.setItem('tok',token);
                localStorage.setItem('email',email);
                localStorage.setItem('level',level);
                this.$router.push("/")

                console.log(email);
                console.log(level)

            }
            
        }
    }



}
</script>

<style scoped>

</style>