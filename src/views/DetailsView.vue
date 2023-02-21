<template style="background-color: #e6d9e9;">

<div class="container mt-3">
  <div class="row">
    <div class="col-12 col-md-7" v-for="details,index in detailsR" :key="index">
      <h1>{{ details.name }}</h1>
    </div>
  </div>

<div class="row mt-2">
  <div class="col-12 col-md-6 col-lg-5 mb-3">
    <div class="card">
      <div class="card-body" v-for="details,index in detailsR" :key="index">
        <img :src="details.image" class="card-img-top img-fluid" alt="...">
        <h5 class="card-title text-center" style="color:orange;font-size:1.2em;">{{ details.name }}</h5>

       
        <div class="row">  
           <div class="col-6">
            <p> <b> Category: </b> {{ details.category }}</p>
           </div>
           <div class="col-6">
            <p> <b>  Serves: </b> {{ details.people }} people</p>
          </div>
        </div>

        <div class="row">  
           <div class="col-6">
           <p> <b> Cooking time: </b> {{ details.time }}</p>
            </div>
           <div class="col-6">
           <p> <b> Level: </b> {{ details.level }}</p>
            </div>
        </div>

        <a href="#" class="btn btn-warning btn-sm"> <i class="bi bi-bookmarks"></i> Add to bookmarks</a>
      </div>
    </div>
  </div>

  <div class="col-12 col-md-12 col-lg-3 mb-3">
    <div class="card">
      <h6 class="card-header">Nutrition facts </h6>
      <div class="card-body border" v-for="nut, index in nutrients" :key=index style="background-color: #F4C2C2;">
        <ul>
          <li>{{ nut }}</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="col-12 col-md-6 col-lg-4 mb-3">
    <div class="card">
      <h6 class="card-header">Ingredients</h6>
      <div class="card-body border" v-for="ing,index in ingridients" :key="index" style="background-color:  #F4C2C2;" >
        <ul>
          <li>{{ ing }}</li>
        </ul>
      </div>
    </div>
  </div>

 </div>


 <div class="row mt-2 mb-5 border" >
    <div class="card" style="background-color: #e6d9e9;">
      <h5 class="card-header">Cooking process</h5>
      <div class="card-body border"  v-for="proc,index in processes" :key="index"  >
         <ul class="mb-3 list-unstyled">
            <li> {{ index + '. ' +proc }}</li>
         </ul>
      </div>
  </div>
</div>
</div>

</template>

<script>
import axios from 'axios';
export default {

    data(){
        return{
            detailsR: [],
            rname:'',
            ingridients:[],
            nutrients:[],
            processes:[]

        }
    },

    created(){
        let rid = this.$route.params.detailsid;
       this.loaddetails(rid);
    },

    methods:{
        async loaddetails(id){
            let res =[];
            let link="http://127.0.0.1:8000/api/Recipe/getingridients?meals_id="+id;
            const response=await axios.post(link);
             res=response.data.data;
            this.detailsR=res;

            let ingridient =[];
            let nutrient =[];
            let process=[];


            for(let item of res) {

                ingridient = item.ingridients;
                nutrient =item.nutrients
                process = item.process

                this.ingridients = ingridient.split("\r\n");
                this.nutrients = nutrient.split("\r\n");
                this.processes = process.split("\r\n");


                console.log(this.ingridients)
                console.log(this.nutrients)
                console.log(this.processes)
       
            }

        }
    }


}

</script>

<style  scoped>

li {
  margin-bottom: -24px;
}
.card-body.border {
  border-color: black;
}

</style>