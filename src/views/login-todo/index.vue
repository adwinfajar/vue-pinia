<template>
  <div class="flex items-center justify-center h-screen w-screen">
    <div class="w-4/12 border rounded-md border-gray-200 rounded p-10">
      <form @submit.prevent="handelSubmit">
        <div class="mb-3">
          <label class="block mb-1 font-semibold">Email</label>
          <input type="email" v-model="email" class="rounded-md border border-gray-400 py-2 px-4 w-full font-light" />
        </div>
        <div class="mb-4">
          <label class="block mb-1 font-semibold">Password</label>
          <input type="password" v-model="password" class="rounded-md border border-gray-400 py-2 px-4 w-full" />
        </div>
        <button class="bg-sky-500 hover:bg-sky-700 px-2 py-2 rounded-md font-thin text-white">Masuk</button>
      </form>
    </div>
  </div>
</template>

<script></script>

<style></style>
