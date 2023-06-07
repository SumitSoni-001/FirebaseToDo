import Vue from 'vue'
import { uid } from 'quasar'
const state = {
  tasks: {
    ID1: {
      name: 'Quasar',
      completed: false,
      date: '5 April, 2023',
      time: '11:45 am'
    },
    ID2: {
      name: 'Chatbot',
      completed: false,
      date: '3 April, 2023',
      time: '11:50 am'
    },
    ID3: {
      name: 'Vue',
      completed: false,
      date: '4 April, 2023',
      time: '01:30 pm'
    }
  },
  search: '',
  sort: 'name'
}

const mutations = {
  updateTask (state, payload) {
    console.log('Update task Mutation', payload)
    Object.assign(state.tasks[payload.id], payload.updates)
  },
  // The tasks are deleting on the basis of id of task. (i.e If delete task id is 1 and there are 2 items left then the 2nd item will be deleted bcz that is at position 1 in array)
  deleteTask (state, id) {
    console.log('Delete task id: ', id)
    // delete state.tasks[id - 1]
    Vue.delete(state.tasks, id)
  },
  addTask (state, payload) {
    console.log('Saved Payload: ', payload)
    console.log('Payload: ', Vue.set(state.tasks, payload.id, payload.task))
    // Vue.set(state.tasks, payload.task)
    Vue.set(state.tasks, payload.id, payload.task)
  },
  setSearch (state, value) {
    state.search = value
  },
  setSort (state, value) {
    state.sort = value
  }
}

const actions = {
  updateTask ({ commit }, payload) {
    commit('updateTask', payload)
  },
  deleteTask ({ commit }, id) {
    commit('deleteTask', id)
  },
  addTask ({ commit }, task) {
    const taskId = uid()
    const payload = {
      id: taskId,
      task: task
    }
    commit('addTask', payload)
  },
  setSearch ({ commit }, value) {
    commit('setSearch', value)
  },
  setSort ({ commit }, value) {
    commit('setSort', value)
  }
}

const getters = {
  tasksSorted: (state) => {
    const taskSorted = {}
    const keyOrdered = Object.keys(state.tasks)

    keyOrdered.sort((a, b) => {
      const taskAProp = state.tasks[a][state.sort].toLowerCase()
      const taskBProp = state.tasks[b][state.sort].toLowerCase()

      if (taskAProp > taskBProp) return 1
      else if (taskAProp < taskBProp) return -1
      else return 0
    })
    keyOrdered.forEach((key) => {
      taskSorted[key] = state.tasks[key]
    })
    return taskSorted
  },
  tasksFiltered: (state, getters) => {
    const taskSorted = getters.tasksSorted
    const tasksFiltered = {}
    if (state.search) {
      Object.keys(taskSorted).forEach(function (key) {
        const task = taskSorted[key]
        const taskNameLowerCase = task.name.toLowerCase()
        const searchLowerCase = state.search.toLowerCase()
        if (taskNameLowerCase.includes(searchLowerCase)) {
          tasksFiltered[key] = task
        }
      })
      return tasksFiltered
    }
    return taskSorted
  },
  task_todo: (state, getters) => {
    const tasks = {}
    const tasksFiltered = getters.tasksFiltered
    Object.keys(tasksFiltered).forEach(function (key) {
      const task = tasksFiltered[key]
      if (!task.completed) {
        tasks[key] = task
      }
    })
    return tasks
    // return state.tasks
  },
  task_completed: (state, getters) => {
    const tasks = {}
    const tasksFiltered = getters.tasksFiltered
    Object.keys(tasksFiltered).forEach(function (key) {
      const task = tasksFiltered[key]
      if (task.completed) {
        tasks[key] = task
      }
    })
    return tasks
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
