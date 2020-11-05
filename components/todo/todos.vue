<template>
	<ol class="list-group" id="task_list">              
		<li v-for="(task, index) in tasks" class="list-group-item border-0 mt-0">
		<div class="row m-0 mb-4">

		  <div class="col-md-10 col-sm-9 pl-2">
		    <div class="custom-control custom-checkbox pt-2 ml-1">
		      <input v-bind:id="`task_${index}`" v-model='task.complete' class="custom-control-input" type="checkbox">
		      <label v-bind:for="`task_${index}`" v-bind:class="{ lineThrough : task.complete }" class="custom-control-label font-weight-bold">
		        {{task.text}}              
		      </label>                
		    </div>                
		  </div>

		  <div class="col-md-2 col-sm-3 text-right pt-1">
		    <button @click="deleteTask(index)" class="btn btn-md btn-danger deleteBtn">Delete</button>            
		  </div>

		</div>                   
		<hr class="">            
		</li>                                       
	</ol>
</template>


<script>
	export default {
		name: 'Todos',
		props: ['tasks'],
		data() {
			return {
				complete: false,
			}
		},
		methods: {
			deleteTask(index) {
				this.$emit('deleteTask', index)
			}
		}
	}
	
</script>

<style>
	
</style>