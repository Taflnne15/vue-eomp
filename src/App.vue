<template>
   <NavBar/>
   <!-- <main class="container-fluid"> -->
    <router-view/>
  
 
  <FooterComp/>
</template>
<script>
import NavBar from './components/NavBar.vue';
import FooterComp from './components/FooterComp.vue'

export default {
  name: 'App',
  components: {
   NavBar,
   FooterComp,
  }
}



</script>
<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
/* ------- */
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    
}

body{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', 'Geneva', Verdana, sans-serif;
}

/* footer */
#app {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto minmax(100vh, 1fr) auto;
}
#app > *{
    grid-column: 1/-1;
}
 
</style>
