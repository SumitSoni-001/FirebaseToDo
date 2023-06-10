<template>
  <q-layout view="lHh lpR lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"/>

        <q-toolbar-title class="absolute-center">
          TODO App
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

   <q-footer elevated>
      <q-tabs
        inline-label
        class="text-white">
        <q-route-tab v-for="nav in navs" :key="nav.title"
        :to="nav.route" :name="nav.title" :icon="nav.icon" :label="nav.title" />
      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="700"
      width="250"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          text-grey-8>
          Navigation
        </q-item-label>
         <q-item-section>
          <q-item v-for="nav in navs" :key="nav.title"
          :to="nav.route"
          exact
          clickable>
          <q-item-section avatar>
            <q-icon :name="nav.icon"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{nav.title}}</q-item-label>
          </q-item-section>
          </q-item>
        </q-item-section>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false,
      navs: [
        {
          title: 'ToDo',
          icon: 'list',
          route: '/'
        },
        // {
        //   title: 'Personal Details',
        //   icon: 'person',
        //   route: '/resume'
        // },
        {
          title: 'Settings',
          icon: 'settings',
          route: '/settings'
        },
        {
          title: 'About',
          icon: 'info',
          route: '/about'
        }
      ]
    }
  }
}
</script>

<style>
@media screen and (min-width: 500px) {
  .q-footer {
    display: none;
  }
}
</style>
