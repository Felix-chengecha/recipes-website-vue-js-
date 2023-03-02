<template>

<div class="container border mt-3">
<h5 class="text-center">Register account</h5>
  <div class="row">
    <div class="col-md-6 offset-md-3">

        <form class="row g-3 needs-validation" @submit.prevent="reguser">
          <div class="col-md-12">
            <label for="validationCustom01" class="form-label">Username</label>
            <input type="text" class="form-control" id="validationCustom01" required v-model="username">
            <div class="valid-feedback">
              Looks good!
            </div>
          </div> <br>
        
          <div class="col-md-12">
            <label for="validationCustomUsername" class="form-label">Email</label>
            <div class="input-group">
              <input type="email" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required v-model="email">
              <div class="invalid-feedback">
                Please enter your email address.
              </div>
            </div>
          </div> <br>

          <div class="col-md-6">
            <label for="validationCustom04" class="form-label">Level</label>
            <select class="form-select" id="validationCustom04" required v-model="level" >
              <option selected disabled value="">Choose</option>
              <option >Beginner</option>
              <option>+1year</option>
              <option>master</option>

            </select>
            <div class="invalid-feedback">
              Please select a valid state.
            </div>
          </div>


          <div class="col-md-12">
            <label for="validationCustom03" class="form-label">password</label>
            <input type="password" class="form-control" id="validationCustom03" required v-model="password">
            <div class="invalid-feedback">
              Please provide a valid password.
            </div>
          </div> <br>

    
        
          <div class="col-12">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
              <label class="form-check-label" for="invalidCheck">
                Agree to terms and conditions
              </label>
              <div class="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
          <div class="col-12">
            <button class="btn btn-primary" type="submit">Register</button>
          </div>
        </form>

    </div>
  </div>

</div>

</template>

<script>
import axios from 'axios';
export default{

    data(){
        return{
            username:'',
            email:'',
            password:'',
            level:''

        }
    },
    methods:{
      async  reguser(){
        const data = {name: this.username, email: this.email, level: this.level, password: this.password }
            const reg= await axios.post("http://127.0.0.1:8000/api/Recipe/register", data)
            let response= reg.data;
            let token=response.token;

            let userid= response.user.id;
            let name = response.user.name;
            let email =response.user.email;
            let level = response.user.level;
            if(!token){
                alert('an error occured please try again!')
            }
            else{
                localStorage.setItem('id',userid);
                localStorage.setItem('name', name);
                localStorage.setItem('tok',token);
                localStorage.setItem('email',email);
                localStorage.setItem('level',level);
                this.$router.push("/")

            }
            console.log(response);



        }

    }


}
</script>

<style scoped>


</style>