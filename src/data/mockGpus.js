const gpus = [
  {
    id: 1,
    fotoGpu: "@/assets/images/rtx_3060.png",
    nome: "RTX 3060",
    fabricante: "NVIDIA",
    precoMedio: 2105.33,
    variacao7dias: -3.27,
    precosMedios: [
      { data: "2026-01-01", preco: 2000 },
      { data: "2026-02-01", preco: 1997 },
      { data: "2026-03-01", preco: 2254 },
      { data: "2026-04-01", preco: 1876 },
    ],
    menorpreco: 1876,
    maiorpreco: 2254,
    lojas: [
      {
        nome: "Kabum",
        icone: "@/assets/icons/kabum.png",
        preco: 2105.33,
        historico: [
          { data: "2026-01-01", preco: 2000 },
          { data: "2026-02-01", preco: 1997 },
          { data: "2026-03-01", preco: 2254 },
          { data: "2026-04-01", preco: 1876 },
        ],
        link: "https://www.kabum.com.br/produto/692463/placa-de-video-husky-alpha-rtx-3060-12gb-gddr6-192-bit-ray-tracing-dlss-3584-cuda-pcie-4-0-hvg3060",
      },
    ],
  },
];

async function fetchGpus() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(gpus);
    }, 500);
  });
}

export default gpus;
export { fetchGpus };
