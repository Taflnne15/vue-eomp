<template>
    <!-- <div class="contact-form"> -->
        <div class="container text-center">
  <div class="row align-items-center">
    <div class="col">
      <img class="taff-logo" src="https://i.postimg.cc/T1NNrY56/tafflogo4.png" alt="logo">
    </div>

    <div class="col">
      <div class="container">
        <form class="row g-3 needs-validation" novalidate>
  <div class="col-md-4">
    <label for="validationCustom01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationCustom01" value="Mark" required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustom02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationCustom02" value="Otto" required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustomUsername" class="form-label">Email</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required>
      <div class="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationCustom03" class="form-label">Message</label>
    <input type="text" class="form-control" id="validationCustom03" required>
    <div class="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>



  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
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
margin-top: 90px;
box-shadow:2px 2px 2px 4px black;
margin-right: 50px;
}
.container{
    margin-top: 70px;
}
</style>