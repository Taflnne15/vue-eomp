<template>
  <div class="resume">
  <div class="edu">
    <div class="education-card">
   
      <div class="card text-center"  v-for="education in education" :key="education.id"  style="width: 18rem;">
        <div class="image-place">
          <img :src="education.image" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title">{{education.name  }}</h5>
          <h4 class="card-text">{{ education.Level }}</h4>
          <h4 class="card-text">{{ education.year}}</h4>
  </div>
</div>
</div>
</div>

<!-- Experience -->
<div class="experience">
  <div class="card"   v-for="experience in experience"
        :key="experience.id" style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{{experience.name}}</li>
    <li class="list-group-item">{{experience.jobType}}</li>
    <li class="list-group-item">{{experience.description}}</li>
    
  </ul>
</div>
</div>

</div>
</template>

<script>
    export default {
  computed: {
    education() {
      return this.$store.state.education;
    },
    experience(){
      return this.$store.state.experience;
    }
  },
  mounted() {
    this.$store.dispatch("fetchEducation");
    this.$store.dispatch("fetchExperience");
  }
}
  
</script>

<style scoped>

:root{
  --Bground :linear-gradient(to right top, #ff65c9, #bd4b8c, #7c3457, #3f1e2b, #000000);
}

 
.education-card{
  display: grid;
  grid-template-columns: auto auto auto;
  width: 70%;
  gap: 3rem;
}
.edu{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card{
box-shadow: 2px 2px 20px black;
background-color: black;
color: white;
}
.card-img-top{
  width: 150px;
}
.card-body {
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', 'Geneva', Verdana, sans-serif;
font-weight: 400;
}
.list-group{
font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', 'Geneva', Verdana, sans-serif;
}

@media (width < 600PX){
  .education-card{
  grid-template-columns: auto;
}
}
.resume{
  background-image: linear-gradient(to right top, #ff65c9, #bd4b8c, #7c3457, #3f1e2b, #000000);
}
.experience{
  display: grid;
  grid-template-columns: auto auto;
}

.experience .card{
  box-shadow: 2px 2px 20px black;
}
</style>