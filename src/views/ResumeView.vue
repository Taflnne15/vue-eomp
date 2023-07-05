<template>
  <h1>Education</h1>
  <div class="edu">
    <div class="education-card">
        <div class="card text-bg-primary mb-3" v-for="education in education"
        :key="education.id"  style="max-width: 18rem;">
  <div class="card-header"><img :src="education.image" alt=""></div>
  <div class="card-body">
    <h5 class="card-title">{{ education.name }}</h5>
    <h5 class="card-title">{{ education.Level }}</h5>
    <p class="card-text">{{ education.year }}</p>
  </div>
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
  },
  mounted() {
    this.$store.dispatch("fetchEducation");
  },
};
</script>

<style scoped>
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

</style>