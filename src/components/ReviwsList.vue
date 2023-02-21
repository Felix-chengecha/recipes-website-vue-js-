<template>

<div class="review-container"> 
    
    <h3>reviews</h3> 
    
    <ul>

        <li v-for="(review, index) in reviews" :key="index">
            {{ review.name }} gave this {{ review.rating }} stars
            <br/>
            {{ review.review }}

        </li>
    </ul>
    </div>
    
</template>

<script>
export default {
    name: 'ReviewsList',
    props: {
        reviews: {
            type: Array,
            required: true
        }
    }
   
}
</script>

<style scoped>

</style>