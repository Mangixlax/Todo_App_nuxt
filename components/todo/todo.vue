<template>
	<div id="_todoApp" class="bg-primary h-100" >
    <div class="bg-primary">

      <div class="container justify-content-center h-100">
        <div class="col-md-12 align-self-center ">
          <h1 class="text-center"><a href="#" class="text-white">ToDo App!</a></h1>
          <h6 class="text-center text-white">Add New TO-DO</h6>
        </div>
      </div>

    </div> 
    <div class="container h-100">
        
      <AddTodo
      @addTask="addTask"/>

      <div class="container bg-white h-100 p-0">

        <div class="row  pt-4">
          <div class="col-3 text-right">
            All Todo : <span id="taskCount"> {{this.$store.state.todos.length}} </span> 
          </div>
          <div class="col-1 text-right offset-1">
            <i class="fas fa-exclamation-circle text-primary"></i>
          </div>
          <div class="col-2 col-md-3 col-sm-3 text-left text-primary pl-0">
            <span id="incompleete">{{ getIncompleteLength }}</span><span> Incomplete</span>
          </div>
          <div class="col-1 col-md text-right">
            <i class="fas fa-check text-success"></i>
          </div>
          <div class="col-2 text-success col-md-3 col-sm-3 pl-0">
           <span id="compleete">{{ getCompleteLength }}</span><span> Completed</span>
          </div>
                              
        </div>

     
        <div class="row">
          <div class="container">
            <hr class="mt-3">
            <Todos       
            @deleteTask="deleteTask"/>
          </div>         
        </div>

      
      	
    	  
      </div>

    </div>

  </div>
</template>

<script>
	import {mapActions} from 'vuex'
	export default {

	  methods: {
      ...mapActions([
          'addTodo',
          'deleteTodo'
        ]),
       // указываем пользовательские методы для 
	    addTask(todo) { // метод для добавления задачи
	       this.addTodo(todo)
	    },
	    deleteTask(index){
	      this.deleteTodo(index)
	    },
	  },
	  computed: {
	    getIncompleteLength() { 
	      return this.$store.state.todos.filter((task) => task.complete !== true).length
	    },
	    getCompleteLength() {
	      return this.$store.state.todos.length - this.getIncompleteLength
	  },
	  },
	  watch: {
	    tasks: {
	      deep: true,
	      handler(new_tasks_by_aslan) {
	        console.table(new_tasks_by_aslan)
	      }
	    }
	  }
	}
</script>