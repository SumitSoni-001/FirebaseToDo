<template>
  <q-item
    clickable
    @click="updateTask({'id': id, 'updates': {'completed': !completed}})"
    :class="!completed ? 'bg-orange-1' : 'bg-green-2'"
    v-ripple>
      <q-item-section side top>
        <q-checkbox :value="completed" class="no-pointer-events" />
      </q-item-section>
      <q-item-section>
        <q-item-label :class="{ 'text-strike' : completed }">{{name}}</q-item-label>
      </q-item-section>
       <q-item-section side top>
        <div class="row">
          <div class="column justify-center">
            <q-icon name="event" size="18px" class="q-mr-xs"/>
          </div>
          <div class="column">
            <q-item-label caption class="row justify-end">{{date}}</q-item-label>
            <q-item-label caption class="row justify-end"><small>{{time}}</small></q-item-label>
          </div>
        </div>
      </q-item-section>
      <q-item-section side>
        <div class="row">
          <q-btn flat round dense color="primary" icon="delete" class="q-ml-md" />
          <q-btn @click.stop="deleteDialog(id)" flat round dense color="primary" icon="delete" class="q-ml-md" />
        </div>
      </q-item-section>
  </q-item>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    id: {
      type: String
    },
    name: {
      type: String
    },
    completed: {
      type: Boolean
    },
    date: {
      type: String
    },
    time: {
      type: String
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
    }
  }
}
</script>

<style>
</style>
