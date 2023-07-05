<template>
   <div class="container text-center">
  <div class="row align-items-center">
    <div class="col">
    <img class="taff-logo" src="https://i.postimg.cc/T1NNrY56/tafflogo4.png" alt="">
    </div>
    <div class="col">
      <form action="https://formspree.io/f/meqbqjyk" method="POST">
        <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Full Name</label>
  <input type="name" name="fullname" class="form-control" id="exampleFormControlInput1" placeholder="Taflynne Petersen">
</div>
 
        <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" name="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
        <!-- <label>
    Your name:
    <input type="name" name="name" >
  </label>
        <label>
    Your surname:
    <input type="surname" name="surname">
  </label>
  <label>
    Your email:
    <input type="email" name="email">
  </label>
  <label>
    Your message:
    <textarea name="message"></textarea>
  </label>
   your other form fields go here -->
  <button type="submit">Send</button>
</form>
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
margin-top: 90px;
box-shadow:2px 2px 2px 4px black;
margin-right: 50px;
width: 300px;
}
.container{
    margin-top: 70px;
}
</style>