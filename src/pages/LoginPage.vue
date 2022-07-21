<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router';
import { useStore } from 'vuex'

const router = useRouter()
const store = useStore()
const stack = computed(() => {
  return store.state.stack
})
const form = ref({
  email: '',
  password: ''
})

const login = () => {
  const isAuth = store.dispatch('auth/login', form.value)
  if (isAuth) {
    router.push('/')
  }
}
</script>

<template>
  <main class="p-24 text-center">
    <div class="max-w-xl mx-auto">
      <div>
        <h1 class="text-3xl font-bold">Login</h1>
        <p class="text-gray-600">
          Login to your account
        </p>
      </div>
      <div>
        <form @submit.prevent="login">
          <div class="flex flex-col items-start my-4">
            <label class="text-sm font-medium text-gray-600" for="email">Email</label>
            <input class="w-full p-2 border border-gray-400 rounded-md" type="text" id="email" v-model="form.email" />
          </div>
          <div class="flex flex-col items-start my-4">
            <label class="text-sm font-medium text-gray-600" for="password">Password</label>
            <input class="w-full p-2 border border-gray-400 rounded-md" type="password" id="password" v-model="form.password" />
          </div>
          <div class="flex flex-col items-start my-4 my-8">
            <button class="w-full p-2 bg-blue-500 text-white font-bold" type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>
