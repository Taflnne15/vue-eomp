<template>
<nav class="navbar navbar-expand-lg navbar-line">
  <div class="container-fluid nav-con">
    <a class="navbar-brand" href="#"><img src="https://i.postimg.cc/T1NNrY56/tafflogo4.png" alt="logo" >
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header justify-content-end">
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
    
      <div class="offcanvas-body">
        <ul class="nav">
          <li><i class="bi bi-house"></i><router-link to="/">Home</router-link></li>
          <li><i class="bi bi-file-earmark-person-fill"></i><router-link to="/about">About</router-link></li>
          <li><i class="bi bi-file-person"></i><router-link to="/resume">Resume</router-link></li>
          <li><i class="bi bi-infinity"></i><router-link to="/skills">Skills</router-link></li>
          <li><i class="bi bi-cast"></i><router-link to="/projects">Projects</router-link></li>
          <li><i class="bi bi-people"></i><router-link to="/testimonials">Testimonials</router-link></li>
          <li><i class="bi bi-telephone-outbound-fill"></i><router-link to="/contact">Contact Me</router-link></li>
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
ul li {
  margin: 5px 20px; 
  font-weight: 900;
 
}
ul li a{
  text-decoration: none;
  color: black;

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
nav a.router-link-exact-active {
    color:#ea79c2;
    text-shadow: 2px 2px 20px#ea79c2;
}

.navbar-brand{
  width: 6rem;
  height: 6rem;
}

.navbar-brand img{
  width: 100%;
  height: 100%;
  box-shadow: 2px 2px 2px 2px black;
}
.home{
  background-image: linear-gradient(to right top, #ea79c2, #f496e8, #edbdfa, #efe0ff, #fefefe);
}
nav{
align-items: center;
}


</style>
