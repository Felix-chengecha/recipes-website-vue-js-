<template>



<div class="container mt-5">
    <div class="row-md-2 offset-md-2">
        <div class="col">
            <h4>my account details</h4>

            <div class="row">
                <div class="col-4 border bg-light">
                    <p class="border mt-1">Full name</p>
                    <p class="border">Email</p>
                    <p class="border">Level</p>
                    <p class="border">Bookmarks</p>
                    <p class="border">Likes</p>
                </div>

                <div class="col-6 border bg-light">
                    <p class="border mt-1">{{ name }}</p>
                    <p class="border">{{ email }}</p>
                    <p class="border">{{ level }}</p>
                    <p class="border">{{ bookmarks }}</p>
                    <p class="border">{{ likes }}</p>

                
                </div>

                <div class="col-6">
                    
                </div>

            </div>


        </div>
    </div>
</div>

</template>

<script>
export default {

    data(){
        return{
            name:'',
            email: '',
            level:'',
            bookmarks:'7',
            likes:'100'
        }
    },
    created(){
        this.mydetails();
    },

      methods:{
    
        mydetails(){

           let name= localStorage.getItem('name');
           let email=  localStorage.getItem('email');
           let level = localStorage.getItem('level');

           console.log(name);

           this.name = name;
           this.email = email;
           this.level = level;
           

        }
    }

  
}
</script>

<style scoped>

.col-3 p{
    margin-top:-3px;
    font-size: larger;
}

</style>