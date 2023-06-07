<template>
  <q-page class="q-pa-md">
    <div>
    <q-card class="my-card" style="min-width: 350px;">
      <img src="https://cdn.quasar.dev/img/mountains.jpg" style="height:250px">

      <q-card-section>
        <div class="text-h6 text-center">Details</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div>Name - {{getDetails.name}}<b></b></div>
        <div>Phone - {{getDetails.phone}}<b></b></div>
        <div>Email - {{getDetails.email}}<b></b></div>
        <div>Location - {{getDetails.location}}<b></b></div>
        <div>Birth date - {{getDetails.dob}}<b></b></div>
        <div>Qualification - {{getDetails.qualification}}<b></b></div>
        <div>Skills -
          <q-list>
            <q-item v-for="(skill, index) in getDetails.skills" :key="index">
              {{index+1}} : {{skill}}
            </q-item>
          </q-list>
        </div>
      </q-card-section>
    </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  computed: {
    getDetails () {
      return this.$store.getters['resume/getDetails']
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
