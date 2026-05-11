import { defineStore } from "pinia";
import { fetchGpus } from "@/data/mockGpus";

export const useGpuStore = defineStore("gpuStore", {
  state: () => ({
    gpuList: [],
    gpuSelecionada: null,

  }),
  actions: {
    selecionarGpu(gpuSelecionada){
        this.gpuSelecionada = gpuSelecionada
    },
    async carregarGpus(){
      this.gpuList = await fetchGpus()
    }
  },
});
