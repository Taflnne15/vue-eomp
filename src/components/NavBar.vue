<template>
<nav class="navbar navbar-expand-lg navbar-line">
  <div class="container-fluid nav-con">
    <a class="navbar-brand" href="#"><img src="https://i.postimg.cc/T1NNrY56/tafflogo4.png" alt="logo" width="200px">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
     
    
      <div class="navbar-nav">
        <ul class="nav">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/resume">Resume</router-link></li>
          <li><router-link to="/skills">Skills</router-link></li>
          <li><router-link to="/projects">Projects</router-link></li>
          <li><router-link to="/testimonials">Testimonials</router-link></li>
          <li><router-link to="/contact">Contact Me</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</nav>
 
</template>

<script>
export default {
 
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
/* .nav li {
  margin: 5px;  
} */
ul li a{
  text-decoration: none;
  margin: 5px;  
}
.navbar-line{
background-color: white;
  /* border: 1px solid red; */
  height: 7rem;
}

.nav-con a img{
  width: 100%;
  height: 100%;
}

</style>
