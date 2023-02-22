<template style="background-color: #FF9999;">
    
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="@/assets/images/intro.jpg" class="d-block w-100" alt="..." height="450">
            <div class="carousel-caption">
              <p class="mt-4" style="margin-right: 70px; font-size: x-large;">Welcome to Heroic recipes!</p>
              <p class="mb-4"  >SocialChef is the ultimate cooking social community, where recipes come to life.</p>
              <p class="mb-4"  >Discover new recipes and cooking techniques with our extensive collection of culinary creations .</p>
              <p class="mb-4" >perfect for any home chef looking to expand their repertoire.</p>
              <RouterLink to="/login" class="btn btn-light mb-4" style="margin-right: 50px;" v-if="authstatus">Join our community</RouterLink>  
      
              <div class="d-flex flex-column justify-content-center align-items-center">
                <form class="d-flex mb-4" @submit.prevent="searchrecipe">
                  <input type="text" class="form-control me-3" style="width: 230px;" placeholder="Search recipe" v-model="searchinput">
                  <button class="btn btn-primary btn-sm" type="submit" @click="searching==false">Find </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>


<div class="container" style="margin-top: 50px;">

  <div class="row" v-if="searching">
    <div class="col-md-7 mb-3">
      <div class="card">
        <h5 class="card-header">Recipe of the day</h5>
        <div class="card-body">
          <img src="@/assets/images/img2.jpg" class="card-img-top img-fluid" alt="..." style="max-width:100%">
          <h5 class="card-title" style="color:orange;font-size:1.2em;">Honey cake</h5>
          <p class="card-text" style="font-size:0.9em;">
            Whether you're looking for a dessert for a special occasion or just a sweet treat to enjoy with your afternoon tea, honey cake is the perfect choice
        </p>
          <a href="#" class="btn btn-warning btn-sm">See full recipe</a>
        </div>
      </div>
    </div>


    <div class="col-md-4 mb-3">
      <div class="card">
        <h5 class="card-header">Tips and tricks</h5>
        <div class="card-body">

        <div class="row border mb-2 ">
          <div class="col-5"> 
            <img src="@/assets/images/img12.jpg" class="card-img-top img-fluid" alt="..." style="max-width:100%;">
          </div>
          <div class="col-7"> <br>
            <h6><a href="#" style="font-size:1.0em;">Barbeque party</a></h6>
          </div>
        </div>

        <div class="row border mb-2">
          <div class="col-5">
            <img src="@/assets/images/img12.jpg" class="card-img-top img-fluid" alt="..." style="max-width:100%;">
          </div>
          <div class="col-7"> <br>
            <h6><a href="#" style="font-size:1.0em;">How to make sushi</a></h6>
          </div>
        </div>

        <div class="row border mb-2">
          <div class="col-5"> 
            <img src="@/assets/images/img10.jpg" class="card-img-top img-fluid" alt="..." style="max-width:100%;">
          </div>
          <div class="col-7"> <br>
            <h6><a href="#" style="font-size:1.0em;">Make your own bread</a></h6>
          </div>
        </div>

        <div class="row border mb-2">
          <div class="col-5"> 
            <img src="@/assets/images/img9.jpg" class="card-img-top img-fluid" alt="..." style="max-width:100%;">
          </div>
          <div class="col-7"> <br> 
            <h6><a href="#" style="font-size:1.0em;">How to decorate cookies</a></h6>
          </div>
        </div>

        <div class="row border mb-2">
          <div class="col-5"> 
            <img src="@/assets/images/img8.jpg" class="card-img-top img-fluid" alt="..." style="max-width:100%;">
          </div>
          <div class="col-7"> <br>
            <h6><a href="#" style="font-size:1.0em;">How to make a cheesecake</a></h6>
          </div>
        </div>
        
        </div>
    </div>
  </div>
</div>


<div class="row"  style="margin-top: 50px;" > 
   <div class="col-4 mb-3" v-if="searching"> 
        <div class="dropdown open">
                <a class="btn btn-secondary dropdown-toggle" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    category
                    </a>
                <div class="dropdown-menu" aria-labelledby="triggerId">
                  <span class="dropdown-item" @click="category('1')" >All</span>
                  <span class="dropdown-item" @click="category('2')">fast food</span>
                  <span class="dropdown-item" @click="category('1')">Drinks</span>

                </div>
              </div>
    </div>

    <div class="col-3 mb-3"> 
      <h3 class="mb-3">{{ categoryname }}</h3>
   </div>
</div>


<div class="row"> 
               
     <div class="col-sm-6 col-md-4 col-lg-3 mb-3 " v-for="resul, index in results" :key="index">
         <div class="card bg-light" @mouseover="resul.hovered=true" @mouseleave= "resul.hovered=false">
            <router-link :to="{path: `/details/${resul.foodid}`}">
                <img :src="resul.image" alt="..." class="img-fluid rounded"  style="margin-left: 5px; margin-top: 4px; margin-right: auto; width: 250px; height: 200px; ">

            <div class="card-body">
            <h6 class="card-title">{{ resul.name }}</h6>
            <button class="btn btn-primary btn-sm" v-show="resul.hovered">view details</button>
            </div>
            </router-link>
         </div>
        </div>
 
 </div>
</div>

</template>

<script>
import axios from 'axios';

export default {
    data() {
        return{
            results:[],
            categoryname:'',
            searching: true,
            searchinput:'',
            authstatus:true
        }
    },

    created() {

    let tok = localStorage.getItem('tok');

    if(tok){
        this.authstatus=false;
    }


        let id=1
        this.loadtasks(id);
        this.categoryname="latest recipes"

    },


    methods: {
        async searchrecipe(){
            let link="http://127.0.0.1:8000/api/Recipe/searchfood?food="+this.searchinput;
            const response = await axios.post(link);
            const recipe =response.data.data;
            this.searching=false;

            this.results.splice(0, this.results.length)
              this.results = recipe;
            this.categoryname="search results"


            console.log(recipe);
         },

       category(cat) {
            this.results.splice(0, this.results.length)
            this.loadtasks(cat);

            if(cat==='1'){
            this.categoryname="latest recipes"
            }
            if(cat==='2'){
                this.categoryname="fast foods"
            }
       },

        async loadtasks(id) {
            var link="http://127.0.0.1:8000/api/Recipe/allrecipes?category="+ id;
            const response = await axios.post(link);
            const recipe = response.data.data;
            this.results = recipe;
            // console.log(skill);
        }

}

}

</script>

<style scoped>

  a{
    color: black;
    text-decoration: none;
      }

  .carousel-caption, p{
  color: black;
    font-weight: bolder;
   }

  .carousel-caption, p{
    color: black;
    font-weight: lighter;

  }    
</style>