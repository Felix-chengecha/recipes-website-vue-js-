<template>

<nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <div class="container-fluid">
    <RouterLink class="link" active-class="navbar-brand" to="/" > <h4>Heroic Recipes</h4> </RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <RouterLink class="link" active-class="active" to="/" >Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="link" active-class="active" to="/bookmarks" >bookmarks</RouterLink>
        </li>
   
        <li class="nav-item dropdown" >
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"  data-bs-toggle="dropdown"
                aria-expanded="false" style="font-weight:bold;color:wheat; padding: 10px; margin-top: -10px; margin-right: 10px;"> {{ account }} </a>
          <ul class="dropdown-menu " aria-labelledby="navbarDropdown">
            <li>  <RouterLink class="link1" to="/login" v-if="login">login</RouterLink> </li>
            <li>  <RouterLink class="link1" to="/login" v-if="authstatus">Profile</RouterLink> </li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="link2" @click="logout" v-if="authstatus">Logout</a></li> 
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

    <RouterView />

</template>

<script>

export default {
  name: 'App',


 data() {
    return{
      login:true,
      authstatus:false,
      account: 'login',
    }
  },

  created(){

    let tok = localStorage.getItem('tok');
    let name = localStorage.getItem('name');

    if(!tok){
      console.log('user not authenticated')
    }
    else{
      this.account =name;
      this.authstatus=true;
      this.login = false;
    }

  },

  methods:{

    logout(){
      alert("are you sure you want to log out")
      localStorage.clear();
      window.location.reload(true);
    }
   
  }

}
</script>

<style>
.link{
  font-weight: bold;
  color:wheat;
  text-decoration: none;
  /* padding: 10px; */
}

.link h4{
  font-weight: bold;
  color:wheat;
  text-decoration: none;
}

.link1{
  font-weight: bold;
  color:black;
  text-decoration: none;
  margin-left: -5px;
}
.link2{
  font-weight: bold;
  color:black;
  text-decoration: none;
}

a{
  font-weight: bold;
  color:wheat;
  text-decoration: none;
  padding: 10px;


}



</style>
