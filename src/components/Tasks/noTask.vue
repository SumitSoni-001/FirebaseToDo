<template>
    <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut absolute-top">
        <q-banner :class="$q.dark.isActive ? 'bg-blue-9' : 'bg-blue-3'">
            <template v-slot:avatar>
                <q-icon name="check" color="blue-9" />
            </template>
            You don't have any task todo.
            <template v-slot:action>
                <q-btn flat color="blue-9" label="Add Task" @click="$root.$emit('showAddDialog')" />
            </template>
        </q-banner>
    </transition>
</template>

<script>
export default {

}
</script>

<style></style>
