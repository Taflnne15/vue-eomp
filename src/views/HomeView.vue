<template>
  <div class="home">
    <div class="container text-center">
  <div class="row align-items-center">
    <div class="col">
    <img class="taff-img" src="https://i.postimg.cc/6QXN9vTS/taff-portfolio-img.jpg" alt="img-taff" width="200px" style="border-radius: 50%" >
    
    </div>
  
    <div class="col">
      <h1 class="animate__animated animate__bounce"> <span class="animate__animated animate__bounce" >Taflynne Summer Petersen</span> <br>
      An Aspiring Full Stack Developer <br>
       Life Choices Student</h1>
       <br>
      
             <button class="btn btn-primary"> About Me </button>
    </div>
  </div>
</div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
   
  }
}
</script>
<style>
.taff-img{
  margin-top: 90px;
  width: 18rem ;
  box-shadow: 2px 2px 2px 4px rgb(249, 148, 165);
}
h1{
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
color: rgb(249, 148, 165);
font-size: 1000px;

}
h3{
font-family:'Courier New', Courier, monospace ;
}
span{
  color:rgb(249, 148, 165);

}
 .btn .btn-primary{

  background-color: black;
 }

</style>