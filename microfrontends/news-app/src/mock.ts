interface News {
  id: number;
  title: string;
  content: string;
  products: {
    id: number;
    title: string;
    description: string;
  }[];
  sponsor: {
    name: string;
    promotion: string;
  };
}

export const mockNews: News[] = [
  {
    id: 1,
    title: "Tecnologia Revoluciona Diagnósticos Médicos",
    content: "Uma nova inteligência artificial desenvolvida por pesquisadores está transformando a área da saúde. O sistema consegue analisar exames médicos em segundos, oferecendo diagnósticos precisos e acelerando o início de tratamentos. Especialistas acreditam que a tecnologia pode salvar milhares de vidas e reduzir custos nos hospitais.",
    products: [
      { id: 1, title: "HealthScanner Pro (R$ 729,90)", description: "Dispositivo portátil para análises médicas instantâneas." },
      { id: 1, title: "HealthConnect App (R$ 247,50)", description: "Aplicativo que conecta pacientes e profissionais de saúde." },
    ],
    sponsor: {
      name: "MedTech Solutions",
      promotion: "10% de desconto em todos os produtos com o código SAÚDE10",
    },
  },
  {
    id: 2,
    title: "Cientistas Descobrem Água em Planeta Fora do Sistema Solar",
    content: "Astrônomos anunciaram a detecção de água na atmosfera de um exoplaneta localizado a 120 anos-luz da Terra. A descoberta alimenta esperanças de encontrar condições favoráveis à vida fora do nosso sistema solar. O planeta, chamado K2-18b, orbita uma estrela semelhante ao Sol.",
    products: [
      { id: 1, title: "Telescópio SkyVision Pro (R$ 3.400,00)", description: "Equipamento avançado para observação astronômica." },
    ],
    sponsor: {
      name: "CosmoGear",
      promotion: "Frete grátis em todos os pedidos acima de R$ 3.000",
    },
  },
];
