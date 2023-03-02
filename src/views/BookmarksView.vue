<template>

<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="@/assets/images/intro.jpg" class="d-block w-100 " alt="..." height="500">
            <div class="carousel-caption">
              <p class="mt-4" style="margin-right: 70px; font-size: x-large;">Welcome to Heroic recipes!</p>
              <p class="mb-4"  >SocialChef is the ultimate cooking social community, where recipes come to life.</p>
              <p class="mb-4"  >Discover new recipes and cooking techniques with our extensive collection of culinary creations .</p>
              <p class="mb-4" >perfect for any home chef looking to expand their repertoire.</p>
              <button class="btn btn-light mb-4" style="margin-right: 50px;">Join our community</button>  
      
              <div class="d-flex flex-column justify-content-center align-items-center">
                <form class="d-flex mb-4" @submit.prevent="searchrecipe">
                  <input type="text" class="form-control me-3" style="width: 230px;" placeholder="Search recipe" v-model="searchinput">
                  <button class="btn btn-primary btn-sm" type="submit">Find </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">

<div class="row mt-5">     
    <h3 class="align-center">My bookmarks</h3>
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
import axios from 'axios'

export default{

    data(){
        return{
            results:[],
            searchinput:'',
        }
    },

    created(){

      let tok = localStorage.getItem('tok');
      
        // console.log(tok);

        if(!tok){
          alert("please login")
          this.$router.push('/')
        }
        else{
          let id = localStorage.getItem('id');
          this.loadbooks({user_id:id});

        }

    },

    methods:{

        async loadbooks(id){
            const bokmak =await axios.post('http://127.0.0.1:8000/api/Recipe/boookmarks',id);
            const response= bokmak.data.data
            this.results=response;
            // console.log(response)
        },
         
        async searchrecipe(){
          const data={food: this.searchinput};
          
            const searchresults = await axios.post('http://127.0.0.1:8000/api/Recipe/searchfood' ,data);
            const response = searchresults.data.data;

            this.results.splice(0, this.results.length);
            this.results=response;

            console.log(response)

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