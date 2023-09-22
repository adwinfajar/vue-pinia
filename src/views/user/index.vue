<script>
import { useUserStore } from "../../stores/user";

export default {
  data() {
    return {
      userStore: useUserStore(),
      namaKu: "",
    };
  },
  methods: {
    setName() {
      console.log("adwin");
      this.userStore.setName(this.namaKu);
    },
  },
};
</script>

<template>
  <div>
    <div class="h-[50vh] bg-primary">
      <img src="@/assets/background.png" alt="" class="w-full h-[50vh] object-cover absolute inset-0" />
    </div>
    <div class="absolute inset-0 bottom-0 left-0 flex justify-center items-center h-screen">
      <div class="w-[80%] md:w-[40%] h-[40%] px-5 rounded overflow-hidden drop-shadow-md bg-[#ffffff]">
        <div class="mx-auto mt-8" style="width: 60px"><img src="@/assets/send-email.svg" alt="Gambar Kartu" style="" /></div>
        <div class="px-6 py-4 text-center justify-center">
          <div class="font-bold text-xl text-center">User</div>
        </div>
        <p class="mb-5 text-center font-extralight">{{ userStore.nama }}</p>

        <form action="" @submit.prevent="setName">
          <input required type="text" class="w-full border-b-2 font-extralight text-center" placeholder="Isikan nama lengkap anda" v-model="namaKu" />
          <div class="text-center pt-4">
            <button class="bg-[#ee9d0f] text-white rounded-lg px-2 py-2 hover:bg-yellow-600 text-sm font-light" style="text-align: center">Kirim</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
