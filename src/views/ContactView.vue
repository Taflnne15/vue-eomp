<template>
  <div class="contact">
   <div class="container text-center">
  <div class="row text-center">
    <div class="col text-center">
    <img class="taff-logo" src="https://i.postimg.cc/6Q78zscj/contact-img.jpg" alt="">
    </div>
    <div class="col">
      <form action="https://formspree.io/f/meqbqjyk" method="POST">
        <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label" style="color: white;">Full Name</label>
  <input type="name" name="fullname" class="form-control" id="exampleFormControlInput1" placeholder="Taflynne Petersen" required oninvalid="this.setCustomValidity('Please insert full name')"
            oninput="this.setCustomValidity('')"
          /> >
</div>
 
        <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label" style="color: white;">Email address</label>
  <input type="email" name="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required oninvalid="this.setCustomValidity('Please insert full name')"
            oninput="this.setCustomValidity('')"
          /> >
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label" style="color: white;">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
 
  <button type="submit">Send</button>
</form>
    </div>
  </div>
</div>
</div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.taff-logo{
 
box-shadow:2px 2px 2px 5px black;

width: 300px;
}
 .col{
  margin-top: 20px;
 }
 .row{
  margin-top: 10%;
 }
 .contact {
  background-image: linear-gradient(to right top, #ff65c9, #bd4b8c, #7c3457, #3f1e2b, #000000);
 }
 input{
  border: #bd4b8c;
 }
 button{
background-color: #ff65c9;
padding: 10px;
border-radius: 10px;
width: 20%;
border: none;
 }
 button:hover{
  box-shadow: 2px 2px 20px black;
 }
 input:focus{
  box-shadow: 2px 2px 20px white;
 }
 textarea:focus{
  box-shadow: 2px 2px 20px white;
 }

</style>