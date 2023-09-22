import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      nama: "...",
      perkalian: 0,
    };
  },
  actions: {
    setName(newName) {
      console.log(newName);
      this.nama = "Hallo " + newName;
    },
    prosesperkalian(bilangan1, bilangan2) {
      const hasil = bilangan1 * bilangan2;
      this.perkalian = hasil;
    },
  },
});
