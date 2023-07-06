<template>
  <div class="projects">
    <div class="projects-card">
        <div class="card" v-for="projects in projects"
        :key="projects.id" style="width: 18rem;">
  <div class="card-body">
    <img :src="projects.image" class="img-thumbnail" alt="...">
    <h5 class="card-title">{{ projects.project }}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">{{ projects.builtON }}</h6>
    <p class="card-text">{{ projects.details }}</p>
    <a 
    :href="projects.liveLink" class="card-link"><i class="bi bi-broadcast"></i></a>
    <a :href="projects.Url" class="card-link"><i class="bi bi-github"></i></a>
  </div>
</div>
    </div>
  </div>
</template>

<script>
    export default {
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProjects");
  },
};
        
    
</script>

<style scoped>
.projects{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
}
.projects-card{
  display: grid;
  grid-template-columns: auto auto auto;
  margin-top: 50px;
  width: 70%;
  gap: 3rem;
}
.card{
   box-shadow: 2px 2px 2px 4px  black;
}
.img-thumbnail{
  width: 200px;

}

@media (width < 600PX){
  .projects-card{
   grid-template-columns: auto ;
}

}
</style>