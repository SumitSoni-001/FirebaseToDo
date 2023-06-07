<template>
    <q-select class="col q-select q-ml-sm"
    v-model="sortBy"
    :options="options"
    filled
    emit-value
    label="Sort by"
    stack-label
    />
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      options: [
        {
          label: 'Name',
          value: 'name'
        },
        {
          label: 'Date',
          value: 'date'
        }
      ]
    }
  },
  methods: {
    ...mapActions('tasks', ['setSort'])
  },
  computed: {
    ...mapState('tasks', ['sort']),
    sortBy: {
      get () {
        return this.sort
      },
      set (value) {
        this.setSort(value)
        console.log('SortValue', value)
      }
    }
  }
}
</script>

<style scoped>
.q-select {
    flex: 0 0 120px;
}
</style>
