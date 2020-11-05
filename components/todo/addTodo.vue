<template>
	<div class="container">
		<div class="row justify-content-center">
		   <input v-model="addFormValue" 
		 		  v-on:keydown.enter="addTask" 
		 		  v-on:keydown.esc="clearAddForm" 
		 		  class="form-control form-control-lg" id="addForm" 
		 		  type="text" 
		 		  placeholder="Type to search or enter to add todo"> 
	    </div>
		
		<div class="row mt-3 mb-5 justify-content-center">
		 <button @click="addTask" class="btn btn-lg border text-white" id="addButton">Add</button>
		</div>
	</div>
</template>

<script>
	export default {
	  name: 'addTodo',
	  data () {
	    return {
	      addFormValue: '',
	    }
	  },
	  methods: {
	  	addTask() {
	  		this.$emit('addTask', this.addFormValue);
	  		this.addFormValue = '';
	  	},
		clearAddForm(){
		this.addFormValue = ""
		}
	  },
	}
</script>

<style>
	
</style>