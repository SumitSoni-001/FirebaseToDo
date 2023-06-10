<template>
  <q-page>
    <q-list bordered>
      <q-item-label header>Settings</q-item-label>
      <q-item tag="label" v-ripple>
          <q-item-section>
            <q-item-label>12 Hour time format</q-item-label>
          </q-item-section>
          <q-item-section side >
            <q-toggle color="primary" v-model="showTimeFormat" val="battery" />
          </q-item-section>
        </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions
  },
  computed: {
    ...mapGetters('settings', ['settings']),
    showTimeFormat () {
      return this.settings.showTimeFormat
    }
  }
}
</script>
<style>

</style>
