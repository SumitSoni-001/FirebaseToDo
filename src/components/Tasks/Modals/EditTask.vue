<template>
    <q-card>
        <q-card-section class="row">
            <div class="text-h6">Edit Task</div>
            <q-space />
            <q-btn v-close-popup flat dense round icon="close" />
        </q-card-section>

        <q-card-section>
          <form @submit.prevent="saveTask"> <!-- This will prevent the page from reloading when the submit button is pressed as well. -->

<!-- Task name -->
            <div>
                <q-input
                clearable
                clear-icon="close"
                outlined
                v-model="edittedTask.name"
                label="Task"
                :rules="[val => !!val || 'Name is required']"
                ref="name">
                    <template v-slot:append>
                        <q-icon name="task" class="cursor-pointer" />
                    </template>
                </q-input>
            </div>

<!-- Date -->
            <div class="q-mb-md">
                <q-input clearable clear-icon="close" outlined v-model="edittedTask.date" label="Due Date">
                    <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                                <q-date v-model="edittedTask.date">
                                    <div class="row items-center justify-end">
                                        <q-btn v-close-popup label="Close" color="primary" flat />
                                    </div>
                                </q-date>
                            </q-popup-proxy>
                        </q-icon>
                    </template>
                </q-input>
            </div>

<!-- Time -->
            <div class="q-mb-md" v-if="edittedTask.date.length">
                <q-input clearable clear-icon="close" outlined v-model="edittedTask.time" label="Due Time">
                    <template v-slot:append>
                        <q-icon name="access_time" class="cursor-pointer">
                            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                                <q-time v-model="edittedTask.time">
                                    <div class="row items-center justify-end">
                                        <q-btn v-close-popup label="Close" color="primary" flat />
                                    </div>
                                </q-time>
                            </q-popup-proxy>
                        </q-icon>
                    </template>
                </q-input>
            </div>

            <!-- Save Button -->
            <q-card-actions align="right">
                <q-btn
                label="Save"
                color="primary"
                type="submit"/>
            </q-card-actions>
          </form>
        </q-card-section>
    </q-card>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['editTask', 'id'], // props for 'task2.vue' component
  data () {
    return {
      edittedTask: {}
    }
  },
  methods: {
    ...mapActions('tasks', ['updateTask']),
    saveTask () {
      this.$refs.name.validate() // Validating the name EditText
      if (!this.$refs.name.hasError) { // Execute, If the name field is not empty
        console.log('Task Saved')
        // this.edittedTask.id = this.tasks.length // Set Task array length as the id of the new task
        this.updateTask({
          id: this.id,
          updates: this.edittedTask
        }) // Pass the edittedTask id and object to the updateTask method
        this.$emit('closeDialog')
      }
    }
  },
  computed: {
    tasks () {
      return this.$store.getters['tasks/getTasks']
    }
  },
  mounted () {
    this.edittedTask = Object.assign({}, this.editTask)
  }
}
</script>

<style></style>
<!-- Unable to add task to the list -->
