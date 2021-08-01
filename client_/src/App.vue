<template>

   <div id="nav">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
     <router-link class="navbar-brand" to="/">Expense Tracker</router-link> 
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li class="nav-item">
          <router-link to="/expense" class="nav-link">Expenses</router-link>
        </li>
      
          <li class="nav-item">
          <router-link to="/signin" class="nav-link">Sign In</router-link>
        </li>
<li class="nav-item">
          <router-link to="/report" class="nav-link">Report</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/" class="nav-link">Log Out</router-link>
        </li>

      </ul>
   
    </div>
  </div>
</nav>
   
    
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
}


</style>
