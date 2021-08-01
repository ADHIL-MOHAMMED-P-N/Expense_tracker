<template>
<div class="mt-5"> 
    <h1>Expense </h1>
<div class="container d-flex justify-content-center align-items-center ">
  <form class="d-flex p-2 ">
  <div class="mx-3">
    
    <input type="text" v-model="newExpense.spendTitle" placeholder="Amount Title" class="form-control">
  </div>
  <div class="mx-3">
    
    <input type="number" v-model="newExpense.spendAmount" placeholder="amount" class="form-control" >
  </div>
  <div class="mx-3">
        <input type="text" v-model="newExpense.spendDescription" placeholder="description" class="form-control">
    
  </div>
  
  <button type="submit" class="btn btn-primary" v-on:click="createExpense">Submit</button>
</form>

</div>

<!--   <div class="card">
    <form action="" class="form">
    <input type="text" v-model="newExpense.spendTitle" placeholder="Title">
    <input type="text" v-model="newExpense.spendAmount" placeholder="amount">
    <input type="text" v-model="newExpense.spendDescription" placeholder="description">
    <button v-on:click="createExpense" type="submit" class="btn btn-primary">Create</button>

    </form>
  </div>
   -->

   <div class="container mt-5 d-flex flex-wrap justify-content-evenly">
         <div v-for="(expense,index) in expense"
      v-bind:item="expense"
      v-bind:index="index"
      v-bind:key="expense._id"
      >
    <div class="card m-2 bg-light" style="width: 18rem;">
  <div class="card-body">
    <h6 class="card-subtitle" >{{expense.spendTitle}}</h6>
    <h4 class="card-title">{{expense.spendAmount}} ₹</h4>
    
    <p class="card-text">{{expense.description}}</p>
    <p class="card-text">{{
      
      `${expense.date.getDate()}/${expense.date.getMonth()}/${expense.date.getFullYear()}`
      
      }}</p>
     <form action="">
       <button v-on:click="deleteExpense(expense._id)" type="submit" class="btn btn-danger">delete</button>
  </form>
  </div>
</div>



  <!-- <h3>{{expense.spendTitle}}</h3>
  <form action="">
       <button v-on:click="deleteExpense(expense._id)" type="submit" class="btn btn-danger">delete</button>
  </form> -->
   </div>
   </div>
  

</div>

</template>

<script>

import ExpenseService from "../ExpenseService";
export default {
  name: 'Expense',
  //data is the state
  data(){
    return {
      expense : [],
      newExpense : {
            spendTitle:"",
            spendAmount:"",
            spendDescription:"",
      },
    }
  },
  //created is a lifecycle method ,run every time component renders
  async created(){
    try {
      this.expense = await ExpenseService.getExpense();
      
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    async createExpense(){
      await ExpenseService.createExpense(this.newExpense);
       this.expense = await ExpenseService.getExpense();
      
    },
    async deleteExpense(id){
      await ExpenseService.deleteExpense(id);
      this.expense = await ExpenseService.getExpense();
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
