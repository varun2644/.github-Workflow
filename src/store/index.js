import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },
  getters: {
    allTodos: (state) => state.todos
  },
  actions: {
    async fetchTodos({ commit }) {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos")

      commit("setTodos", res.data)
    },
    async addTodo({ commit }, title) {
      const res = await axios.post("https://jsonplaceholder.typicode.com/todos", {
        title, completed: false
      })
      commit("newTodo", res.data)
    },

    async deleteTodo({ commit }, id) {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      commit("removeTodo", id)
    },
    async filterTodos({ commit }, e) {
      const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText)
      const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
      commit("setTodos", res.data)
    },
    async updateTodo({ commit }, updTodo) {
      const res = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updTodo.id}`, updTodo)
      commit("updateTodo", res.data)
    }
  },
  mutations: {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
    updateTodo: (state, updTodo) => {
      const index = state.todos.findIndex(todo => todo.id === updTodo.id)
      if (index !== -1) {
        state.todos.splice(index, 1, updTodo)
      }
    }
  },
  modules: {
  }
})
