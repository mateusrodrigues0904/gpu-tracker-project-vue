import { defineStore } from "pinia";

export const useGpuStore = defineStore("gpuStore", {
  state: () => ({
    gpuList: [],
    gpuSelecionada: "",
  }),
  actions: {
    selecionarGpu(){
        "gpuSelecinada" = this.gpuSelecionada
    }
  },
});
