<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const user = ''
const stack = computed(() => {
    return store.state.stack
})
</script>

<template>
    <nav class="relative flex items-center justify-center capitalize text-lg pt-24">
        <router-link class="inline px-3" to="/" active-class="active">Home</router-link>
        <router-link class="inline px-3" to="/about" active-class="active">About</router-link>
        <router-link class="inline px-3" to="/login" active-class="active">Login</router-link>
    </nav>
    <router-view class="p-24"></router-view>
    <footer>
        
    </footer>
</template>
