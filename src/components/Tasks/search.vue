<template>
    <q-input
    @keyup.esc="searchText=''"
    v-model="searchText"
    label="Search"
    class="col"
    outlined
    :dense="dense">
        <template v-slot:prepend>
            <q-icon name="search" />
        </template>
        <template v-slot:append>
            <q-icon v-if="searchText!==''" name="close" @click="searchText = ''" class="cursor-pointer" />
        </template>
    </q-input>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions('tasks', ['setSearch'])
  },
  computed: {
    ...mapState('tasks', ['search']),
    searchText: {
      get () {
        return this.search
      },
      set (value) {
        this.setSearch(value)
        console.log('searchValue', value)
      }
    }
  }
}
</script>

<style>
</style>
