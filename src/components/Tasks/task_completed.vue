<template>
  <transition
  appear
  enter-active-class="animated fadeInDown"
  leave-active-class="animated fadeOutUp"
  >
  <div class="q-mt-lg">
    <listHeader bgColor="bg-green-4">Completed</listHeader>
    <q-list
     bordered
     separator>
     <task
       v-for="(task, key) in task_completed"
       :task="task"
       :key="key"
       :id="key"></task>
   </q-list>
  </div>
  </transition>
</template>

<script>
export default {
  props: ['task_completed'],
  components: {
    task: require('components/Tasks/task2.vue').default,
    listHeader: require('components/Shared/ListHeader.vue').default
  }
}
</script>

<style>
</style>
