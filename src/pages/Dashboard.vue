<template>
  <q-page>

    <div class="q-pa-md absolute full-width full-height column">
      <div class="row q-mb-md">
        <search></search>
        <sort></sort>
      </div>

      <q-scroll-area class="q-scroll-area-tasks">
        <!-- <div class="relative-position"> -->
        <!-- Tasks Todo -->
        <no_task v-if="!Object.keys(task_todo).length && !search" class="q-ma-sm" style="border-radius: 5px;"></no_task>

        <task_todo v-if="Object.keys(task_todo).length" :task_todo="task_todo" />

        <!-- Completed Tasks -->
        <task_completed v-if="Object.keys(task_completed).length" :task_completed="task_completed" />

        <!-- </div> -->
      </q-scroll-area>

      <q-dialog v-model="showAddDialog">
        <!-- closeDialog is a custom event created in "AddTask.vue" which will close the addTask dialog when 'save' button is clicked -->
        <AddTask @closeDialog="showAddDialog = false" />
      </q-dialog>

      <!-- "no-pointer-event" class will disable all the pointer events and "all-pointer-event" class will enable all the events. -->
      <div class="absolute-bottom text-center q-mb-lg no-pointer-events">
        <q-btn class="all-pointer-events" @click="showAddDialog = true" round size="18px" color="primary" icon="add" />
      </div>
    </div>

  </q-page>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

// import { mapActions } from 'vuex'
export default {
  data () {
    return {
      showAddDialog: false
    }
  },
  // methods: {
  //   ...mapActions('tasks', ['updateTask', 'deleteTask']),
  //   deleteDialog (id) {
  //     this.$q.dialog({
  //       title: 'Confirm',
  //       message: 'Are you sure, You want to delete?',
  //       cancel: true,
  //       persistent: true
  //     }).onOk(() => {
  //       console.log('Deleted')
  //       this.deleteTask(id)
  //     })
  //   }
  // },
  computed: { // It contains the computed properties, means the properties whose values are calculated and we have to get those only.
    ...mapGetters('tasks', ['task_todo', 'task_completed']),
    ...mapState('tasks', ['search']),
    tasks () {
      return this.$store.getters['tasks/getTasks']
    }
  },
  mounted () {
    this.$root.$on('showAddDialog', () => {
      this.showAddDialog = true
    })
  },
  components: { // It contains the properties whose values we have to change(Create, Update, Delete)
    AddTask: require('components/Tasks/Modals/AddTask.vue').default,
    task_todo: require('components/Tasks/task_todo.vue').default,
    task_completed: require('components/Tasks/task_completed.vue').default,
    no_task: require('components/Tasks/noTask.vue').default,
    search: require('components/Tasks/search.vue').default,
    sort: require('components/Tasks/sort.vue').default
    // task: require('components/Tasks/task.vue').default
  }
}
</script>

<style>
.q-scroll-area-tasks {
  display: flex;
  flex-grow: 1;
}
</style>
