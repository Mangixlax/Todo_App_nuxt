export const state = () => ({
	todos: [],
})

export const mutations = {
	SET_TODO_TO_TODOS(state, todo) {
		state.todos.push({
			text: todo, 
       		complete: false,
		})
	},

	REMOVE_TODO_FROM_TODOS(state, index) {
		state.todos.splice(index, 1)
	}
}

export const actions = {
	addTodo({commit}, todo) {
		commit('SET_TODO_TO_TODOS', todo)
	},
	deleteTodo({commit}, index) {
		commit('REMOVE_TODO_FROM_TODOS', index)
	}
}

export const getters = {
	todos: s=> s.users
}