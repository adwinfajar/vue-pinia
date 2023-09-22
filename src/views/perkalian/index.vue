<script>
import { useUserStore } from "../../stores/user";

export default {
  data() {
    return {
      userStore: useUserStore(),
      namaKu: "",
      bilangan1: 0,
      bilangan2: 0,
    };
  },
  methods: {
    setName() {
      console.log("adwin");
      this.userStore.setName(this.namaKu);
    },
    proseskalibilangan() {
      this.userStore.prosesperkalian(this.bilangan1, this.bilangan2);
    },
  },
};
</script>

<template>
  <div>
    <div class="h-[50vh] bg-primary">
      <img src="@/assets/background.png" alt="" class="w-full h-[50vh] object-cover absolute inset-0" />
    </div>
    <div class="absolute inset-0 bottom-0 left-0 flex h-screen items-center justify-center">
      <div class="h-40%] w-[80%] overflow-hidden rounded bg-[#ffffff] px-5 drop-shadow-md md:w-[40%]">
        <div class="mx-auto mt-8" style="width: 60px"><img src="@/assets/send-email.svg" alt="Gambar Kartu" style="" /></div>
        <div class="justify-center px-6 py-4 text-center">
          <div class="text-center text-xl font-bold">Perkalian</div>
        </div>
        <div class="flex justify-center gap-4">
          <input required type="number" class="h-10 border-b-2 text-center font-extralight" placeholder="Bilangan 1" v-model="bilangan1" />
          <input required type="number" class="h-10 border-b-2 text-center font-extralight" placeholder="Bilangan 2" v-model="bilangan2" />
          <button @click="proseskalibilangan" class="rounded-lg bg-[#ee9d0f] px-2 py-2 text-sm font-light text-white hover:bg-yellow-600" style="text-align: center">Lihat hasil</button>
        </div>
        <h1 class="mb-5 h-10 w-full py-4 text-center font-extralight">Hasil perkalian {{ userStore.perkalian }}</h1>
      </div>
    </div>
  </div>
</template>
