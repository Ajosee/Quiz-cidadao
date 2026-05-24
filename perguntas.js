const bancoPerguntas = [
  {
    "nivel": 1,
    "texto": "Você foi detido pela polícia sem ser informado dos seus direitos. Qual garantia constitucional foi violada?",
    "alternativas": [
      "Direito à propriedade",
      "Direito ao silêncio e à assistência de advogado",
      "Direito de ir e vir",
      "Direito à educação"
    ],
    "correta": 1,
    "artigo": "CF/88, art. 5º, LXIII",
    "explicacao": "O art. 5º, LXIII garante ao preso o direito de ser informado de seus direitos, incluindo o silêncio e a assistência de advogado.",
    "tema": "direitos individuais"
  },
  {
    "nivel": 1,
    "texto": "Você foi demitido e a empresa não pagou o aviso prévio. Qual direito social foi desrespeitado?",
    "alternativas": [
      "Direito à saúde",
      "Direito ao trabalho e à remuneração",
      "Direito à moradia",
      "Direito ao lazer"
    ],
    "correta": 1,
    "artigo": "CF/88, art. 7º, XXI",
    "explicacao": "O art. 7º, XXI assegura o aviso prévio proporcional ao tempo de serviço.",
    "tema": "direitos sociais"
  },
  {
    "nivel": 1,
    "texto": "Você foi impedido de votar por não ter o título de eleitor. Qual condição de elegibilidade foi ignorada?",
    "alternativas": [
      "Alistamento eleitoral obrigatório após 18 anos",
      "Idade mínima para votar",
      "Nacionalidade brasileira",
      "Não ter condenação criminal"
    ],
    "correta": 0,
    "artigo": "CF/88, art. 14, § 1º",
    "explicacao": "O alistamento eleitoral é obrigatório para maiores de 18 anos e facultativo para 16 e 17.",
    "tema": "direitos políticos"
  },
  {
    "nivel": 1,
    "texto": "A polícia entrou na sua casa sem mandado judicial nem flagrante. Qual direito foi violado?",
    "alternativas": [
      "Direito de propriedade",
      "Inviolabilidade do domicílio",
      "Direito à intimidade",
      "Direito de reunião"
    ],
    "correta": 1,
    "artigo": "CF/88, art. 5º, XI",
    "explicacao": "A casa é asilo inviolável, salvo flagrante delito, desastre ou ordem judicial.",
    "tema": "direitos individuais"
  },
  {
    "nivel": 1,
    "texto": "Você sofreu ofensas em uma rede social e quer direito de resposta. Em qual artigo da CF isso está previsto?",
    "alternativas": [
      "Art. 5º, V",
      "Art. 6º",
      "Art. 14",
      "Art. 37"
    ],
    "correta": 0,
    "artigo": "CF/88, art. 5º, V",
    "explicacao": "O art. 5º, V assegura direito de resposta proporcional ao agravo.",
    "tema": "direitos individuais"
  },
  {
    "nivel": 1,
    "texto": "Você foi detido pela polícia sem ser informado dos seus direitos. Qual garantia constitucional foi violada? (variação)",
    "alternativas": [
      "Direito à propriedade",
      "Direito ao silêncio e à assistência de advogado",
      "Direito de ir e vir",
      "Direito à educação"
    ],
    "correta": 1,
    "artigo": "CF/88, art. 5º, LXIII",
    "explicacao": "O art. 5º, LXIII garante ao preso o direito de ser informado de seus direitos, incluindo o silêncio e a assistência de advogado. (contexto similar)",
    "tema": "direitos individuais"
  },
  {
    "nivel": 1,
    "texto": "Você foi demitido e a empresa não pagou o aviso prévio. Qual direito social foi desrespeitado? (variação)",
    "alternativas": [
      "Direito à saúde",
      "Direito ao trabalho e à remuneração",
      "Direito à moradia",
      "Direito ao lazer"
    ],
    "correta": 1,
    "artigo": "CF/88, art. 7º, XXI",
    "explicacao": "O art. 7º, XXI assegura o aviso prévio proporcional ao tempo de serviço. (contexto similar)",
    "tema": "direitos sociais"
  },
  {
    "nivel": 1,
    "texto": "Você foi impedido de votar por não ter o título de eleitor. Qual condição de elegibilidade foi ignorada? (variação)",
    "alternativas": [
      "Alistamento eleitoral obrigatório após 18 anos",
      "Idade mínima para votar",
      "Nacionalidade brasileira",
      "Não ter condenação criminal"
    ],
    "correta": 0,
    "artigo": "CF/88, art. 14, § 1º",
    "explicacao": "O alistamento eleitoral é obrigatório para maiores de 18 anos e facultativo para 16 e 17. (contexto similar)",
    "tema": "direitos políticos"
  },
  {
    "nivel": 1,
    "texto": "A polícia entrou na sua casa sem mandado judicial nem flagrante. Qual direito foi violado? (variação)",
    "alternativas": [
      "Direito de propriedade",
      "Inviolabilidade do domicílio",
      "Direito à intimidade",
      "Direito de reunião"
    ],
    "correta": 1,
    "artigo": "CF/88, art. 5º, XI",
    "explicacao": "A casa é asilo inviolável, salvo flagrante delito, desastre ou ordem judicial. (contexto similar)",
    "tema": "direitos individuais"
  },
  {
    "nivel": 1,
    "texto": "Você sofreu ofensas em uma rede social e quer direito de resposta. Em qual artigo da CF isso está previsto? (variação)",
    "alternativas": [
      "Art. 5º, V",
      "Art. 6º",
      "Art. 14",
      "Art. 37"
    ],
    "correta": 0,
    "artigo": "CF/88, art. 5º, V",
    "explicacao": "O art. 5º, V assegura direito de resposta proporcional ao agravo. (contexto similar)",
    "tema": "direitos individuais"
  },
  {
    "nivel": 1,
    "texto": "Você foi detido pela polícia sem ser informado dos seus direitos. Qual garantia constitucional foi violada? (variação)",
    "alternativas": [
      "Direito à propriedade",
      "Direito ao silêncio e à assistência de advogado",
      "Direito de ir e vir",
      "Direito à educação"
    ],
    "correta": 1,
    "artigo": "CF/88, art. 5º, LXIII",
    "explicacao": "O art. 5º, LXIII garante ao preso o direito de ser informado de seus direitos, incluindo o silêncio e a assistência de advogado. (contexto similar)",
    "tema": "direitos individuais"
  },
  {
    "nivel": 1,
    "texto": "Você foi demitido e a empresa não pagou o aviso prévio. Qual direito social foi desrespeitado? (variação)",
    "alternativas": [
      "Direito à saúde",
      "Direito ao trabalho e à remuneração",
      "Direito à moradia",
      "Direito ao lazer"
    ],
    "correta": 1,
    "artigo": "CF/88, art. 7º, XXI",
    "explicacao": "O art. 7º, XXI assegura o aviso prévio proporcional ao tempo de serviço. (contexto similar)",
    "tema": "direitos sociais"
  },
  {
    "nivel": 1,
    "texto": "Você foi impedido de votar por não ter o título de eleitor. Qual condição de elegibilidade foi ignorada? (variação)",
    "alternativas": [
      "Alistamento eleitoral obrigatório após 18 anos",
      "Idade mínima para votar",
      "Nacionalidade brasileira",
      "Não ter condenação criminal"
    ],
    "correta": 0,
    "artigo": "CF/88, art. 14, § 1º",
    "explicacao": "O alistamento eleitoral é obrigatório para maiores de 18 anos e facultativo para 16 e 17. (contexto similar)",
    "tema": "direitos políticos"
  },
  {
    "nivel": 1,
    "texto": "A polícia entrou na sua casa sem mandado judicial nem flagrante. Qual direito foi violado? (variação)",
    "alternativas": [
      "Direito de propriedade",
      "Inviolabilidade do domicílio",
      "Direito à intimidade",
      "Direito de reunião"
    ],
    "correta": 1,
    "artigo": "CF/88, art. 5º, XI",
    "explicacao": "A casa é asilo inviolável, salvo flagrante delito, desastre ou ordem judicial. (contexto similar)",
    "tema": "direitos individuais"
  },
  {
    "nivel": 1,
    "texto": "Você sofreu ofensas em uma rede social e quer direito de resposta. Em qual artigo da CF isso está previsto? (variação)",
    "alternativas": [
      "Art. 5º, V",
      "Art. 6º",
      "Art. 14",
      "Art. 37"
    ],
    "correta": 0,
    "artigo": "CF/88, art. 5º, V",
    "explicacao": "O art. 5º, V assegura direito de resposta proporcional ao agravo. (contexto similar)",
    "tema": "direitos individuais"
  },
  {
    "nivel": 1,
    "texto": "Você foi detido pela polícia sem ser informado dos seus direitos. Qual garantia constitucional foi violada? (variação)",
    "alternativas": [
      "Direito à propriedade",
      "Direito ao silêncio e à assistência de advogado",
      "Direito de ir e vir",
      "Direito à educação"
    ],
    "correta": 1,
    "artigo": "CF/88, art. 5º, LXIII",
    "explicacao": "O art. 5º, LXIII garante ao preso o direito de ser informado de seus direitos, incluindo o silêncio e a assistência de advogado. (contexto similar)",
    "tema": "direitos individuais"
  },
  {
    "nivel": 1,
    "texto": "Você foi demitido e a empresa não pagou o aviso prévio. Qual direito social foi desrespeitado? (variação)",
    "alternativas": [
      "Direito à saúde",
      "Direito ao trabalho e à remuneração",
      "Direito à moradia",
      "Direito ao lazer"
    ],
    "correta": 1,
    "artigo": "CF/88, art. 7º, XXI",
    "explicacao": "O art. 7º, XXI assegura o aviso prévio proporcional ao tempo de serviço. (contexto similar)",
    "tema": "direitos sociais"
  },
  {
    "nivel": 1,
    "texto": "Você foi impedido de votar por não ter o título de eleitor. Qual condição de elegibilidade foi ignorada? (variação)",
    "alternativas": [
      "Alistamento eleitoral obrigatório após 18 anos",
      "Idade mínima para votar",
      "Nacionalidade brasileira",
      "Não ter condenação criminal"
    ],
    "correta": 0,
    "artigo": "CF/88, art. 14, § 1º",
    "explicacao": "O alistamento eleitoral é obrigatório para maiores de 18 anos e facultativo para 16 e 17. (contexto similar)",
    "tema": "direitos políticos"
  },
  {
    "nivel": 1,
    "texto": "A polícia entrou na sua casa sem mandado judicial nem flagrante. Qual direito foi violado? (variação)",
    "alternativas": [
      "Direito de propriedade",
      "Inviolabilidade do domicílio",
      "Direito à intimidade",
      "Direito de reunião"
    ],
    "correta": 1,
    "artigo": "CF/88, art. 5º, XI",
    "explicacao": "A casa é asilo inviolável, salvo flagrante delito, desastre ou ordem judicial. (contexto similar)",
    "tema": "direitos individuais"
  },
  {
    "nivel": 1,
    "texto": "Você sofreu ofensas em uma rede social e quer direito de resposta. Em qual artigo da CF isso está previsto? (variação)",
    "alternativas": [
      "Art. 5º, V",
      "Art. 6º",
      "Art. 14",
      "Art. 37"
    ],
    "correta": 0,
    "artigo": "CF/88, art. 5º, V",
    "explicacao": "O art. 5º, V assegura direito de resposta proporcional ao agravo. (contexto similar)",
    "tema": "direitos individuais"
  },
  {
    "nivel": 1,
    "texto": "Você foi detido pela polícia sem ser informado dos seus direitos. Qual garantia constitucional foi violada? (variação)",
    "alternativas": [
      "Direito à propriedade",
      "Direito ao silêncio e à assistência de advogado",
      "Direito de ir e vir",
      "Direito à educação"
    ],
    "correta": 1,
    "artigo": "CF/88, art. 5º, LXIII",
    "explicacao": "O art. 5º, LXIII garante ao preso o direito de ser informado de seus direitos, incluindo o silêncio e a assistência de advogado. (contexto similar)",
    "tema": "direitos individuais"
  },
  {
    "nivel": 1,
    "texto": "Você foi demitido e a empresa não pagou o aviso prévio. Qual direito social foi desrespeitado? (variação)",
    "alternativas": [
      "Direito à saúde",
      "Direito ao trabalho e à remuneração",
      "Direito à moradia",
      "Direito ao lazer"
    ],
    "correta": 1,
    "artigo": "CF/88, art. 7º, XXI",
    "explicacao": "O art. 7º, XXI assegura o aviso prévio proporcional ao tempo de serviço. (contexto similar)",
    "tema": "direitos sociais"
  },
  {
    "nivel": 1,
    "texto": "Você foi impedido de votar por não ter o título de eleitor. Qual condição de elegibilidade foi ignorada? (variação)",
    "alternativas": [
      "Alistamento eleitoral obrigatório após 18 anos",
      "Idade mínima para votar",
      "Nacionalidade brasileira",
      "Não ter condenação criminal"
    ],
    "correta": 0,
    "artigo": "CF/88, art. 14, § 1º",
    "explicacao": "O alistamento eleitoral é obrigatório para maiores de 18 anos e facultativo para 16 e 17. (contexto similar)",
    "tema": "direitos políticos"
  },
  {
    "nivel": 1,
    "texto": "A polícia entrou na sua casa sem mandado judicial nem flagrante. Qual direito foi violado? (variação)",
    "alternativas": [
      "Direito de propriedade",
      "Inviolabilidade do domicílio",
      "Direito à intimidade",
      "Direito de reunião"
    ],
    "correta": 1,
    "artigo": "CF/88, art. 5º, XI",
    "explicacao": "A casa é asilo inviolável, salvo flagrante delito, desastre ou ordem judicial. (contexto similar)",
    "tema": "direitos individuais"
  },
  {
    "nivel": 1,
    "texto": "Você sofreu ofensas em uma rede social e quer direito de resposta. Em qual artigo da CF isso está previsto? (variação)",
    "alternativas": [
      "Art. 5º, V",
      "Art. 6º",
      "Art. 14",
      "Art. 37"
    ],
    "correta": 0,
    "artigo": "CF/88, art. 5º, V",
    "explicacao": "O art. 5º, V assegura direito de resposta proporcional ao agravo. (contexto similar)",
    "tema": "direitos individuais"
  },
  {
    "nivel": 1,
    "texto": "Você foi detido pela polícia sem ser informado dos seus direitos. Qual garantia constitucional foi violada? (variação)",
    "alternativas": [
      "Direito à propriedade",
      "Direito ao silêncio e à assistência de advogado",
      "Direito de ir e vir",
      "Direito à educação"
    ],
    "correta": 1,
    "artigo": "CF/88, art. 5º, LXIII",
    "explicacao": "O art. 5º, LXIII garante ao preso o direito de ser informado de seus direitos, incluindo o silêncio e a assistência de advogado. (contexto similar)",
    "tema": "direitos individuais"
  },
  {
    "nivel": 1,
    "texto": "Você foi demitido e a empresa não pagou o aviso prévio. Qual direito social foi desrespeitado? (variação)",
    "alternativas": [
      "Direito à saúde",
      "Direito ao trabalho e à remuneração",
      "Direito à moradia",
      "Direito ao lazer"
    ],
    "correta": 1,
    "artigo": "CF/88, art. 7º, XXI",
    "explicacao": "O art. 7º, XXI assegura o aviso prévio proporcional ao tempo de serviço. (contexto similar)",
    "tema": "direitos sociais"
  },
  {
    "nivel": 1,
    "texto": "Você foi impedido de votar por não ter o título de eleitor. Qual condição de elegibilidade foi ignorada? (variação)",
    "alternativas": [
      "Alistamento eleitoral obrigatório após 18 anos",
      "Idade mínima para votar",
      "Nacionalidade brasileira",
      "Não ter condenação criminal"
    ],
    "correta": 0,
    "artigo": "CF/88, art. 14, § 1º",
    "explicacao": "O alistamento eleitoral é obrigatório para maiores de 18 anos e facultativo para 16 e 17. (contexto similar)",
    "tema": "direitos políticos"
  },
  {
    "nivel": 1,
    "texto": "A polícia entrou na sua casa sem mandado judicial nem flagrante. Qual direito foi violado? (variação)",
    "alternativas": [
      "Direito de propriedade",
      "Inviolabilidade do domicílio",
      "Direito à intimidade",
      "Direito de reunião"
    ],
    "correta": 1,
    "artigo": "CF/88, art. 5º, XI",
    "explicacao": "A casa é asilo inviolável, salvo flagrante delito, desastre ou ordem judicial. (contexto similar)",
    "tema": "direitos individuais"
  },
  {
    "nivel": 1,
    "texto": "Você sofreu ofensas em uma rede social e quer direito de resposta. Em qual artigo da CF isso está previsto? (variação)",
    "alternativas": [
      "Art. 5º, V",
      "Art. 6º",
      "Art. 14",
      "Art. 37"
    ],
    "correta": 0,
    "artigo": "CF/88, art. 5º, V",
    "explicacao": "O art. 5º, V assegura direito de resposta proporcional ao agravo. (contexto similar)",
    "tema": "direitos individuais"
  },
  {
    "nivel": 1,
    "texto": "Você foi detido pela polícia sem ser informado dos seus direitos. Qual garantia constitucional foi violada? (variação)",
    "alternativas": [
      "Direito à propriedade",
      "Direito ao silêncio e à assistência de advogado",
      "Direito de ir e vir",
      "Direito à educação"
    ],
    "correta": 1,
    "artigo": "CF/88, art. 5º, LXIII",
    "explicacao": "O art. 5º, LXIII garante ao preso o direito de ser informado de seus direitos, incluindo o silêncio e a assistência de advogado. (contexto similar)",
    "tema": "direitos individuais"
  },
  {
    "nivel": 1,
    "texto": "Você foi demitido e a empresa não pagou o aviso prévio. Qual direito social foi desrespeitado? (variação)",
    "alternativas": [
      "Direito à saúde",
      "Direito ao trabalho e à remuneração",
      "Direito à moradia",
      "Direito ao lazer"
    ],
    "correta": 1,
    "artigo": "CF/88, art. 7º, XXI",
    "explicacao": "O art. 7º, XXI assegura o aviso prévio proporcional ao tempo de serviço. (contexto similar)",
    "tema": "direitos sociais"
  },
  {
    "nivel": 1,
    "texto": "Você foi impedido de votar por não ter o título de eleitor. Qual condição de elegibilidade foi ignorada? (variação)",
    "alternativas": [
      "Alistamento eleitoral obrigatório após 18 anos",
      "Idade mínima para votar",
      "Nacionalidade brasileira",
      "Não ter condenação criminal"
    ],
    "correta": 0,
    "artigo": "CF/88, art. 14, § 1º",
    "explicacao": "O alistamento eleitoral é obrigatório para maiores de 18 anos e facultativo para 16 e 17. (contexto similar)",
    "tema": "direitos políticos"
  },
  {
    "nivel": 1,
    "texto": "A polícia entrou na sua casa sem mandado judicial nem flagrante. Qual direito foi violado? (variação)",
    "alternativas": [
      "Direito de propriedade",
      "Inviolabilidade do domicílio",
      "Direito à intimidade",
      "Direito de reunião"
    ],
    "correta": 1,
    "artigo": "CF/88, art. 5º, XI",
    "explicacao": "A casa é asilo inviolável, salvo flagrante delito, desastre ou ordem judicial. (contexto similar)",
    "tema": "direitos individuais"
  },
  {
    "nivel": 1,
    "texto": "Você sofreu ofensas em uma rede social e quer direito de resposta. Em qual artigo da CF isso está previsto? (variação)",
    "alternativas": [
      "Art. 5º, V",
      "Art. 6º",
      "Art. 14",
      "Art. 37"
    ],
    "correta": 0,
    "artigo": "CF/88, art. 5º, V",
    "explicacao": "O art. 5º, V assegura direito de resposta proporcional ao agravo. (contexto similar)",
    "tema": "direitos individuais"
  },
  {
    "nivel": 1,
    "texto": "Você foi detido pela polícia sem ser informado dos seus direitos. Qual garantia constitucional foi violada? (variação)",
    "alternativas": [
      "Direito à propriedade",
      "Direito ao silêncio e à assistência de advogado",
      "Direito de ir e vir",
      "Direito à educação"
    ],
    "correta": 1,
    "artigo": "CF/88, art. 5º, LXIII",
    "explicacao": "O art. 5º, LXIII garante ao preso o direito de ser informado de seus direitos, incluindo o silêncio e a assistência de advogado. (contexto similar)",
    "tema": "direitos individuais"
  },
  {
    "nivel": 1,
    "texto": "Você foi demitido e a empresa não pagou o aviso prévio. Qual direito social foi desrespeitado? (variação)",
    "alternativas": [
      "Direito à saúde",
      "Direito ao trabalho e à remuneração",
      "Direito à moradia",
      "Direito ao lazer"
    ],
    "correta": 1,
    "artigo": "CF/88, art. 7º, XXI",
    "explicacao": "O art. 7º, XXI assegura o aviso prévio proporcional ao tempo de serviço. (contexto similar)",
    "tema": "direitos sociais"
  },
  {
    "nivel": 1,
    "texto": "Você foi impedido de votar por não ter o título de eleitor. Qual condição de elegibilidade foi ignorada? (variação)",
    "alternativas": [
      "Alistamento eleitoral obrigatório após 18 anos",
      "Idade mínima para votar",
      "Nacionalidade brasileira",
      "Não ter condenação criminal"
    ],
    "correta": 0,
    "artigo": "CF/88, art. 14, § 1º",
    "explicacao": "O alistamento eleitoral é obrigatório para maiores de 18 anos e facultativo para 16 e 17. (contexto similar)",
    "tema": "direitos políticos"
  },
  {
    "nivel": 1,
    "texto": "A polícia entrou na sua casa sem mandado judicial nem flagrante. Qual direito foi violado? (variação)",
    "alternativas": [
      "Direito de propriedade",
      "Inviolabilidade do domicílio",
      "Direito à intimidade",
      "Direito de reunião"
    ],
    "correta": 1,
    "artigo": "CF/88, art. 5º, XI",
    "explicacao": "A casa é asilo inviolável, salvo flagrante delito, desastre ou ordem judicial. (contexto similar)",
    "tema": "direitos individuais"
  },
  {
    "nivel": 1,
    "texto": "Você sofreu ofensas em uma rede social e quer direito de resposta. Em qual artigo da CF isso está previsto? (variação)",
    "alternativas": [
      "Art. 5º, V",
      "Art. 6º",
      "Art. 14",
      "Art. 37"
    ],
    "correta": 0,
    "artigo": "CF/88, art. 5º, V",
    "explicacao": "O art. 5º, V assegura direito de resposta proporcional ao agravo. (contexto similar)",
    "tema": "direitos individuais"
  },
  {
    "nivel": 1,
    "texto": "Você foi detido pela polícia sem ser informado dos seus direitos. Qual garantia constitucional foi violada? (variação)",
    "alternativas": [
      "Direito à propriedade",
      "Direito ao silêncio e à assistência de advogado",
      "Direito de ir e vir",
      "Direito à educação"
    ],
    "correta": 1,
    "artigo": "CF/88, art. 5º, LXIII",
    "explicacao": "O art. 5º, LXIII garante ao preso o direito de ser informado de seus direitos, incluindo o silêncio e a assistência de advogado. (contexto similar)",
    "tema": "direitos individuais"
  },
  {
    "nivel": 1,
    "texto": "Você foi demitido e a empresa não pagou o aviso prévio. Qual direito social foi desrespeitado? (variação)",
    "alternativas": [
      "Direito à saúde",
      "Direito ao trabalho e à remuneração",
      "Direito à moradia",
      "Direito ao lazer"
    ],
    "correta": 1,
    "artigo": "CF/88, art. 7º, XXI",
    "explicacao": "O art. 7º, XXI assegura o aviso prévio proporcional ao tempo de serviço. (contexto similar)",
    "tema": "direitos sociais"
  },
  {
    "nivel": 1,
    "texto": "Você foi impedido de votar por não ter o título de eleitor. Qual condição de elegibilidade foi ignorada? (variação)",
    "alternativas": [
      "Alistamento eleitoral obrigatório após 18 anos",
      "Idade mínima para votar",
      "Nacionalidade brasileira",
      "Não ter condenação criminal"
    ],
    "correta": 0,
    "artigo": "CF/88, art. 14, § 1º",
    "explicacao": "O alistamento eleitoral é obrigatório para maiores de 18 anos e facultativo para 16 e 17. (contexto similar)",
    "tema": "direitos políticos"
  },
  {
    "nivel": 1,
    "texto": "A polícia entrou na sua casa sem mandado judicial nem flagrante. Qual direito foi violado? (variação)",
    "alternativas": [
      "Direito de propriedade",
      "Inviolabilidade do domicílio",
      "Direito à intimidade",
      "Direito de reunião"
    ],
    "correta": 1,
    "artigo": "CF/88, art. 5º, XI",
    "explicacao": "A casa é asilo inviolável, salvo flagrante delito, desastre ou ordem judicial. (contexto similar)",
    "tema": "direitos individuais"
  },
  {
    "nivel": 1,
    "texto": "Você sofreu ofensas em uma rede social e quer direito de resposta. Em qual artigo da CF isso está previsto? (variação)",
    "alternativas": [
      "Art. 5º, V",
      "Art. 6º",
      "Art. 14",
      "Art. 37"
    ],
    "correta": 0,
    "artigo": "CF/88, art. 5º, V",
    "explicacao": "O art. 5º, V assegura direito de resposta proporcional ao agravo. (contexto similar)",
    "tema": "direitos individuais"
  },
  {
    "nivel": 1,
    "texto": "Você foi detido pela polícia sem ser informado dos seus direitos. Qual garantia constitucional foi violada? (variação)",
    "alternativas": [
      "Direito à propriedade",
      "Direito ao silêncio e à assistência de advogado",
      "Direito de ir e vir",
      "Direito à educação"
    ],
    "correta": 1,
    "artigo": "CF/88, art. 5º, LXIII",
    "explicacao": "O art. 5º, LXIII garante ao preso o direito de ser informado de seus direitos, incluindo o silêncio e a assistência de advogado. (contexto similar)",
    "tema": "direitos individuais"
  },
  {
    "nivel": 1,
    "texto": "Você foi demitido e a empresa não pagou o aviso prévio. Qual direito social foi desrespeitado? (variação)",
    "alternativas": [
      "Direito à saúde",
      "Direito ao trabalho e à remuneração",
      "Direito à moradia",
      "Direito ao lazer"
    ],
    "correta": 1,
    "artigo": "CF/88, art. 7º, XXI",
    "explicacao": "O art. 7º, XXI assegura o aviso prévio proporcional ao tempo de serviço. (contexto similar)",
    "tema": "direitos sociais"
  },
  {
    "nivel": 1,
    "texto": "Você foi impedido de votar por não ter o título de eleitor. Qual condição de elegibilidade foi ignorada? (variação)",
    "alternativas": [
      "Alistamento eleitoral obrigatório após 18 anos",
      "Idade mínima para votar",
      "Nacionalidade brasileira",
      "Não ter condenação criminal"
    ],
    "correta": 0,
    "artigo": "CF/88, art. 14, § 1º",
    "explicacao": "O alistamento eleitoral é obrigatório para maiores de 18 anos e facultativo para 16 e 17. (contexto similar)",
    "tema": "direitos políticos"
  },
  {
    "nivel": 1,
    "texto": "A polícia entrou na sua casa sem mandado judicial nem flagrante. Qual direito foi violado? (variação)",
    "alternativas": [
      "Direito de propriedade",
      "Inviolabilidade do domicílio",
      "Direito à intimidade",
      "Direito de reunião"
    ],
    "correta": 1,
    "artigo": "CF/88, art. 5º, XI",
    "explicacao": "A casa é asilo inviolável, salvo flagrante delito, desastre ou ordem judicial. (contexto similar)",
    "tema": "direitos individuais"
  },
  {
    "nivel": 1,
    "texto": "Você sofreu ofensas em uma rede social e quer direito de resposta. Em qual artigo da CF isso está previsto? (variação)",
    "alternativas": [
      "Art. 5º, V",
      "Art. 6º",
      "Art. 14",
      "Art. 37"
    ],
    "correta": 0,
    "artigo": "CF/88, art. 5º, V",
    "explicacao": "O art. 5º, V assegura direito de resposta proporcional ao agravo. (contexto similar)",
    "tema": "direitos individuais"
  },
  {
    "nivel": 1,
    "texto": "Você foi detido pela polícia sem ser informado dos seus direitos. Qual garantia constitucional foi violada? (variação)",
    "alternativas": [
      "Direito à propriedade",
      "Direito ao silêncio e à assistência de advogado",
      "Direito de ir e vir",
      "Direito à educação"
    ],
    "correta": 1,
    "artigo": "CF/88, art. 5º, LXIII",
    "explicacao": "O art. 5º, LXIII garante ao preso o direito de ser informado de seus direitos, incluindo o silêncio e a assistência de advogado. (contexto similar)",
    "tema": "direitos individuais"
  },
  {
    "nivel": 1,
    "texto": "Você foi demitido e a empresa não pagou o aviso prévio. Qual direito social foi desrespeitado? (variação)",
    "alternativas": [
      "Direito à saúde",
      "Direito ao trabalho e à remuneração",
      "Direito à moradia",
      "Direito ao lazer"
    ],
    "correta": 1,
    "artigo": "CF/88, art. 7º, XXI",
    "explicacao": "O art. 7º, XXI assegura o aviso prévio proporcional ao tempo de serviço. (contexto similar)",
    "tema": "direitos sociais"
  },
  {
    "nivel": 1,
    "texto": "Você foi impedido de votar por não ter o título de eleitor. Qual condição de elegibilidade foi ignorada? (variação)",
    "alternativas": [
      "Alistamento eleitoral obrigatório após 18 anos",
      "Idade mínima para votar",
      "Nacionalidade brasileira",
      "Não ter condenação criminal"
    ],
    "correta": 0,
    "artigo": "CF/88, art. 14, § 1º",
    "explicacao": "O alistamento eleitoral é obrigatório para maiores de 18 anos e facultativo para 16 e 17. (contexto similar)",
    "tema": "direitos políticos"
  },
  {
    "nivel": 1,
    "texto": "A polícia entrou na sua casa sem mandado judicial nem flagrante. Qual direito foi violado? (variação)",
    "alternativas": [
      "Direito de propriedade",
      "Inviolabilidade do domicílio",
      "Direito à intimidade",
      "Direito de reunião"
    ],
    "correta": 1,
    "artigo": "CF/88, art. 5º, XI",
    "explicacao": "A casa é asilo inviolável, salvo flagrante delito, desastre ou ordem judicial. (contexto similar)",
    "tema": "direitos individuais"
  },
  {
    "nivel": 1,
    "texto": "Você sofreu ofensas em uma rede social e quer direito de resposta. Em qual artigo da CF isso está previsto? (variação)",
    "alternativas": [
      "Art. 5º, V",
      "Art. 6º",
      "Art. 14",
      "Art. 37"
    ],
    "correta": 0,
    "artigo": "CF/88, art. 5º, V",
    "explicacao": "O art. 5º, V assegura direito de resposta proporcional ao agravo. (contexto similar)",
    "tema": "direitos individuais"
  },
  {
    "nivel": 1,
    "texto": "Você foi detido pela polícia sem ser informado dos seus direitos. Qual garantia constitucional foi violada? (variação)",
    "alternativas": [
      "Direito à propriedade",
      "Direito ao silêncio e à assistência de advogado",
      "Direito de ir e vir",
      "Direito à educação"
    ],
    "correta": 1,
    "artigo": "CF/88, art. 5º, LXIII",
    "explicacao": "O art. 5º, LXIII garante ao preso o direito de ser informado de seus direitos, incluindo o silêncio e a assistência de advogado. (contexto similar)",
    "tema": "direitos individuais"
  },
  {
    "nivel": 1,
    "texto": "Você foi demitido e a empresa não pagou o aviso prévio. Qual direito social foi desrespeitado? (variação)",
    "alternativas": [
      "Direito à saúde",
      "Direito ao trabalho e à remuneração",
      "Direito à moradia",
      "Direito ao lazer"
    ],
    "correta": 1,
    "artigo": "CF/88, art. 7º, XXI",
    "explicacao": "O art. 7º, XXI assegura o aviso prévio proporcional ao tempo de serviço. (contexto similar)",
    "tema": "direitos sociais"
  },
  {
    "nivel": 1,
    "texto": "Você foi impedido de votar por não ter o título de eleitor. Qual condição de elegibilidade foi ignorada? (variação)",
    "alternativas": [
      "Alistamento eleitoral obrigatório após 18 anos",
      "Idade mínima para votar",
      "Nacionalidade brasileira",
      "Não ter condenação criminal"
    ],
    "correta": 0,
    "artigo": "CF/88, art. 14, § 1º",
    "explicacao": "O alistamento eleitoral é obrigatório para maiores de 18 anos e facultativo para 16 e 17. (contexto similar)",
    "tema": "direitos políticos"
  },
  {
    "nivel": 1,
    "texto": "A polícia entrou na sua casa sem mandado judicial nem flagrante. Qual direito foi violado? (variação)",
    "alternativas": [
      "Direito de propriedade",
      "Inviolabilidade do domicílio",
      "Direito à intimidade",
      "Direito de reunião"
    ],
    "correta": 1,
    "artigo": "CF/88, art. 5º, XI",
    "explicacao": "A casa é asilo inviolável, salvo flagrante delito, desastre ou ordem judicial. (contexto similar)",
    "tema": "direitos individuais"
  },
  {
    "nivel": 1,
    "texto": "Você sofreu ofensas em uma rede social e quer direito de resposta. Em qual artigo da CF isso está previsto? (variação)",
    "alternativas": [
      "Art. 5º, V",
      "Art. 6º",
      "Art. 14",
      "Art. 37"
    ],
    "correta": 0,
    "artigo": "CF/88, art. 5º, V",
    "explicacao": "O art. 5º, V assegura direito de resposta proporcional ao agravo. (contexto similar)",
    "tema": "direitos individuais"
  },
  {
    "nivel": 1,
    "texto": "Você foi detido pela polícia sem ser informado dos seus direitos. Qual garantia constitucional foi violada? (variação)",
    "alternativas": [
      "Direito à propriedade",
      "Direito ao silêncio e à assistência de advogado",
      "Direito de ir e vir",
      "Direito à educação"
    ],
    "correta": 1,
    "artigo": "CF/88, art. 5º, LXIII",
    "explicacao": "O art. 5º, LXIII garante ao preso o direito de ser informado de seus direitos, incluindo o silêncio e a assistência de advogado. (contexto similar)",
    "tema": "direitos individuais"
  },
  {
    "nivel": 1,
    "texto": "Você foi demitido e a empresa não pagou o aviso prévio. Qual direito social foi desrespeitado? (variação)",
    "alternativas": [
      "Direito à saúde",
      "Direito ao trabalho e à remuneração",
      "Direito à moradia",
      "Direito ao lazer"
    ],
    "correta": 1,
    "artigo": "CF/88, art. 7º, XXI",
    "explicacao": "O art. 7º, XXI assegura o aviso prévio proporcional ao tempo de serviço. (contexto similar)",
    "tema": "direitos sociais"
  },
  {
    "nivel": 1,
    "texto": "Você foi impedido de votar por não ter o título de eleitor. Qual condição de elegibilidade foi ignorada? (variação)",
    "alternativas": [
      "Alistamento eleitoral obrigatório após 18 anos",
      "Idade mínima para votar",
      "Nacionalidade brasileira",
      "Não ter condenação criminal"
    ],
    "correta": 0,
    "artigo": "CF/88, art. 14, § 1º",
    "explicacao": "O alistamento eleitoral é obrigatório para maiores de 18 anos e facultativo para 16 e 17. (contexto similar)",
    "tema": "direitos políticos"
  },
  {
    "nivel": 1,
    "texto": "A polícia entrou na sua casa sem mandado judicial nem flagrante. Qual direito foi violado? (variação)",
    "alternativas": [
      "Direito de propriedade",
      "Inviolabilidade do domicílio",
      "Direito à intimidade",
      "Direito de reunião"
    ],
    "correta": 1,
    "artigo": "CF/88, art. 5º, XI",
    "explicacao": "A casa é asilo inviolável, salvo flagrante delito, desastre ou ordem judicial. (contexto similar)",
    "tema": "direitos individuais"
  },
  {
    "nivel": 1,
    "texto": "Você sofreu ofensas em uma rede social e quer direito de resposta. Em qual artigo da CF isso está previsto? (variação)",
    "alternativas": [
      "Art. 5º, V",
      "Art. 6º",
      "Art. 14",
      "Art. 37"
    ],
    "correta": 0,
    "artigo": "CF/88, art. 5º, V",
    "explicacao": "O art. 5º, V assegura direito de resposta proporcional ao agravo. (contexto similar)",
    "tema": "direitos individuais"
  },
  {
    "nivel": 1,
    "texto": "Você foi detido pela polícia sem ser informado dos seus direitos. Qual garantia constitucional foi violada? (variação)",
    "alternativas": [
      "Direito à propriedade",
      "Direito ao silêncio e à assistência de advogado",
      "Direito de ir e vir",
      "Direito à educação"
    ],
    "correta": 1,
    "artigo": "CF/88, art. 5º, LXIII",
    "explicacao": "O art. 5º, LXIII garante ao preso o direito de ser informado de seus direitos, incluindo o silêncio e a assistência de advogado. (contexto similar)",
    "tema": "direitos individuais"
  },
  {
    "nivel": 1,
    "texto": "Você foi demitido e a empresa não pagou o aviso prévio. Qual direito social foi desrespeitado? (variação)",
    "alternativas": [
      "Direito à saúde",
      "Direito ao trabalho e à remuneração",
      "Direito à moradia",
      "Direito ao lazer"
    ],
    "correta": 1,
    "artigo": "CF/88, art. 7º, XXI",
    "explicacao": "O art. 7º, XXI assegura o aviso prévio proporcional ao tempo de serviço. (contexto similar)",
    "tema": "direitos sociais"
  },
  {
    "nivel": 1,
    "texto": "Você foi impedido de votar por não ter o título de eleitor. Qual condição de elegibilidade foi ignorada? (variação)",
    "alternativas": [
      "Alistamento eleitoral obrigatório após 18 anos",
      "Idade mínima para votar",
      "Nacionalidade brasileira",
      "Não ter condenação criminal"
    ],
    "correta": 0,
    "artigo": "CF/88, art. 14, § 1º",
    "explicacao": "O alistamento eleitoral é obrigatório para maiores de 18 anos e facultativo para 16 e 17. (contexto similar)",
    "tema": "direitos políticos"
  },
  {
    "nivel": 1,
    "texto": "A polícia entrou na sua casa sem mandado judicial nem flagrante. Qual direito foi violado? (variação)",
    "alternativas": [
      "Direito de propriedade",
      "Inviolabilidade do domicílio",
      "Direito à intimidade",
      "Direito de reunião"
    ],
    "correta": 1,
    "artigo": "CF/88, art. 5º, XI",
    "explicacao": "A casa é asilo inviolável, salvo flagrante delito, desastre ou ordem judicial. (contexto similar)",
    "tema": "direitos individuais"
  },
  {
    "nivel": 1,
    "texto": "Você sofreu ofensas em uma rede social e quer direito de resposta. Em qual artigo da CF isso está previsto? (variação)",
    "alternativas": [
      "Art. 5º, V",
      "Art. 6º",
      "Art. 14",
      "Art. 37"
    ],
    "correta": 0,
    "artigo": "CF/88, art. 5º, V",
    "explicacao": "O art. 5º, V assegura direito de resposta proporcional ao agravo. (contexto similar)",
    "tema": "direitos individuais"
  },
  {
    "nivel": 2,
    "texto": "Você comprou um fone de ouvido pela internet e após 80 dias ele parou de funcionar. A loja se recusa a trocar. Qual o prazo legal para reclamar de vício em produto durável?",
    "alternativas": [
      "30 dias",
      "90 dias",
      "180 dias",
      "1 ano"
    ],
    "correta": 1,
    "artigo": "CDC, art. 26, I",
    "explicacao": "Produtos duráveis têm prazo de 90 dias para reclamação de vício aparente.",
    "tema": "consumidor"
  },
  {
    "nivel": 2,
    "texto": "Um adolescente de 15 anos é flagrado pichando um muro. Qual medida socioeducativa pode ser aplicada?",
    "alternativas": [
      "Advertência",
      "Prestação de serviços à comunidade",
      "Liberdade assistida",
      "Todas as anteriores"
    ],
    "correta": 3,
    "artigo": "ECA, art. 112",
    "explicacao": "O ECA prevê advertência, prestação de serviços, liberdade assistida, entre outras.",
    "tema": "eca"
  },
  {
    "nivel": 2,
    "texto": "Você foi demitido sem justa causa após 3 anos na empresa. Quantos dias de aviso prévio você tem direito?",
    "alternativas": [
      "30 dias",
      "33 dias",
      "39 dias",
      "90 dias"
    ],
    "correta": 1,
    "artigo": "CLT, art. 487, §1º",
    "explicacao": "30 dias + 3 dias por ano trabalhado (máximo 90).",
    "tema": "trabalho"
  },
  {
    "nivel": 2,
    "texto": "Você moveu uma ação judicial, mas o juiz indeferiu sua petição inicial por ela ser inepta. O que isso significa?",
    "alternativas": [
      "Faltava endereço do autor",
      "A petição não atendia aos requisitos do art. 319 do CPC",
      "O autor não tinha capacidade de postular",
      "O valor da causa era irrisório"
    ],
    "correta": 1,
    "artigo": "CPC, art. 330, I",
    "explicacao": "A petição inicial é inepta quando não preenche os requisitos legais.",
    "tema": "processo civil"
  },
  {
    "nivel": 2,
    "texto": "Você foi preso em flagrante. O juiz pode converter sua prisão em preventiva?",
    "alternativas": [
      "Sim, sempre",
      "Não, flagrante só cabe relaxamento",
      "Sim, se presentes os requisitos do art. 312 do CPP",
      "Não, pois flagrante é obrigatório"
    ],
    "correta": 2,
    "artigo": "CPP, art. 312",
    "explicacao": "A preventiva pode ser decretada se houver garantia da ordem pública, instrução criminal ou aplicação da lei penal.",
    "tema": "processo penal"
  },
  {
    "nivel": 2,
    "texto": "Você foi multado por dirigir sob influência de álcool. Qual a penalidade prevista no CTB?",
    "alternativas": [
      "Apenas multa",
      "Multa e suspensão do direito de dirigir por 12 meses",
      "Detenção de 6 meses a 3 anos",
      "Advertência por escrito"
    ],
    "correta": 1,
    "artigo": "CTB, art. 165",
    "explicacao": "Infração gravíssima: multa (10 vezes) e suspensão de 12 meses.",
    "tema": "trânsito"
  },
  {
    "nivel": 2,
    "texto": "Uma empresa compartilhou seus dados pessoais sem sua autorização. Qual direito da LGPD foi violado?",
    "alternativas": [
      "Direito à portabilidade",
      "Direito à exclusão dos dados",
      "Consentimento do titular",
      "Direito de acesso"
    ],
    "correta": 2,
    "artigo": "LGPD, art. 7º",
    "explicacao": "O tratamento de dados pessoais exige base legal, sendo o consentimento uma delas.",
    "tema": "lgpd"
  },
  {
    "nivel": 2,
    "texto": "Você comprou um fone de ouvido pela internet e após 80 dias ele parou de funcionar. A loja se recusa a trocar. Qual o prazo legal para reclamar de vício em produto durável? (exemplo adicional)",
    "alternativas": [
      "30 dias",
      "90 dias",
      "180 dias",
      "1 ano"
    ],
    "correta": 1,
    "artigo": "CDC, art. 26, I",
    "explicacao": "Produtos duráveis têm prazo de 90 dias para reclamação de vício aparente. (situação análoga)",
    "tema": "consumidor"
  },
  {
    "nivel": 2,
    "texto": "Um adolescente de 15 anos é flagrado pichando um muro. Qual medida socioeducativa pode ser aplicada? (exemplo adicional)",
    "alternativas": [
      "Advertência",
      "Prestação de serviços à comunidade",
      "Liberdade assistida",
      "Todas as anteriores"
    ],
    "correta": 3,
    "artigo": "ECA, art. 112",
    "explicacao": "O ECA prevê advertência, prestação de serviços, liberdade assistida, entre outras. (situação análoga)",
    "tema": "eca"
  },
  {
    "nivel": 2,
    "texto": "Você foi demitido sem justa causa após 3 anos na empresa. Quantos dias de aviso prévio você tem direito? (exemplo adicional)",
    "alternativas": [
      "30 dias",
      "33 dias",
      "39 dias",
      "90 dias"
    ],
    "correta": 1,
    "artigo": "CLT, art. 487, §1º",
    "explicacao": "30 dias + 3 dias por ano trabalhado (máximo 90). (situação análoga)",
    "tema": "trabalho"
  },
  {
    "nivel": 2,
    "texto": "Você moveu uma ação judicial, mas o juiz indeferiu sua petição inicial por ela ser inepta. O que isso significa? (exemplo adicional)",
    "alternativas": [
      "Faltava endereço do autor",
      "A petição não atendia aos requisitos do art. 319 do CPC",
      "O autor não tinha capacidade de postular",
      "O valor da causa era irrisório"
    ],
    "correta": 1,
    "artigo": "CPC, art. 330, I",
    "explicacao": "A petição inicial é inepta quando não preenche os requisitos legais. (situação análoga)",
    "tema": "processo civil"
  },
  {
    "nivel": 2,
    "texto": "Você foi preso em flagrante. O juiz pode converter sua prisão em preventiva? (exemplo adicional)",
    "alternativas": [
      "Sim, sempre",
      "Não, flagrante só cabe relaxamento",
      "Sim, se presentes os requisitos do art. 312 do CPP",
      "Não, pois flagrante é obrigatório"
    ],
    "correta": 2,
    "artigo": "CPP, art. 312",
    "explicacao": "A preventiva pode ser decretada se houver garantia da ordem pública, instrução criminal ou aplicação da lei penal. (situação análoga)",
    "tema": "processo penal"
  },
  {
    "nivel": 2,
    "texto": "Você foi multado por dirigir sob influência de álcool. Qual a penalidade prevista no CTB? (exemplo adicional)",
    "alternativas": [
      "Apenas multa",
      "Multa e suspensão do direito de dirigir por 12 meses",
      "Detenção de 6 meses a 3 anos",
      "Advertência por escrito"
    ],
    "correta": 1,
    "artigo": "CTB, art. 165",
    "explicacao": "Infração gravíssima: multa (10 vezes) e suspensão de 12 meses. (situação análoga)",
    "tema": "trânsito"
  },
  {
    "nivel": 2,
    "texto": "Uma empresa compartilhou seus dados pessoais sem sua autorização. Qual direito da LGPD foi violado? (exemplo adicional)",
    "alternativas": [
      "Direito à portabilidade",
      "Direito à exclusão dos dados",
      "Consentimento do titular",
      "Direito de acesso"
    ],
    "correta": 2,
    "artigo": "LGPD, art. 7º",
    "explicacao": "O tratamento de dados pessoais exige base legal, sendo o consentimento uma delas. (situação análoga)",
    "tema": "lgpd"
  },
  {
    "nivel": 2,
    "texto": "Você comprou um fone de ouvido pela internet e após 80 dias ele parou de funcionar. A loja se recusa a trocar. Qual o prazo legal para reclamar de vício em produto durável? (exemplo adicional)",
    "alternativas": [
      "30 dias",
      "90 dias",
      "180 dias",
      "1 ano"
    ],
    "correta": 1,
    "artigo": "CDC, art. 26, I",
    "explicacao": "Produtos duráveis têm prazo de 90 dias para reclamação de vício aparente. (situação análoga)",
    "tema": "consumidor"
  },
  {
    "nivel": 2,
    "texto": "Um adolescente de 15 anos é flagrado pichando um muro. Qual medida socioeducativa pode ser aplicada? (exemplo adicional)",
    "alternativas": [
      "Advertência",
      "Prestação de serviços à comunidade",
      "Liberdade assistida",
      "Todas as anteriores"
    ],
    "correta": 3,
    "artigo": "ECA, art. 112",
    "explicacao": "O ECA prevê advertência, prestação de serviços, liberdade assistida, entre outras. (situação análoga)",
    "tema": "eca"
  },
  {
    "nivel": 2,
    "texto": "Você foi demitido sem justa causa após 3 anos na empresa. Quantos dias de aviso prévio você tem direito? (exemplo adicional)",
    "alternativas": [
      "30 dias",
      "33 dias",
      "39 dias",
      "90 dias"
    ],
    "correta": 1,
    "artigo": "CLT, art. 487, §1º",
    "explicacao": "30 dias + 3 dias por ano trabalhado (máximo 90). (situação análoga)",
    "tema": "trabalho"
  },
  {
    "nivel": 2,
    "texto": "Você moveu uma ação judicial, mas o juiz indeferiu sua petição inicial por ela ser inepta. O que isso significa? (exemplo adicional)",
    "alternativas": [
      "Faltava endereço do autor",
      "A petição não atendia aos requisitos do art. 319 do CPC",
      "O autor não tinha capacidade de postular",
      "O valor da causa era irrisório"
    ],
    "correta": 1,
    "artigo": "CPC, art. 330, I",
    "explicacao": "A petição inicial é inepta quando não preenche os requisitos legais. (situação análoga)",
    "tema": "processo civil"
  },
  {
    "nivel": 2,
    "texto": "Você foi preso em flagrante. O juiz pode converter sua prisão em preventiva? (exemplo adicional)",
    "alternativas": [
      "Sim, sempre",
      "Não, flagrante só cabe relaxamento",
      "Sim, se presentes os requisitos do art. 312 do CPP",
      "Não, pois flagrante é obrigatório"
    ],
    "correta": 2,
    "artigo": "CPP, art. 312",
    "explicacao": "A preventiva pode ser decretada se houver garantia da ordem pública, instrução criminal ou aplicação da lei penal. (situação análoga)",
    "tema": "processo penal"
  },
  {
    "nivel": 2,
    "texto": "Você foi multado por dirigir sob influência de álcool. Qual a penalidade prevista no CTB? (exemplo adicional)",
    "alternativas": [
      "Apenas multa",
      "Multa e suspensão do direito de dirigir por 12 meses",
      "Detenção de 6 meses a 3 anos",
      "Advertência por escrito"
    ],
    "correta": 1,
    "artigo": "CTB, art. 165",
    "explicacao": "Infração gravíssima: multa (10 vezes) e suspensão de 12 meses. (situação análoga)",
    "tema": "trânsito"
  },
  {
    "nivel": 2,
    "texto": "Uma empresa compartilhou seus dados pessoais sem sua autorização. Qual direito da LGPD foi violado? (exemplo adicional)",
    "alternativas": [
      "Direito à portabilidade",
      "Direito à exclusão dos dados",
      "Consentimento do titular",
      "Direito de acesso"
    ],
    "correta": 2,
    "artigo": "LGPD, art. 7º",
    "explicacao": "O tratamento de dados pessoais exige base legal, sendo o consentimento uma delas. (situação análoga)",
    "tema": "lgpd"
  },
  {
    "nivel": 2,
    "texto": "Você comprou um fone de ouvido pela internet e após 80 dias ele parou de funcionar. A loja se recusa a trocar. Qual o prazo legal para reclamar de vício em produto durável? (exemplo adicional)",
    "alternativas": [
      "30 dias",
      "90 dias",
      "180 dias",
      "1 ano"
    ],
    "correta": 1,
    "artigo": "CDC, art. 26, I",
    "explicacao": "Produtos duráveis têm prazo de 90 dias para reclamação de vício aparente. (situação análoga)",
    "tema": "consumidor"
  },
  {
    "nivel": 2,
    "texto": "Um adolescente de 15 anos é flagrado pichando um muro. Qual medida socioeducativa pode ser aplicada? (exemplo adicional)",
    "alternativas": [
      "Advertência",
      "Prestação de serviços à comunidade",
      "Liberdade assistida",
      "Todas as anteriores"
    ],
    "correta": 3,
    "artigo": "ECA, art. 112",
    "explicacao": "O ECA prevê advertência, prestação de serviços, liberdade assistida, entre outras. (situação análoga)",
    "tema": "eca"
  },
  {
    "nivel": 2,
    "texto": "Você foi demitido sem justa causa após 3 anos na empresa. Quantos dias de aviso prévio você tem direito? (exemplo adicional)",
    "alternativas": [
      "30 dias",
      "33 dias",
      "39 dias",
      "90 dias"
    ],
    "correta": 1,
    "artigo": "CLT, art. 487, §1º",
    "explicacao": "30 dias + 3 dias por ano trabalhado (máximo 90). (situação análoga)",
    "tema": "trabalho"
  },
  {
    "nivel": 2,
    "texto": "Você moveu uma ação judicial, mas o juiz indeferiu sua petição inicial por ela ser inepta. O que isso significa? (exemplo adicional)",
    "alternativas": [
      "Faltava endereço do autor",
      "A petição não atendia aos requisitos do art. 319 do CPC",
      "O autor não tinha capacidade de postular",
      "O valor da causa era irrisório"
    ],
    "correta": 1,
    "artigo": "CPC, art. 330, I",
    "explicacao": "A petição inicial é inepta quando não preenche os requisitos legais. (situação análoga)",
    "tema": "processo civil"
  },
  {
    "nivel": 2,
    "texto": "Você foi preso em flagrante. O juiz pode converter sua prisão em preventiva? (exemplo adicional)",
    "alternativas": [
      "Sim, sempre",
      "Não, flagrante só cabe relaxamento",
      "Sim, se presentes os requisitos do art. 312 do CPP",
      "Não, pois flagrante é obrigatório"
    ],
    "correta": 2,
    "artigo": "CPP, art. 312",
    "explicacao": "A preventiva pode ser decretada se houver garantia da ordem pública, instrução criminal ou aplicação da lei penal. (situação análoga)",
    "tema": "processo penal"
  },
  {
    "nivel": 2,
    "texto": "Você foi multado por dirigir sob influência de álcool. Qual a penalidade prevista no CTB? (exemplo adicional)",
    "alternativas": [
      "Apenas multa",
      "Multa e suspensão do direito de dirigir por 12 meses",
      "Detenção de 6 meses a 3 anos",
      "Advertência por escrito"
    ],
    "correta": 1,
    "artigo": "CTB, art. 165",
    "explicacao": "Infração gravíssima: multa (10 vezes) e suspensão de 12 meses. (situação análoga)",
    "tema": "trânsito"
  },
  {
    "nivel": 2,
    "texto": "Uma empresa compartilhou seus dados pessoais sem sua autorização. Qual direito da LGPD foi violado? (exemplo adicional)",
    "alternativas": [
      "Direito à portabilidade",
      "Direito à exclusão dos dados",
      "Consentimento do titular",
      "Direito de acesso"
    ],
    "correta": 2,
    "artigo": "LGPD, art. 7º",
    "explicacao": "O tratamento de dados pessoais exige base legal, sendo o consentimento uma delas. (situação análoga)",
    "tema": "lgpd"
  },
  {
    "nivel": 2,
    "texto": "Você comprou um fone de ouvido pela internet e após 80 dias ele parou de funcionar. A loja se recusa a trocar. Qual o prazo legal para reclamar de vício em produto durável? (exemplo adicional)",
    "alternativas": [
      "30 dias",
      "90 dias",
      "180 dias",
      "1 ano"
    ],
    "correta": 1,
    "artigo": "CDC, art. 26, I",
    "explicacao": "Produtos duráveis têm prazo de 90 dias para reclamação de vício aparente. (situação análoga)",
    "tema": "consumidor"
  },
  {
    "nivel": 2,
    "texto": "Um adolescente de 15 anos é flagrado pichando um muro. Qual medida socioeducativa pode ser aplicada? (exemplo adicional)",
    "alternativas": [
      "Advertência",
      "Prestação de serviços à comunidade",
      "Liberdade assistida",
      "Todas as anteriores"
    ],
    "correta": 3,
    "artigo": "ECA, art. 112",
    "explicacao": "O ECA prevê advertência, prestação de serviços, liberdade assistida, entre outras. (situação análoga)",
    "tema": "eca"
  },
  {
    "nivel": 2,
    "texto": "Você foi demitido sem justa causa após 3 anos na empresa. Quantos dias de aviso prévio você tem direito? (exemplo adicional)",
    "alternativas": [
      "30 dias",
      "33 dias",
      "39 dias",
      "90 dias"
    ],
    "correta": 1,
    "artigo": "CLT, art. 487, §1º",
    "explicacao": "30 dias + 3 dias por ano trabalhado (máximo 90). (situação análoga)",
    "tema": "trabalho"
  },
  {
    "nivel": 2,
    "texto": "Você moveu uma ação judicial, mas o juiz indeferiu sua petição inicial por ela ser inepta. O que isso significa? (exemplo adicional)",
    "alternativas": [
      "Faltava endereço do autor",
      "A petição não atendia aos requisitos do art. 319 do CPC",
      "O autor não tinha capacidade de postular",
      "O valor da causa era irrisório"
    ],
    "correta": 1,
    "artigo": "CPC, art. 330, I",
    "explicacao": "A petição inicial é inepta quando não preenche os requisitos legais. (situação análoga)",
    "tema": "processo civil"
  },
  {
    "nivel": 2,
    "texto": "Você foi preso em flagrante. O juiz pode converter sua prisão em preventiva? (exemplo adicional)",
    "alternativas": [
      "Sim, sempre",
      "Não, flagrante só cabe relaxamento",
      "Sim, se presentes os requisitos do art. 312 do CPP",
      "Não, pois flagrante é obrigatório"
    ],
    "correta": 2,
    "artigo": "CPP, art. 312",
    "explicacao": "A preventiva pode ser decretada se houver garantia da ordem pública, instrução criminal ou aplicação da lei penal. (situação análoga)",
    "tema": "processo penal"
  },
  {
    "nivel": 2,
    "texto": "Você foi multado por dirigir sob influência de álcool. Qual a penalidade prevista no CTB? (exemplo adicional)",
    "alternativas": [
      "Apenas multa",
      "Multa e suspensão do direito de dirigir por 12 meses",
      "Detenção de 6 meses a 3 anos",
      "Advertência por escrito"
    ],
    "correta": 1,
    "artigo": "CTB, art. 165",
    "explicacao": "Infração gravíssima: multa (10 vezes) e suspensão de 12 meses. (situação análoga)",
    "tema": "trânsito"
  },
  {
    "nivel": 2,
    "texto": "Uma empresa compartilhou seus dados pessoais sem sua autorização. Qual direito da LGPD foi violado? (exemplo adicional)",
    "alternativas": [
      "Direito à portabilidade",
      "Direito à exclusão dos dados",
      "Consentimento do titular",
      "Direito de acesso"
    ],
    "correta": 2,
    "artigo": "LGPD, art. 7º",
    "explicacao": "O tratamento de dados pessoais exige base legal, sendo o consentimento uma delas. (situação análoga)",
    "tema": "lgpd"
  },
  {
    "nivel": 2,
    "texto": "Você comprou um fone de ouvido pela internet e após 80 dias ele parou de funcionar. A loja se recusa a trocar. Qual o prazo legal para reclamar de vício em produto durável? (exemplo adicional)",
    "alternativas": [
      "30 dias",
      "90 dias",
      "180 dias",
      "1 ano"
    ],
    "correta": 1,
    "artigo": "CDC, art. 26, I",
    "explicacao": "Produtos duráveis têm prazo de 90 dias para reclamação de vício aparente. (situação análoga)",
    "tema": "consumidor"
  },
  {
    "nivel": 2,
    "texto": "Um adolescente de 15 anos é flagrado pichando um muro. Qual medida socioeducativa pode ser aplicada? (exemplo adicional)",
    "alternativas": [
      "Advertência",
      "Prestação de serviços à comunidade",
      "Liberdade assistida",
      "Todas as anteriores"
    ],
    "correta": 3,
    "artigo": "ECA, art. 112",
    "explicacao": "O ECA prevê advertência, prestação de serviços, liberdade assistida, entre outras. (situação análoga)",
    "tema": "eca"
  },
  {
    "nivel": 2,
    "texto": "Você foi demitido sem justa causa após 3 anos na empresa. Quantos dias de aviso prévio você tem direito? (exemplo adicional)",
    "alternativas": [
      "30 dias",
      "33 dias",
      "39 dias",
      "90 dias"
    ],
    "correta": 1,
    "artigo": "CLT, art. 487, §1º",
    "explicacao": "30 dias + 3 dias por ano trabalhado (máximo 90). (situação análoga)",
    "tema": "trabalho"
  },
  {
    "nivel": 2,
    "texto": "Você moveu uma ação judicial, mas o juiz indeferiu sua petição inicial por ela ser inepta. O que isso significa? (exemplo adicional)",
    "alternativas": [
      "Faltava endereço do autor",
      "A petição não atendia aos requisitos do art. 319 do CPC",
      "O autor não tinha capacidade de postular",
      "O valor da causa era irrisório"
    ],
    "correta": 1,
    "artigo": "CPC, art. 330, I",
    "explicacao": "A petição inicial é inepta quando não preenche os requisitos legais. (situação análoga)",
    "tema": "processo civil"
  },
  {
    "nivel": 2,
    "texto": "Você foi preso em flagrante. O juiz pode converter sua prisão em preventiva? (exemplo adicional)",
    "alternativas": [
      "Sim, sempre",
      "Não, flagrante só cabe relaxamento",
      "Sim, se presentes os requisitos do art. 312 do CPP",
      "Não, pois flagrante é obrigatório"
    ],
    "correta": 2,
    "artigo": "CPP, art. 312",
    "explicacao": "A preventiva pode ser decretada se houver garantia da ordem pública, instrução criminal ou aplicação da lei penal. (situação análoga)",
    "tema": "processo penal"
  },
  {
    "nivel": 2,
    "texto": "Você foi multado por dirigir sob influência de álcool. Qual a penalidade prevista no CTB? (exemplo adicional)",
    "alternativas": [
      "Apenas multa",
      "Multa e suspensão do direito de dirigir por 12 meses",
      "Detenção de 6 meses a 3 anos",
      "Advertência por escrito"
    ],
    "correta": 1,
    "artigo": "CTB, art. 165",
    "explicacao": "Infração gravíssima: multa (10 vezes) e suspensão de 12 meses. (situação análoga)",
    "tema": "trânsito"
  },
  {
    "nivel": 2,
    "texto": "Uma empresa compartilhou seus dados pessoais sem sua autorização. Qual direito da LGPD foi violado? (exemplo adicional)",
    "alternativas": [
      "Direito à portabilidade",
      "Direito à exclusão dos dados",
      "Consentimento do titular",
      "Direito de acesso"
    ],
    "correta": 2,
    "artigo": "LGPD, art. 7º",
    "explicacao": "O tratamento de dados pessoais exige base legal, sendo o consentimento uma delas. (situação análoga)",
    "tema": "lgpd"
  },
  {
    "nivel": 2,
    "texto": "Você comprou um fone de ouvido pela internet e após 80 dias ele parou de funcionar. A loja se recusa a trocar. Qual o prazo legal para reclamar de vício em produto durável? (exemplo adicional)",
    "alternativas": [
      "30 dias",
      "90 dias",
      "180 dias",
      "1 ano"
    ],
    "correta": 1,
    "artigo": "CDC, art. 26, I",
    "explicacao": "Produtos duráveis têm prazo de 90 dias para reclamação de vício aparente. (situação análoga)",
    "tema": "consumidor"
  },
  {
    "nivel": 2,
    "texto": "Um adolescente de 15 anos é flagrado pichando um muro. Qual medida socioeducativa pode ser aplicada? (exemplo adicional)",
    "alternativas": [
      "Advertência",
      "Prestação de serviços à comunidade",
      "Liberdade assistida",
      "Todas as anteriores"
    ],
    "correta": 3,
    "artigo": "ECA, art. 112",
    "explicacao": "O ECA prevê advertência, prestação de serviços, liberdade assistida, entre outras. (situação análoga)",
    "tema": "eca"
  },
  {
    "nivel": 2,
    "texto": "Você foi demitido sem justa causa após 3 anos na empresa. Quantos dias de aviso prévio você tem direito? (exemplo adicional)",
    "alternativas": [
      "30 dias",
      "33 dias",
      "39 dias",
      "90 dias"
    ],
    "correta": 1,
    "artigo": "CLT, art. 487, §1º",
    "explicacao": "30 dias + 3 dias por ano trabalhado (máximo 90). (situação análoga)",
    "tema": "trabalho"
  },
  {
    "nivel": 2,
    "texto": "Você moveu uma ação judicial, mas o juiz indeferiu sua petição inicial por ela ser inepta. O que isso significa? (exemplo adicional)",
    "alternativas": [
      "Faltava endereço do autor",
      "A petição não atendia aos requisitos do art. 319 do CPC",
      "O autor não tinha capacidade de postular",
      "O valor da causa era irrisório"
    ],
    "correta": 1,
    "artigo": "CPC, art. 330, I",
    "explicacao": "A petição inicial é inepta quando não preenche os requisitos legais. (situação análoga)",
    "tema": "processo civil"
  },
  {
    "nivel": 2,
    "texto": "Você foi preso em flagrante. O juiz pode converter sua prisão em preventiva? (exemplo adicional)",
    "alternativas": [
      "Sim, sempre",
      "Não, flagrante só cabe relaxamento",
      "Sim, se presentes os requisitos do art. 312 do CPP",
      "Não, pois flagrante é obrigatório"
    ],
    "correta": 2,
    "artigo": "CPP, art. 312",
    "explicacao": "A preventiva pode ser decretada se houver garantia da ordem pública, instrução criminal ou aplicação da lei penal. (situação análoga)",
    "tema": "processo penal"
  },
  {
    "nivel": 2,
    "texto": "Você foi multado por dirigir sob influência de álcool. Qual a penalidade prevista no CTB? (exemplo adicional)",
    "alternativas": [
      "Apenas multa",
      "Multa e suspensão do direito de dirigir por 12 meses",
      "Detenção de 6 meses a 3 anos",
      "Advertência por escrito"
    ],
    "correta": 1,
    "artigo": "CTB, art. 165",
    "explicacao": "Infração gravíssima: multa (10 vezes) e suspensão de 12 meses. (situação análoga)",
    "tema": "trânsito"
  },
  {
    "nivel": 2,
    "texto": "Uma empresa compartilhou seus dados pessoais sem sua autorização. Qual direito da LGPD foi violado? (exemplo adicional)",
    "alternativas": [
      "Direito à portabilidade",
      "Direito à exclusão dos dados",
      "Consentimento do titular",
      "Direito de acesso"
    ],
    "correta": 2,
    "artigo": "LGPD, art. 7º",
    "explicacao": "O tratamento de dados pessoais exige base legal, sendo o consentimento uma delas. (situação análoga)",
    "tema": "lgpd"
  },
  {
    "nivel": 2,
    "texto": "Você comprou um fone de ouvido pela internet e após 80 dias ele parou de funcionar. A loja se recusa a trocar. Qual o prazo legal para reclamar de vício em produto durável? (exemplo adicional)",
    "alternativas": [
      "30 dias",
      "90 dias",
      "180 dias",
      "1 ano"
    ],
    "correta": 1,
    "artigo": "CDC, art. 26, I",
    "explicacao": "Produtos duráveis têm prazo de 90 dias para reclamação de vício aparente. (situação análoga)",
    "tema": "consumidor"
  },
  {
    "nivel": 2,
    "texto": "Um adolescente de 15 anos é flagrado pichando um muro. Qual medida socioeducativa pode ser aplicada? (exemplo adicional)",
    "alternativas": [
      "Advertência",
      "Prestação de serviços à comunidade",
      "Liberdade assistida",
      "Todas as anteriores"
    ],
    "correta": 3,
    "artigo": "ECA, art. 112",
    "explicacao": "O ECA prevê advertência, prestação de serviços, liberdade assistida, entre outras. (situação análoga)",
    "tema": "eca"
  },
  {
    "nivel": 2,
    "texto": "Você foi demitido sem justa causa após 3 anos na empresa. Quantos dias de aviso prévio você tem direito? (exemplo adicional)",
    "alternativas": [
      "30 dias",
      "33 dias",
      "39 dias",
      "90 dias"
    ],
    "correta": 1,
    "artigo": "CLT, art. 487, §1º",
    "explicacao": "30 dias + 3 dias por ano trabalhado (máximo 90). (situação análoga)",
    "tema": "trabalho"
  },
  {
    "nivel": 2,
    "texto": "Você moveu uma ação judicial, mas o juiz indeferiu sua petição inicial por ela ser inepta. O que isso significa? (exemplo adicional)",
    "alternativas": [
      "Faltava endereço do autor",
      "A petição não atendia aos requisitos do art. 319 do CPC",
      "O autor não tinha capacidade de postular",
      "O valor da causa era irrisório"
    ],
    "correta": 1,
    "artigo": "CPC, art. 330, I",
    "explicacao": "A petição inicial é inepta quando não preenche os requisitos legais. (situação análoga)",
    "tema": "processo civil"
  },
  {
    "nivel": 2,
    "texto": "Você foi preso em flagrante. O juiz pode converter sua prisão em preventiva? (exemplo adicional)",
    "alternativas": [
      "Sim, sempre",
      "Não, flagrante só cabe relaxamento",
      "Sim, se presentes os requisitos do art. 312 do CPP",
      "Não, pois flagrante é obrigatório"
    ],
    "correta": 2,
    "artigo": "CPP, art. 312",
    "explicacao": "A preventiva pode ser decretada se houver garantia da ordem pública, instrução criminal ou aplicação da lei penal. (situação análoga)",
    "tema": "processo penal"
  },
  {
    "nivel": 2,
    "texto": "Você foi multado por dirigir sob influência de álcool. Qual a penalidade prevista no CTB? (exemplo adicional)",
    "alternativas": [
      "Apenas multa",
      "Multa e suspensão do direito de dirigir por 12 meses",
      "Detenção de 6 meses a 3 anos",
      "Advertência por escrito"
    ],
    "correta": 1,
    "artigo": "CTB, art. 165",
    "explicacao": "Infração gravíssima: multa (10 vezes) e suspensão de 12 meses. (situação análoga)",
    "tema": "trânsito"
  },
  {
    "nivel": 2,
    "texto": "Uma empresa compartilhou seus dados pessoais sem sua autorização. Qual direito da LGPD foi violado? (exemplo adicional)",
    "alternativas": [
      "Direito à portabilidade",
      "Direito à exclusão dos dados",
      "Consentimento do titular",
      "Direito de acesso"
    ],
    "correta": 2,
    "artigo": "LGPD, art. 7º",
    "explicacao": "O tratamento de dados pessoais exige base legal, sendo o consentimento uma delas. (situação análoga)",
    "tema": "lgpd"
  },
  {
    "nivel": 2,
    "texto": "Você comprou um fone de ouvido pela internet e após 80 dias ele parou de funcionar. A loja se recusa a trocar. Qual o prazo legal para reclamar de vício em produto durável? (exemplo adicional)",
    "alternativas": [
      "30 dias",
      "90 dias",
      "180 dias",
      "1 ano"
    ],
    "correta": 1,
    "artigo": "CDC, art. 26, I",
    "explicacao": "Produtos duráveis têm prazo de 90 dias para reclamação de vício aparente. (situação análoga)",
    "tema": "consumidor"
  },
  {
    "nivel": 2,
    "texto": "Um adolescente de 15 anos é flagrado pichando um muro. Qual medida socioeducativa pode ser aplicada? (exemplo adicional)",
    "alternativas": [
      "Advertência",
      "Prestação de serviços à comunidade",
      "Liberdade assistida",
      "Todas as anteriores"
    ],
    "correta": 3,
    "artigo": "ECA, art. 112",
    "explicacao": "O ECA prevê advertência, prestação de serviços, liberdade assistida, entre outras. (situação análoga)",
    "tema": "eca"
  },
  {
    "nivel": 2,
    "texto": "Você foi demitido sem justa causa após 3 anos na empresa. Quantos dias de aviso prévio você tem direito? (exemplo adicional)",
    "alternativas": [
      "30 dias",
      "33 dias",
      "39 dias",
      "90 dias"
    ],
    "correta": 1,
    "artigo": "CLT, art. 487, §1º",
    "explicacao": "30 dias + 3 dias por ano trabalhado (máximo 90). (situação análoga)",
    "tema": "trabalho"
  },
  {
    "nivel": 2,
    "texto": "Você moveu uma ação judicial, mas o juiz indeferiu sua petição inicial por ela ser inepta. O que isso significa? (exemplo adicional)",
    "alternativas": [
      "Faltava endereço do autor",
      "A petição não atendia aos requisitos do art. 319 do CPC",
      "O autor não tinha capacidade de postular",
      "O valor da causa era irrisório"
    ],
    "correta": 1,
    "artigo": "CPC, art. 330, I",
    "explicacao": "A petição inicial é inepta quando não preenche os requisitos legais. (situação análoga)",
    "tema": "processo civil"
  },
  {
    "nivel": 2,
    "texto": "Você foi preso em flagrante. O juiz pode converter sua prisão em preventiva? (exemplo adicional)",
    "alternativas": [
      "Sim, sempre",
      "Não, flagrante só cabe relaxamento",
      "Sim, se presentes os requisitos do art. 312 do CPP",
      "Não, pois flagrante é obrigatório"
    ],
    "correta": 2,
    "artigo": "CPP, art. 312",
    "explicacao": "A preventiva pode ser decretada se houver garantia da ordem pública, instrução criminal ou aplicação da lei penal. (situação análoga)",
    "tema": "processo penal"
  },
  {
    "nivel": 2,
    "texto": "Você foi multado por dirigir sob influência de álcool. Qual a penalidade prevista no CTB? (exemplo adicional)",
    "alternativas": [
      "Apenas multa",
      "Multa e suspensão do direito de dirigir por 12 meses",
      "Detenção de 6 meses a 3 anos",
      "Advertência por escrito"
    ],
    "correta": 1,
    "artigo": "CTB, art. 165",
    "explicacao": "Infração gravíssima: multa (10 vezes) e suspensão de 12 meses. (situação análoga)",
    "tema": "trânsito"
  },
  {
    "nivel": 2,
    "texto": "Uma empresa compartilhou seus dados pessoais sem sua autorização. Qual direito da LGPD foi violado? (exemplo adicional)",
    "alternativas": [
      "Direito à portabilidade",
      "Direito à exclusão dos dados",
      "Consentimento do titular",
      "Direito de acesso"
    ],
    "correta": 2,
    "artigo": "LGPD, art. 7º",
    "explicacao": "O tratamento de dados pessoais exige base legal, sendo o consentimento uma delas. (situação análoga)",
    "tema": "lgpd"
  },
  {
    "nivel": 2,
    "texto": "Você comprou um fone de ouvido pela internet e após 80 dias ele parou de funcionar. A loja se recusa a trocar. Qual o prazo legal para reclamar de vício em produto durável? (exemplo adicional)",
    "alternativas": [
      "30 dias",
      "90 dias",
      "180 dias",
      "1 ano"
    ],
    "correta": 1,
    "artigo": "CDC, art. 26, I",
    "explicacao": "Produtos duráveis têm prazo de 90 dias para reclamação de vício aparente. (situação análoga)",
    "tema": "consumidor"
  },
  {
    "nivel": 2,
    "texto": "Um adolescente de 15 anos é flagrado pichando um muro. Qual medida socioeducativa pode ser aplicada? (exemplo adicional)",
    "alternativas": [
      "Advertência",
      "Prestação de serviços à comunidade",
      "Liberdade assistida",
      "Todas as anteriores"
    ],
    "correta": 3,
    "artigo": "ECA, art. 112",
    "explicacao": "O ECA prevê advertência, prestação de serviços, liberdade assistida, entre outras. (situação análoga)",
    "tema": "eca"
  },
  {
    "nivel": 2,
    "texto": "Você foi demitido sem justa causa após 3 anos na empresa. Quantos dias de aviso prévio você tem direito? (exemplo adicional)",
    "alternativas": [
      "30 dias",
      "33 dias",
      "39 dias",
      "90 dias"
    ],
    "correta": 1,
    "artigo": "CLT, art. 487, §1º",
    "explicacao": "30 dias + 3 dias por ano trabalhado (máximo 90). (situação análoga)",
    "tema": "trabalho"
  },
  {
    "nivel": 2,
    "texto": "Você moveu uma ação judicial, mas o juiz indeferiu sua petição inicial por ela ser inepta. O que isso significa? (exemplo adicional)",
    "alternativas": [
      "Faltava endereço do autor",
      "A petição não atendia aos requisitos do art. 319 do CPC",
      "O autor não tinha capacidade de postular",
      "O valor da causa era irrisório"
    ],
    "correta": 1,
    "artigo": "CPC, art. 330, I",
    "explicacao": "A petição inicial é inepta quando não preenche os requisitos legais. (situação análoga)",
    "tema": "processo civil"
  },
  {
    "nivel": 2,
    "texto": "Você foi preso em flagrante. O juiz pode converter sua prisão em preventiva? (exemplo adicional)",
    "alternativas": [
      "Sim, sempre",
      "Não, flagrante só cabe relaxamento",
      "Sim, se presentes os requisitos do art. 312 do CPP",
      "Não, pois flagrante é obrigatório"
    ],
    "correta": 2,
    "artigo": "CPP, art. 312",
    "explicacao": "A preventiva pode ser decretada se houver garantia da ordem pública, instrução criminal ou aplicação da lei penal. (situação análoga)",
    "tema": "processo penal"
  },
  {
    "nivel": 2,
    "texto": "Você foi multado por dirigir sob influência de álcool. Qual a penalidade prevista no CTB? (exemplo adicional)",
    "alternativas": [
      "Apenas multa",
      "Multa e suspensão do direito de dirigir por 12 meses",
      "Detenção de 6 meses a 3 anos",
      "Advertência por escrito"
    ],
    "correta": 1,
    "artigo": "CTB, art. 165",
    "explicacao": "Infração gravíssima: multa (10 vezes) e suspensão de 12 meses. (situação análoga)",
    "tema": "trânsito"
  },
  {
    "nivel": 2,
    "texto": "Uma empresa compartilhou seus dados pessoais sem sua autorização. Qual direito da LGPD foi violado? (exemplo adicional)",
    "alternativas": [
      "Direito à portabilidade",
      "Direito à exclusão dos dados",
      "Consentimento do titular",
      "Direito de acesso"
    ],
    "correta": 2,
    "artigo": "LGPD, art. 7º",
    "explicacao": "O tratamento de dados pessoais exige base legal, sendo o consentimento uma delas. (situação análoga)",
    "tema": "lgpd"
  },
  {
    "nivel": 2,
    "texto": "Você comprou um fone de ouvido pela internet e após 80 dias ele parou de funcionar. A loja se recusa a trocar. Qual o prazo legal para reclamar de vício em produto durável? (exemplo adicional)",
    "alternativas": [
      "30 dias",
      "90 dias",
      "180 dias",
      "1 ano"
    ],
    "correta": 1,
    "artigo": "CDC, art. 26, I",
    "explicacao": "Produtos duráveis têm prazo de 90 dias para reclamação de vício aparente. (situação análoga)",
    "tema": "consumidor"
  },
  {
    "nivel": 2,
    "texto": "Um adolescente de 15 anos é flagrado pichando um muro. Qual medida socioeducativa pode ser aplicada? (exemplo adicional)",
    "alternativas": [
      "Advertência",
      "Prestação de serviços à comunidade",
      "Liberdade assistida",
      "Todas as anteriores"
    ],
    "correta": 3,
    "artigo": "ECA, art. 112",
    "explicacao": "O ECA prevê advertência, prestação de serviços, liberdade assistida, entre outras. (situação análoga)",
    "tema": "eca"
  },
  {
    "nivel": 2,
    "texto": "Você foi demitido sem justa causa após 3 anos na empresa. Quantos dias de aviso prévio você tem direito? (exemplo adicional)",
    "alternativas": [
      "30 dias",
      "33 dias",
      "39 dias",
      "90 dias"
    ],
    "correta": 1,
    "artigo": "CLT, art. 487, §1º",
    "explicacao": "30 dias + 3 dias por ano trabalhado (máximo 90). (situação análoga)",
    "tema": "trabalho"
  },
  {
    "nivel": 2,
    "texto": "Você moveu uma ação judicial, mas o juiz indeferiu sua petição inicial por ela ser inepta. O que isso significa? (exemplo adicional)",
    "alternativas": [
      "Faltava endereço do autor",
      "A petição não atendia aos requisitos do art. 319 do CPC",
      "O autor não tinha capacidade de postular",
      "O valor da causa era irrisório"
    ],
    "correta": 1,
    "artigo": "CPC, art. 330, I",
    "explicacao": "A petição inicial é inepta quando não preenche os requisitos legais. (situação análoga)",
    "tema": "processo civil"
  },
  {
    "nivel": 2,
    "texto": "Você foi preso em flagrante. O juiz pode converter sua prisão em preventiva? (exemplo adicional)",
    "alternativas": [
      "Sim, sempre",
      "Não, flagrante só cabe relaxamento",
      "Sim, se presentes os requisitos do art. 312 do CPP",
      "Não, pois flagrante é obrigatório"
    ],
    "correta": 2,
    "artigo": "CPP, art. 312",
    "explicacao": "A preventiva pode ser decretada se houver garantia da ordem pública, instrução criminal ou aplicação da lei penal. (situação análoga)",
    "tema": "processo penal"
  },
  {
    "nivel": 2,
    "texto": "Você foi multado por dirigir sob influência de álcool. Qual a penalidade prevista no CTB? (exemplo adicional)",
    "alternativas": [
      "Apenas multa",
      "Multa e suspensão do direito de dirigir por 12 meses",
      "Detenção de 6 meses a 3 anos",
      "Advertência por escrito"
    ],
    "correta": 1,
    "artigo": "CTB, art. 165",
    "explicacao": "Infração gravíssima: multa (10 vezes) e suspensão de 12 meses. (situação análoga)",
    "tema": "trânsito"
  },
  {
    "nivel": 2,
    "texto": "Uma empresa compartilhou seus dados pessoais sem sua autorização. Qual direito da LGPD foi violado? (exemplo adicional)",
    "alternativas": [
      "Direito à portabilidade",
      "Direito à exclusão dos dados",
      "Consentimento do titular",
      "Direito de acesso"
    ],
    "correta": 2,
    "artigo": "LGPD, art. 7º",
    "explicacao": "O tratamento de dados pessoais exige base legal, sendo o consentimento uma delas. (situação análoga)",
    "tema": "lgpd"
  },
  {
    "nivel": 2,
    "texto": "Você comprou um fone de ouvido pela internet e após 80 dias ele parou de funcionar. A loja se recusa a trocar. Qual o prazo legal para reclamar de vício em produto durável? (exemplo adicional)",
    "alternativas": [
      "30 dias",
      "90 dias",
      "180 dias",
      "1 ano"
    ],
    "correta": 1,
    "artigo": "CDC, art. 26, I",
    "explicacao": "Produtos duráveis têm prazo de 90 dias para reclamação de vício aparente. (situação análoga)",
    "tema": "consumidor"
  },
  {
    "nivel": 2,
    "texto": "Um adolescente de 15 anos é flagrado pichando um muro. Qual medida socioeducativa pode ser aplicada? (exemplo adicional)",
    "alternativas": [
      "Advertência",
      "Prestação de serviços à comunidade",
      "Liberdade assistida",
      "Todas as anteriores"
    ],
    "correta": 3,
    "artigo": "ECA, art. 112",
    "explicacao": "O ECA prevê advertência, prestação de serviços, liberdade assistida, entre outras. (situação análoga)",
    "tema": "eca"
  },
  {
    "nivel": 2,
    "texto": "Você foi demitido sem justa causa após 3 anos na empresa. Quantos dias de aviso prévio você tem direito? (exemplo adicional)",
    "alternativas": [
      "30 dias",
      "33 dias",
      "39 dias",
      "90 dias"
    ],
    "correta": 1,
    "artigo": "CLT, art. 487, §1º",
    "explicacao": "30 dias + 3 dias por ano trabalhado (máximo 90). (situação análoga)",
    "tema": "trabalho"
  },
  {
    "nivel": 2,
    "texto": "Você moveu uma ação judicial, mas o juiz indeferiu sua petição inicial por ela ser inepta. O que isso significa? (exemplo adicional)",
    "alternativas": [
      "Faltava endereço do autor",
      "A petição não atendia aos requisitos do art. 319 do CPC",
      "O autor não tinha capacidade de postular",
      "O valor da causa era irrisório"
    ],
    "correta": 1,
    "artigo": "CPC, art. 330, I",
    "explicacao": "A petição inicial é inepta quando não preenche os requisitos legais. (situação análoga)",
    "tema": "processo civil"
  },
  {
    "nivel": 2,
    "texto": "Você foi preso em flagrante. O juiz pode converter sua prisão em preventiva? (exemplo adicional)",
    "alternativas": [
      "Sim, sempre",
      "Não, flagrante só cabe relaxamento",
      "Sim, se presentes os requisitos do art. 312 do CPP",
      "Não, pois flagrante é obrigatório"
    ],
    "correta": 2,
    "artigo": "CPP, art. 312",
    "explicacao": "A preventiva pode ser decretada se houver garantia da ordem pública, instrução criminal ou aplicação da lei penal. (situação análoga)",
    "tema": "processo penal"
  },
  {
    "nivel": 2,
    "texto": "Você foi multado por dirigir sob influência de álcool. Qual a penalidade prevista no CTB? (exemplo adicional)",
    "alternativas": [
      "Apenas multa",
      "Multa e suspensão do direito de dirigir por 12 meses",
      "Detenção de 6 meses a 3 anos",
      "Advertência por escrito"
    ],
    "correta": 1,
    "artigo": "CTB, art. 165",
    "explicacao": "Infração gravíssima: multa (10 vezes) e suspensão de 12 meses. (situação análoga)",
    "tema": "trânsito"
  },
  {
    "nivel": 2,
    "texto": "Uma empresa compartilhou seus dados pessoais sem sua autorização. Qual direito da LGPD foi violado? (exemplo adicional)",
    "alternativas": [
      "Direito à portabilidade",
      "Direito à exclusão dos dados",
      "Consentimento do titular",
      "Direito de acesso"
    ],
    "correta": 2,
    "artigo": "LGPD, art. 7º",
    "explicacao": "O tratamento de dados pessoais exige base legal, sendo o consentimento uma delas. (situação análoga)",
    "tema": "lgpd"
  },
  {
    "nivel": 2,
    "texto": "Você comprou um fone de ouvido pela internet e após 80 dias ele parou de funcionar. A loja se recusa a trocar. Qual o prazo legal para reclamar de vício em produto durável? (exemplo adicional)",
    "alternativas": [
      "30 dias",
      "90 dias",
      "180 dias",
      "1 ano"
    ],
    "correta": 1,
    "artigo": "CDC, art. 26, I",
    "explicacao": "Produtos duráveis têm prazo de 90 dias para reclamação de vício aparente. (situação análoga)",
    "tema": "consumidor"
  },
  {
    "nivel": 2,
    "texto": "Um adolescente de 15 anos é flagrado pichando um muro. Qual medida socioeducativa pode ser aplicada? (exemplo adicional)",
    "alternativas": [
      "Advertência",
      "Prestação de serviços à comunidade",
      "Liberdade assistida",
      "Todas as anteriores"
    ],
    "correta": 3,
    "artigo": "ECA, art. 112",
    "explicacao": "O ECA prevê advertência, prestação de serviços, liberdade assistida, entre outras. (situação análoga)",
    "tema": "eca"
  },
  {
    "nivel": 2,
    "texto": "Você foi demitido sem justa causa após 3 anos na empresa. Quantos dias de aviso prévio você tem direito? (exemplo adicional)",
    "alternativas": [
      "30 dias",
      "33 dias",
      "39 dias",
      "90 dias"
    ],
    "correta": 1,
    "artigo": "CLT, art. 487, §1º",
    "explicacao": "30 dias + 3 dias por ano trabalhado (máximo 90). (situação análoga)",
    "tema": "trabalho"
  },
  {
    "nivel": 2,
    "texto": "Você moveu uma ação judicial, mas o juiz indeferiu sua petição inicial por ela ser inepta. O que isso significa? (exemplo adicional)",
    "alternativas": [
      "Faltava endereço do autor",
      "A petição não atendia aos requisitos do art. 319 do CPC",
      "O autor não tinha capacidade de postular",
      "O valor da causa era irrisório"
    ],
    "correta": 1,
    "artigo": "CPC, art. 330, I",
    "explicacao": "A petição inicial é inepta quando não preenche os requisitos legais. (situação análoga)",
    "tema": "processo civil"
  },
  {
    "nivel": 2,
    "texto": "Você foi preso em flagrante. O juiz pode converter sua prisão em preventiva? (exemplo adicional)",
    "alternativas": [
      "Sim, sempre",
      "Não, flagrante só cabe relaxamento",
      "Sim, se presentes os requisitos do art. 312 do CPP",
      "Não, pois flagrante é obrigatório"
    ],
    "correta": 2,
    "artigo": "CPP, art. 312",
    "explicacao": "A preventiva pode ser decretada se houver garantia da ordem pública, instrução criminal ou aplicação da lei penal. (situação análoga)",
    "tema": "processo penal"
  },
  {
    "nivel": 2,
    "texto": "Você foi multado por dirigir sob influência de álcool. Qual a penalidade prevista no CTB? (exemplo adicional)",
    "alternativas": [
      "Apenas multa",
      "Multa e suspensão do direito de dirigir por 12 meses",
      "Detenção de 6 meses a 3 anos",
      "Advertência por escrito"
    ],
    "correta": 1,
    "artigo": "CTB, art. 165",
    "explicacao": "Infração gravíssima: multa (10 vezes) e suspensão de 12 meses. (situação análoga)",
    "tema": "trânsito"
  },
  {
    "nivel": 2,
    "texto": "Uma empresa compartilhou seus dados pessoais sem sua autorização. Qual direito da LGPD foi violado? (exemplo adicional)",
    "alternativas": [
      "Direito à portabilidade",
      "Direito à exclusão dos dados",
      "Consentimento do titular",
      "Direito de acesso"
    ],
    "correta": 2,
    "artigo": "LGPD, art. 7º",
    "explicacao": "O tratamento de dados pessoais exige base legal, sendo o consentimento uma delas. (situação análoga)",
    "tema": "lgpd"
  },
  {
    "nivel": 2,
    "texto": "Você comprou um fone de ouvido pela internet e após 80 dias ele parou de funcionar. A loja se recusa a trocar. Qual o prazo legal para reclamar de vício em produto durável? (exemplo adicional)",
    "alternativas": [
      "30 dias",
      "90 dias",
      "180 dias",
      "1 ano"
    ],
    "correta": 1,
    "artigo": "CDC, art. 26, I",
    "explicacao": "Produtos duráveis têm prazo de 90 dias para reclamação de vício aparente. (situação análoga)",
    "tema": "consumidor"
  },
  {
    "nivel": 2,
    "texto": "Um adolescente de 15 anos é flagrado pichando um muro. Qual medida socioeducativa pode ser aplicada? (exemplo adicional)",
    "alternativas": [
      "Advertência",
      "Prestação de serviços à comunidade",
      "Liberdade assistida",
      "Todas as anteriores"
    ],
    "correta": 3,
    "artigo": "ECA, art. 112",
    "explicacao": "O ECA prevê advertência, prestação de serviços, liberdade assistida, entre outras. (situação análoga)",
    "tema": "eca"
  },
  {
    "nivel": 2,
    "texto": "Você foi demitido sem justa causa após 3 anos na empresa. Quantos dias de aviso prévio você tem direito? (exemplo adicional)",
    "alternativas": [
      "30 dias",
      "33 dias",
      "39 dias",
      "90 dias"
    ],
    "correta": 1,
    "artigo": "CLT, art. 487, §1º",
    "explicacao": "30 dias + 3 dias por ano trabalhado (máximo 90). (situação análoga)",
    "tema": "trabalho"
  },
  {
    "nivel": 2,
    "texto": "Você moveu uma ação judicial, mas o juiz indeferiu sua petição inicial por ela ser inepta. O que isso significa? (exemplo adicional)",
    "alternativas": [
      "Faltava endereço do autor",
      "A petição não atendia aos requisitos do art. 319 do CPC",
      "O autor não tinha capacidade de postular",
      "O valor da causa era irrisório"
    ],
    "correta": 1,
    "artigo": "CPC, art. 330, I",
    "explicacao": "A petição inicial é inepta quando não preenche os requisitos legais. (situação análoga)",
    "tema": "processo civil"
  },
  {
    "nivel": 2,
    "texto": "Você foi preso em flagrante. O juiz pode converter sua prisão em preventiva? (exemplo adicional)",
    "alternativas": [
      "Sim, sempre",
      "Não, flagrante só cabe relaxamento",
      "Sim, se presentes os requisitos do art. 312 do CPP",
      "Não, pois flagrante é obrigatório"
    ],
    "correta": 2,
    "artigo": "CPP, art. 312",
    "explicacao": "A preventiva pode ser decretada se houver garantia da ordem pública, instrução criminal ou aplicação da lei penal. (situação análoga)",
    "tema": "processo penal"
  },
  {
    "nivel": 2,
    "texto": "Você foi multado por dirigir sob influência de álcool. Qual a penalidade prevista no CTB? (exemplo adicional)",
    "alternativas": [
      "Apenas multa",
      "Multa e suspensão do direito de dirigir por 12 meses",
      "Detenção de 6 meses a 3 anos",
      "Advertência por escrito"
    ],
    "correta": 1,
    "artigo": "CTB, art. 165",
    "explicacao": "Infração gravíssima: multa (10 vezes) e suspensão de 12 meses. (situação análoga)",
    "tema": "trânsito"
  },
  {
    "nivel": 2,
    "texto": "Uma empresa compartilhou seus dados pessoais sem sua autorização. Qual direito da LGPD foi violado? (exemplo adicional)",
    "alternativas": [
      "Direito à portabilidade",
      "Direito à exclusão dos dados",
      "Consentimento do titular",
      "Direito de acesso"
    ],
    "correta": 2,
    "artigo": "LGPD, art. 7º",
    "explicacao": "O tratamento de dados pessoais exige base legal, sendo o consentimento uma delas. (situação análoga)",
    "tema": "lgpd"
  },
  {
    "nivel": 2,
    "texto": "Você comprou um fone de ouvido pela internet e após 80 dias ele parou de funcionar. A loja se recusa a trocar. Qual o prazo legal para reclamar de vício em produto durável? (exemplo adicional)",
    "alternativas": [
      "30 dias",
      "90 dias",
      "180 dias",
      "1 ano"
    ],
    "correta": 1,
    "artigo": "CDC, art. 26, I",
    "explicacao": "Produtos duráveis têm prazo de 90 dias para reclamação de vício aparente. (situação análoga)",
    "tema": "consumidor"
  },
  {
    "nivel": 2,
    "texto": "Um adolescente de 15 anos é flagrado pichando um muro. Qual medida socioeducativa pode ser aplicada? (exemplo adicional)",
    "alternativas": [
      "Advertência",
      "Prestação de serviços à comunidade",
      "Liberdade assistida",
      "Todas as anteriores"
    ],
    "correta": 3,
    "artigo": "ECA, art. 112",
    "explicacao": "O ECA prevê advertência, prestação de serviços, liberdade assistida, entre outras. (situação análoga)",
    "tema": "eca"
  }
]
if (typeof module !== "undefined" && module.exports) module.exports = bancoPerguntas;
else window.bancoPerguntas = bancoPerguntas;