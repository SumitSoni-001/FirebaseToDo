<template>
  <q-item
    clickable
    @click="updateTask({'id': id, 'updates': {'completed': !task.completed}})"
    :class="!task.completed ? 'bg-orange-1' : 'bg-green-2'"
    v-touch-hold:1000.mouse="showEditTaskDialog"
    v-ripple>
      <q-item-section side top>
        <q-checkbox :value="task.completed" class="no-pointer-events" />
      </q-item-section>
      <q-item-section>
        <q-item-label :class="{ 'text-strike' : task.completed }">
          <!-- v-html="$options.filters.searchHighlight(task.name, search)"> -->
        <div v-html="highlightedName"></div>
      </q-item-label>
      </q-item-section>
       <q-item-section side top>
        <div class="row">
          <div class="column justify-center">
            <q-icon name="event" size="18px" class="q-mr-xs"/>
          </div>
          <div class="column">
            <!-- To apply a filter, we use '|' symbol and the property written before this symbol becomes the value of the filter. -->
            <q-item-label caption class="row justify-end">{{task.date | formattedDate}}</q-item-label>
            <q-item-label caption class="row justify-end"><small>{{task.time}}</small></q-item-label>
          </div>
        </div>
      </q-item-section>
      <!-- <q-btn @click.stop="deleteDialog(id)" flat round dense color="primary" icon="delete" class="q-ml-md" /> -->
      <q-item-section side>
        <div class="row">
          <q-btn @click.stop="showEditTaskDialog" flat round dense color="grey" icon="edit" class="q-ml-xs" />
          <q-btn @click.stop="deleteDialog(id)" flat round dense color="red" icon="delete" class="q-ml-md" />
        </div>
      </q-item-section>
      <q-dialog v-model="showEditDialog">
        <EditTask
        @closeDialog="showEditDialog = false"
        :editTask="task"
        :id="id"/>
      </q-dialog>
  </q-item>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { date } from 'quasar'
export default {
  props: ['task', 'id'], // Props for 'dashboard' page
  data () {
    return {
      showEditDialog: false
    }
  },
  computed: {
    ...mapState('tasks', ['search']),
    highlightedName () {
      return this.searchHighlight(this.task.name, this.search)
      // return this.$options.filters.searchHighlight(taskName, this.search)
    }
  },
  methods: {
    ...mapActions('tasks', ['updateTask', 'deleteTask']),
    deleteDialog (id) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Are you sure, You want to delete?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        console.log('Deleted')
        this.deleteTask(id)
      })
    },
    showEditTaskDialog () {
      this.showEditDialog = true
    },
    searchHighlight (value, search) {
      if (search) {
        return value.replace(new RegExp(search, 'gi'), '<span class="bg-yellow-6">$&</span>')
        // return value.replace(search, '<span class="bg-yellow-6">' + search + '</span>')
      } else {
        return value
      }
    }
  },
  filters: {
    formattedDate (value) {
      return date.formatDate(value, 'MMM D, YYYY')
    }
    // searchHighlight (value, search) {
    //   if (search) {
    //     return value.replace(new RegExp(search, 'gi'), '<span class="bg-yellow-6">$&</span>')
    //     // return value.replace(search, '<span class="bg-yellow-6">' + search + '</span>')
    //   } else {
    //     return value
    //   }
    // }
  },
  components: {
    EditTask: require('components/Tasks/Modals/EditTask.vue').default
  }
}
</script>

<style>
</style>
