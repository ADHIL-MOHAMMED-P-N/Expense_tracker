<template>

   <div class="container mt-5">
     <h1 class="text-center">Track Your Expenses📈💰</h1>
  <div class="row">
    <div class="col-md-6">
        <img src="../../public/img/home.png" alt="money" class="img img-fluid">
    </div>
    <div class="col-md-6">
          <div class="card p-3 bg-primary text-white mt-5" style="width:30rem">

<form class="mt-2">
  <h3>Register</h3>
  <br>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <br>
  
  <button type="submit" class="btn btn-light  w-100">Register</button>
</form>


</div>
    </div>
   
  </div>
</div>
</template>

<script>
export default {
  name: "HelloWorld",

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
