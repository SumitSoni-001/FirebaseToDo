<template>
  <div class="q-my-sm">
    <listHeader bgColor="bg-orange-4">ToDo</listHeader>
    <!-- Object.keys(tasks) - This will give us all the keys in 'tasks' array and we are showing the list if the 'tasks' array has some items. -->
    <q-list
    bordered
    separator>
      <!-- <q-item v-for="task in tasks"
      :key="task.id"
      clickable
      @click="updateTask({'id': task.id, 'updates': {'completed': !task.completed}})"
      :class="!task.completed ? 'bg-orange-1' : 'bg-green-2'"
      v-ripple>
        <q-item-section side top>
          <q-checkbox :value="task.completed" class="no-pointer-events" />
        </q-item-section>
        <q-item-section>
          <q-item-label :class="{ 'text-strike' : task.completed }">{{task.name}}</q-item-label>
        </q-item-section>
         <q-item-section side top>
          <div class="row">
            <div class="column justify-center">
              <q-icon name="event" size="18px" class="q-mr-xs"/>
            </div>
            <div class="column">
              <q-item-label caption class="row justify-end">{{task.date}}</q-item-label>
              <q-item-label caption class="row justify-end"><small>{{task.time}}</small></q-item-label>
            </div>
          </div>
        </q-item-section>
        <q-btn @click.stop="deleteDialog(task.id)" flat round dense color="primary" icon="delete" class="q-ml-md" />
    </q-item> -->
    <task
      v-for="(task, key) in task_todo"
      :task="task"
      :key="key"
      :id="key"></task>
  </q-list>
  </div>
</template>

<script>
export default {
  props: ['task_todo'],
  components: {
    task: require('components/Tasks/task2.vue').default,
    listHeader: require('components/Shared/ListHeader.vue').default
  }
}
</script>

<style>
</style>
