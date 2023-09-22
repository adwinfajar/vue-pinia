<script>
export default {
  data() {
    return {
      namasaya: "",
    };
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
        <div class="px-6 py-4 text-center">
          <div class="font-bold text-xl text-center">V-Model</div>
        </div>
        <p class="mb-5 text-center font-extralight">Masukkan nama anda pada kolom dibawah</p>
        <center><input type="text" class="mb-5 border-b-2 border-orange-300 text-center font-extralight" v-model="namasaya" placeholder="isikan nama anda" /></center>
        <p class="mb-5 text-center font-extralight">Nama anda {{ namasaya }}</p>
      </div>
    </div>
  </div>
</template>
