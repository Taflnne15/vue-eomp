<template>
  <div class="testo">
    <div class="card-Testimonial">
      <div
        class="card"
        v-for="testimonial in testimonials"
        :key="testimonial.id"
      >
        <div class="img-card">
          <img
            :src="testimonial.image"
            class="card-img-top"
            alt="tetsimonial.name"
          />
        </div>

        <div class="card-body">
          <p class="card-text">
            {{ testimonial.name }} {{ testimonial.person }}
          </p>
          <p class="card-text">{{ testimonial.Description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    testimonials() {
      return this.$store.state.testimonials;
    },
  },
  mounted() {
    this.$store.dispatch("fetchTestimonials");
  },
};
</script>

<style scoped>

.testo{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-Testimonial {
  display: grid;
  grid-template-columns: auto auto auto;
  margin-top: 50px;
  width: 70%;
  gap: 3rem;
}
.card-img-top {
  width: 150px;
  border-radius: 50%;
}
.card{
  box-shadow: 2px 2px 2px 4px black;
}
</style>