<template>
    <q-page class="q-pa-md">
        <h5>Personal Details</h5>
<!-- Name, Phone -->
        <div class="flex">
        <q-input filled v-model="name" label="Name" :dense="dense" input-class="name">
         <template v-slot:prepend>
          <q-icon name="person" />
        </template>
      </q-input>

      <q-input filled class="q-ml-md" v-model="phone" label="Phone" :dense="dense" input-class="number">
         <template v-slot:prepend>
          <q-icon name="phone" />
        </template>
      </q-input>
        </div>

<!-- email, Location -->
        <div class="flex q-mt-lg">
        <q-input filled v-model="email" label="Email" :dense="dense" input-class="email">
         <template v-slot:prepend>
          <q-icon name="email" />
        </template>
      </q-input>

      <q-input filled class="q-ml-md" v-model="location" label="Location" :dense="dense">
         <template v-slot:prepend>
          <q-icon name="place" />
        </template>
      </q-input>
        </div>

<!-- Date -->
        <!-- <div class="flex q-mt-lg">
           <q-btn color="secondary" @click="toggleDate">
            <div>Birth date</div>
           </q-btn>
           <q-chip color="info" text-color="white" icon="event" v-show="dob.length">
                {{dob}}
           </q-chip>
        </div> -->

        <div class="q-mt-md">
            <!-- <q-date v-model="dob" v-show="showDate" /> -->
            <q-input filled v-model="dob">
            <template v-slot:prepend>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-date v-model="dob" mask="YYYY-MM-DD">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>

<!-- Qualification - Dropdown -->
    <div class="flex q-mt-lg">
    <q-btn-dropdown color="accent" label="Qualification">
      <q-list>
        <q-item clickable v-close-popup @click="selectQualificaton('10th')">
          <q-item-section>
            <q-item-label>10th</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="selectQualificaton('12th')">
          <q-item-section>
            <q-item-label>12th</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="selectQualificaton('Graduation')">
          <q-item-section>
            <q-item-label>Graduation</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="selectQualificaton('Post Graduation')">
          <q-item-section>
            <q-item-label>Post Graduation</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
     <q-chip color="info" text-color="white" icon="school" v-show="qualification.length">
      {{qualification}}
     </q-chip>
  </div>

<!--
      <div class="flex q-mt-md">
        <q-input filled v-model="role" label="Job Role" :dense="dense" >
         <template v-slot:prepend>
          <q-icon name="work" />
        </template>
      </q-input>

        <q-file
        class="q-ml-md"
        v-model="image"
        label="Pick profile picture"
        filled
        :dense="dense"
        style="max-width: 300px">
          <template v-slot:prepend>
            <q-icon name="image" />
          </template>
        </q-file>
      </div> -->

      <!-- <img :src="image"> -->

<!-- Skills -->
        <h5>Skills</h5>
        <div class="flex" v-for="(item, index) in skills" :key="index">
            <div class="row">
            <q-chip removable @remove="removeSkill(index)" color="info" text-color="white">
            {{item}}
            </q-chip>
            </div>
        </div>

        <div class="flex">
            <q-input bottom-slots v-model="skillInput" label="Skills" counter :dense="dense">
        <template v-slot:prepend>
          <q-icon name="work" />
        </template>
        <template v-slot:append>
          <q-icon name="send" @click="addSkill()" class="cursor-pointer" />
        </template>
      </q-input>
        </div>

<!-- Submit - Show notification on click and navigate to 'viewResume' -->
        <div class="flex flex-center q-mt-xl">
          <!-- <q-btn @click="submit" -->
            <q-btn @click="updateDetails({'detail' : {'name':name,'phone':phone, 'email':email, 'location':location, 'dob':dob, 'qualification':qualification, 'skills':skills}})"
            color="dark"
            to="/viewResume">
            <div>Submit</div>
            <q-icon right name="send" />
           </q-btn>
        </div>

        <div class="q-pa-md">
            <!-- <q-btn color="purple" @click="showNotif" label="Show Notification" /> -->
        </div>

    </q-page>
</template>

<script>
import { ref } from 'vue'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      dense: ref(true),
      name: ref(''),
      phone: ref(null),
      email: ref(''),
      location: ref(''),
      role: ref(''),
      dob: '',
      // showDate: ref(false),
      image: ref(''),
      skillInput: '',
      qualification: '',
      skills: []
    }
  },
  methods: {
    ...mapActions('resume', ['updateDetails']),
    addSkill () {
      this.skills.push(this.skillInput)
      this.skillInput = ''
    },
    removeSkill (index) {
      this.skills.splice(index, 1)
    },
    toggleDate () {
      this.showDate = !this.showDate
    },
    selectQualificaton (q) {
      this.qualification = q
    },
    submit () {
      // this.updateDetails({ 'detail': { 'name': this.name, 'phone': this.phone, 'email': this.email, 'location': this.location, 'dob': this.dob, 'qualification': this.qualification, 'skills': this.skills } })
      this.$q.notify({
        message: 'Details Saved Successfully',
        color: 'light-green'
      })
    }
  }
}
</script>

<style>

</style>
