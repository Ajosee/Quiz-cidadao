// Banco de perguntas do Nível 1 (Constituição Federal)
// Cada objeto: texto, alternativas, correta (0-index), artigo, explicacao, valorPontos (pontuação crescente)
// A pontuação será atribuída dinamicamente com base na ordem (primeira 5, segunda 6, etc.)
const perguntasN1 = [
  {
    texto: "De acordo com a Constituição Federal, qual é a idade mínima para votar em eleições municipais?",
    alternativas: ["16 anos", "18 anos", "21 anos", "14 anos"],
    correta: 0,
    artigo: "CF/88, art. 14, § 1º, II – 'O alistamento eleitoral e o voto são obrigatórios para os maiores de dezoito anos e facultativos para os maiores de dezesseis e menores de dezoito anos.'",
    explicacao: "Jovens de 16 e 17 anos podem votar, mas não são obrigados. A partir dos 18 anos o voto é obrigatório."
  },
  {
    texto: "É garantido pela Constituição o direito de reunião pacífica?",
    alternativas: ["Sim, desde que seja em local fechado", "Não, depende de autorização judicial", "Sim, sem armas, com aviso prévio à autoridade", "Apenas para partidos políticos"],
    correta: 2,
    artigo: "CF/88, art. 5º, XVI – 'todos podem reunir-se pacificamente, sem armas, em locais abertos ao público, desde que não frustrem outra reunião anteriormente convocada para o mesmo local, sendo apenas exigido prévio aviso à autoridade.'",
    explicacao: "Você tem o direito de se reunir, mas precisa avisar com antecedência. Nada de armas e não pode atrapalhar outra reunião marcada."
  },
  {
    texto: "Qual destes é um direito fundamental previsto na Constituição?",
    alternativas: ["Pagamento de impostos proporcionais", "Liberdade de crença religiosa", "Serviço militar obrigatório para mulheres", "Votar aos 12 anos"],
    correta: 1,
    artigo: "CF/88, art. 5º, VI – 'é inviolável a liberdade de consciência e de crença, sendo assegurado o livre exercício dos cultos religiosos.'",
    explicacao: "A liberdade religiosa é um direito fundamental; ninguém pode ser perseguido por sua fé."
  }
];
// Adicione mais perguntas até completar 70 (exemplo com 3)
