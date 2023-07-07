<template>
 
    <div class="skills">
    <div class="skills-card">
        <div class="card"   v-for="skills in skills"
        :key="skills.id" style="width: 18rem;" >
  <img :src="skills.image" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{ skills.name}}</h5>
    <p class="card-text">{{ skills.Level }}</p>
  </div>
</div>
    </div>
</div>

</template>

<script>
 export default {
  computed: {
    skills() {
      return this.$store.state.skills;
    },
  },
  mounted() {
    this.$store.dispatch("fetchSkills");
  },
};
</script>

<style scoped>
.skills{
    width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.skills-card{
    display: grid;
  grid-template-columns: auto auto auto;
  margin-top: 50px;
  width: 70%;
  gap: 3rem;  
}
.card-img-top{
    width: 150px;
   

}
.card{
  box-shadow: 2px 2px 2px 4px black;
}
.card-body{
  background-color:  #bd4b8c;
}
@media (width < 600PX){
  .skills-card{
  grid-template-columns: auto;
}
}
.skills{
  background-image: linear-gradient(to right top, #ff65c9, #bd4b8c, #7c3457, #3f1e2b, #000000);
}
</style>