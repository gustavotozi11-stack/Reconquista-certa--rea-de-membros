import { DayItem } from '../types';

export const DAYS_DATA: DayItem[] = [
  {
    id: 1,
    title: 'Pare de agir por impulso',
    subtitle: 'Reconhecer emoções e criar uma pausa antes de enviar mensagens',
    estimatedTime: '15 min',
    objective: 'Interromper o ciclo de reações automáticas causadas pela ansiedade imediata e estabelecer a regra da pausa consciente.',
    lesson: `O término ou o afastamento em um relacionamento gera uma descarga intensa de cortisol e adrenalina. Seu cérebro interpreta essa quebra de vínculo como uma ameaça de sobrevivência imediata. É essa biologia que faz você sentir a urgência incontrolável de enviar uma mensagem, ligar de madrugada, pedir explicações ou vigiar as redes sociais dela.

O problema é que agir sob o comando do desespero quase sempre piora a situação. Quando você manda uma mensagem no calor da emoção, o objetivo não é se comunicar: é tentar anestesiar a sua própria dor forçando uma resposta da outra pessoa. Isso transmite desespero, desrespeita o momento de ambos e diminui o seu valor pessoal.

Maturidade não é deixar de sentir dor ou medo; maturidade é o espaço que você cria entre o que sente e o que você escolhe fazer. A partir de hoje, você não vai fingir que não se importa nem reprimir sua dor. Você vai adotar um protocolo simples: a pausa de 24 horas. Qualquer pensamento de contato, desabafo ou confronto deve passar pelo filtro do tempo e ser colocado no papel antes de ir para qualquer tela.`,
    challenge: {
      title: 'A Regra da Barreira Digital',
      duration: '15 min',
      description: 'Crie barreiras físicas e práticas entre seu impulso e seus aplicativos de comunicação.',
      steps: [
        'Mude as notificações do contato dela para silencioso ou arquivado, evitando alertas visuais imediatos.',
        'Se você costuma digitar e apagar mensagens, abra o bloco de notas do celular e digite tudo lá, nunca no chat.',
        'Defina um compromisso consigo mesmo: se sentir o impulso de escrever, você esperará 24 horas antes de qualquer ação.'
      ]
    },
    checklist: [
      { id: 'd1-t1', text: 'Silenciei ou arquivei conversas para evitar gatilhos visuais imediatos' },
      { id: 'd1-t2', text: 'Identifiquei qual emoção antecede a vontade de mandar mensagem (medo, solidão ou culpa)' },
      { id: 'd1-t3', text: 'Assumi o compromisso de aplicar a pausa de 24 horas antes de qualquer impulso digital' },
      { id: 'd1-t4', text: 'Escrevi no papel ou nas anotações o que sinto em vez de enviar para a outra pessoa' }
    ],
    reflection: {
      prompt: 'Observe seus últimos comportamentos diante da incerteza:',
      questions: [
        'O que você esperava aliviar dentro de si quando agiu por impulso nos últimos dias?',
        'Qual foi o resultado real dessas tentativas imediatas de contato?',
        'Como você se sente consigo mesmo quando consegue esperar antes de reagir?'
      ]
    },
    commonMistake: {
      title: 'Acreditar que o silêncio de hoje significa esquecimento definitivo',
      explanation: 'Muitos homens acreditam que precisam marcar presença constante para não serem esquecidos, mas a insistência gera saturação e repulsa.',
      solution: 'Dê ar para a situação. O respeito ao espaço é a demonstração mais sólida de equilíbrio emocional que você pode dar agora.'
    }
  },
  {
    id: 2,
    title: 'Entenda o que aconteceu',
    subtitle: 'Separar fatos, interpretações e responsabilidades sem culpar apenas uma pessoa',
    estimatedTime: '20 min',
    objective: 'Analisar o término com clareza racional, distinguindo os acontecimentos concretos das narrativas dolorosas criadas pela sua mente.',
    lesson: `Após o término, nossa mente entra em dois extremos destrutivos: ou você se coloca como o único culpado por tudo de ruim que aconteceu, ou assume o papel de vítima injustiçada culpando exclusivamente ela. Nenhuma dessas visões reflete a realidade.

Um relacionamento é uma construção a dois. Dificilmente um casal termina por um único evento isolado; na maioria das vezes, o rompimento é o acúmulo de pequenos desgastes, desalinhamento de expectativas, falhas de comunicação ou perda de admiração ao longo dos meses.

Para recuperar sua dignidade e clareza, você precisa separar com precisão cirúrgica três coisas:
1. Fatos: o que realmente aconteceu, palpável e verificável (ex.: "nós brigamos sobre planos de futuro").
2. Interpretações: o significado que você atribuiu ao fato (ex.: "ela nunca gostou de mim de verdade").
3. Responsabilidades: a parcela que competia a você (suas atitudes, reatividades, omissões) versus a parcela que competia a ela.

Assumir a sua parte com serenidade não diminui você; ao contrário, liberta. Você só pode transformar aquilo pelo qual assume responsabilidade.`,
    challenge: {
      title: 'Mapeamento de Fatos vs. Interpretações',
      duration: '15 min',
      description: 'Divida os acontecimentos em colunas mentais para desarmar narrativas distorcidas.',
      steps: [
        'Escreva 3 fatos concretos que antecederam o término.',
        'Identifique qual interpretação exagerada você vinha repetindo na cabeça.',
        'Defina honestamente 2 atitudes suas que contribuíram para o desgaste e 2 atitudes dela.'
      ]
    },
    checklist: [
      { id: 'd2-t1', text: 'Separei pelo menos 2 fatos concretos das suposições geradas pela ansiedade' },
      { id: 'd2-t2', text: 'Reconheci minha parcela de responsabilidade sem entrar em autoflagelação' },
      { id: 'd2-t3', text: 'Reconheci a parcela de responsabilidade dela sem julgamentos agressivos' },
      { id: 'd2-t4', text: 'Compreendi que o término é resultado de uma dinâmica acumulada e não de um instante' }
    ],
    reflection: {
      prompt: 'Reflita sobre os padrões do relacionamento:',
      questions: [
        'Quais reclamações legítimas ela fez nos últimos meses que foram ignoradas na época?',
        'Quais necessidades suas não estavam sendo atendidas nessa dinâmica?',
        'O que você precisaria mudar em você mesmo, mesmo que nunca mais volte com ela?'
      ]
    },
    commonMistake: {
      title: 'Tentar convencer a outra pessoa usando argumentos lógicos',
      explanation: 'Decisões afetivas não são revertidas com debates, apresentações de argumentos ou contestações de quem errou mais.',
      solution: 'Aceite o momento atual como um fato. A mudança só é percebida através de tempo e coerência, não de debates explicativos.'
    }
  },
  {
    id: 3,
    title: 'Respeite o espaço dela',
    subtitle: 'Entender limites e diferenciar uma pausa respeitosa de usar o silêncio como punição',
    estimatedTime: '15 min',
    objective: 'Compreender o real significado de respeitar limites e romper com jogos psicológicos ou manipulações de silêncio.',
    lesson: `Na internet, proliferam conteúdos que vendem o "contato zero" como uma tática mágica para fazer a ex-parceira sofrer, sentir ciúmes e implorar para voltar. Essa mentalidade é infantil, manipuladora e quase sempre produz o efeito oposto.

Quando alguém pede espaço ou decide terminar, insistir é uma violação de fronteiras que transmite desespero e desrespeito à vontade dela. Respeitar o espaço da outra pessoa não é uma estratégia de guerra fria; é um ato básico de decência e honradez com a história que vocês construíram.

Existe uma diferença abissal entre duas posturas:
- O silêncio punitivo: afastar-se na esperança de que ela se desespere, vigiando cada passo dela e guardando ressentimento.
- A pausa respeitosa: dar um passo atrás porque você compreende que ambos precisam de clareza, oxigênio emocional e tempo para que a poeira assente.

Se ela pediu para não ser procurada, acate com total sobriedade. Não mande mensagens por terceiros, não finja emergências e não publique provocações nas redes. O silêncio saudável protege você de passar vergonha e oferece a ela a oportunidade de respirar sem pressão.`,
    challenge: {
      title: 'Pacto de Não-Invasão',
      duration: '10 min',
      description: 'Assuma uma postura de contenção e elegância no trato com o espaço alheio.',
      steps: [
        'Cancele qualquer plano de mandar recados por amigos em comum ou familiares.',
        'Se você tiver itens pendentes para devolver, combine de forma neutra e prática sem usar isso como pretexto.',
        'Guarde seu celular em outro cômodo ao deitar para evitar navegação compulsiva.'
      ]
    },
    checklist: [
      { id: 'd3-t1', text: 'Compreendi a diferença entre afastar-se por respeito e manipular com silêncio' },
      { id: 'd3-t2', text: 'Cessei qualquer tentativa de sondar a vida dela através de conhecidos' },
      { id: 'd3-t3', text: 'Evitei postar fotos ou frases com indiretas nas redes sociais' },
      { id: 'd3-t4', text: 'Reconheci o direito legítimo da outra pessoa de precisar de tempo e distância' }
    ],
    reflection: {
      prompt: 'Avalie sua capacidade de suportar o vazio temporário:',
      questions: [
        'Por que o silêncio dela causa tanto desconforto em você?',
        'Você está conseguindo focar no seu próprio dia ou sua mente passa o dia tentando decifrar o que ela está fazendo?',
        'O que você pode fazer hoje para preencher esse tempo com algo genuinamente seu?'
      ]
    },
    commonMistake: {
      title: 'Aparecer "por acaso" em lugares que ela frequenta',
      explanation: 'Coincidências forçadas são facilmente percebidas e geram desconforto, sensação de perseguição e quebra definitiva de confiança.',
      solution: 'Viva a sua vida nos seus próprios ambientes. Respeite os territórios dela e preserve sua elegância.'
    }
  },
  {
    id: 4,
    title: 'Reconstrua sua rotina',
    subtitle: 'Organizar sono, estudo ou trabalho, lazer e convivência social',
    estimatedTime: '20 min',
    objective: 'Restaurar a estrutura física do seu dia a dia, estabilizando a energia corporal e saindo da inércia depressiva.',
    lesson: `O término de uma relação destrói a arquitetura invisível dos seus dias. Os horários de mensagem, os jantares combinados, as conversas antes de dormir — tudo isso deixa um vácuo repentino. Quando esse vácuo é preenchido com sedentarismo, noites em claro no celular e má alimentação, o sofrimento emocional se multiplica por fatores biológicos.

Você não pode controlar o que a outra pessoa sente nem como o relacionamento vai terminar no longo prazo. Mas você tem 100% de controle sobre o horário em que acorda, o que coloca no prato e quantas vezes movimenta o corpo.

Uma rotina consistente é a âncora que impede o homem de naufragar na melancolia. Sono desregulado aumenta a impulsividade e reduz a clareza mental. Ficar trancado no quarto sozinho estimula o ciclo de ruminação mental.

Hoje é dia de olhar para as quatro áreas fundamentais da sua vida prática:
1. Ritmo de sono e descanso.
2. Trabalho ou estudos (entregar o seu melhor sem se sabotar).
3. Atividade física para queimar a ansiedade e liberar endorfina.
4. Convivência real com amigos, familiares ou mentores que te tragam para a realidade.`,
    challenge: {
      title: 'Desenho da Grade Diária Básica',
      duration: '20 min',
      description: 'Estruture os 4 pilares inegociáveis para os próximos 10 dias.',
      steps: [
        'Defina um horário fixo para dormir e acordar, com pelo menos 7 horas de descanso.',
        'Agende 30 minutos diários de treino, caminhada ou exercício físico de força.',
        'Marque um café ou ligue para um amigo de confiança para falar de outros assuntos da vida.'
      ]
    },
    checklist: [
      { id: 'd4-t1', text: 'Defini horários regulares para acordar e dormir nos próximos dias' },
      { id: 'd4-t2', text: 'Pratiquei ou agendei uma atividade física consciente para hoje' },
      { id: 'd4-t3', text: 'Organizei meu ambiente de trabalho ou estudo (mesa limpa e tarefas priorizadas)' },
      { id: 'd4-t4', text: 'Conversei com um amigo ou familiar sem transformar a conversa em monotema do término' }
    ],
    reflection: {
      prompt: 'Observe sua saúde física nos últimos dias:',
      questions: [
        'Como o seu corpo tem respondido ao estresse das últimas semanas?',
        'Qual hábito desregulador (álcool, comida rápida, telas até tarde) você precisa cortar imediatamente?',
        'O que traz sensação de realização quando você conclui o dia de trabalho?'
      ]
    },
    commonMistake: {
      title: 'Tentar anestesiar a angústia com excesso de álcool ou festas vazias',
      explanation: 'Fugas químicas e comportamentais aumentam o descontrole emocional no dia seguinte e intensificam a depressão pós-ressaca.',
      solution: 'Encare as emoções de peito aberto e cabeça limpa. A sobriedade é o combustível da clareza.'
    }
  },
  {
    id: 5,
    title: 'Cuide da sua apresentação',
    subtitle: 'Higiene, autocuidado e roupas adequadas ao próprio estilo, sem exigir compras',
    estimatedTime: '15 min',
    objective: 'Alinhar sua postura externa com seu amor-próprio, usando o autocuidado como ferramenta de respeito a si mesmo.',
    lesson: `Quando o ânimo despenca, o desleixo pessoal costuma ser o primeiro sinal visível. Barba por fazer há semanas de forma desarrumada, roupas velhas usadas por dias seguidos, postura curvada e falta de asseio não comunicam apenas tristeza: comunicam desistência de si mesmo.

Cuidar da sua apresentação pessoal não tem nada a ver com futilidade, vaidade vazia ou gastar dinheiro que você não tem em roupas caras. Tem a ver com o sinal que você envia ao seu próprio cérebro toda vez que olha no espelho.

A forma como você se veste e cuida do seu corpo estabelece o padrão mínimo de como o mundo — e qualquer pessoa que conviva com você — irá enxergá-lo. Um homem bem arrumado, com corte de cabelo em dia, roupas limpas e ajustadas ao seu biotipo, postura ereta e bom perfume carrega uma presença tranquila.

Faça isso por você, e não para postar uma foto na internet esperando que a ex visualize. Quando você se arruma para si mesmo, sua postura física altera sua química cerebral, aumentando a sensação de firmeza e prontidão.`,
    challenge: {
      title: 'Ajuste de Postura e Imagem Pessoal',
      duration: '15 min',
      description: 'Faça um reset no seu visual com o que você já possui no guarda-roupa.',
      steps: [
        'Apare a barba ou faça a barba com capricho e apare os pelos do nariz/orelha.',
        'Separe e doe ou guarde roupas furadas, manchadas ou muito largas que você usa por puro desleixo.',
        'Escolha uma combinação simples, limpa e alinhada para usar hoje, mesmo que trabalhe em casa.'
      ]
    },
    checklist: [
      { id: 'd5-t1', text: 'Dediquei tempo ao asseio pessoal cuidadoso (cabelo, barba e higiene)' },
      { id: 'd5-t2', text: 'Separei uma vestimenta alinhada e adequada ao meu estilo com o que já tenho' },
      { id: 'd5-t3', text: 'Pratiquei corrigir minha postura corporal ao caminhar e sentar' },
      { id: 'd5-t4', text: 'Fiz isso como um gesto de valorização própria, sem intenção de exibicionismo' }
    ],
    reflection: {
      prompt: 'Avalie sua relação com seu autocuidado:',
      questions: [
        'Você havia se descuidado durante o relacionamento ou começou após o término?',
        'Qual sensação você tem ao se olhar no espelho arrumado versus descuidado?',
        'O que a sua postura física atual está comunicando para as pessoas ao redor?'
      ]
    },
    commonMistake: {
      title: 'Fazer mudanças radicais e caricatas para chamar atenção',
      explanation: 'Tatuagens impulsivas, cortes bizarros ou mudanças exageradas de estilo passam a impressão de desequilíbrio e busca desesperada por validação.',
      solution: 'Mantenha-se fiel à sua melhor versão natural. O refinamento reside na sobriedade e no bom gosto.'
    }
  },
  {
    id: 6,
    title: 'Fortaleça sua autoestima',
    subtitle: 'Reconhecer qualidades, valores e objetivos que existem além do relacionamento',
    estimatedTime: '20 min',
    objective: 'Resgatar sua identidade individual e desvincular seu senso de valor pessoal do fato de estar ou não acompanhado.',
    lesson: `Um dos maiores perigos em relacionamentos longos é a fusão de identidades: aos poucos, você deixa de ser o homem completo com projetos, opiniões e valores próprios para se tornar apenas "o namorado dela" ou "o marido dela". Quando o vínculo se desfaz, você sente que perdeu o chão porque terceirizou o seu próprio valor.

É fundamental entender: a sua dignidade, sua inteligência, seu caráter e suas habilidades profissionais não foram embora com a mala dela. Eles continuam existindo dentro de você.

A baixa autoestima se alimenta da comparação e da dependência de aprovação externa. Enquanto você achar que só será um homem valioso se ela validar você, estará eternamente vulnerável à rejeição.

Fortalecer a autoestima masculina exige reconhecer suas vitórias reais: os desafios que você já superou no passado, os talentos que você cultiva, a honradez da sua palavra e os sonhos que ficaram guardados na gaveta enquanto você vivia em função do casal.`,
    challenge: {
      title: 'Inventário de Competências e Valores',
      duration: '15 min',
      description: 'Mapeie o seu patrimônio interior de forma concreta e sem arrogância.',
      steps: [
        'Escreva 3 momentos do seu passado em que você enfrentou grandes dificuldades e venceu.',
        'Liste 3 qualidades suas que são reconhecidas por colegas, amigos ou familiares.',
        'Identifique um objetivo pessoal ou profissional que pertence somente a você para o próximo ano.'
      ]
    },
    checklist: [
      { id: 'd6-t1', text: 'Relembrei e registrei pelo menos 3 superações reais da minha história' },
      { id: 'd6-t2', text: 'Reconheci minhas principais qualidades de caráter sem arrogância' },
      { id: 'd6-t3', text: 'Defini um objetivo individual que não tem relação com o relacionamento' },
      { id: 'd6-t4', text: 'Internalizei que meu valor pessoal não depende da validação de outra pessoa' }
    ],
    reflection: {
      prompt: 'Pense na sua trajetória de vida:',
      questions: [
        'Quem era você antes de conhecer essa pessoa e o que te dava entusiasmo?',
        'Quais projetos pessoais você foi deixando para trás nos últimos anos?',
        'O que você pode começar a retomar nesta semana para honrar sua própria história?'
      ]
    },
    commonMistake: {
      title: 'Confundir autoestima com prepotência ou indiferença forçada',
      explanation: 'Homens que fingem não ligar para nada ou se tornam arrogantes estão apenas mascarando uma profunda insegurança.',
      solution: 'A verdadeira autoconfiança é silenciosa, humilde e firme. Ela não precisa provar nada a ninguém.'
    }
  },
  {
    id: 7,
    title: 'Corrija padrões',
    subtitle: 'Identificar comportamentos prejudiciais e definir mudanças concretas e sustentáveis',
    estimatedTime: '20 min',
    objective: 'Identificar vícios comportamentais que sabotaram o convívio e criar planos de ação reais para não repeti-los.',
    lesson: `Chegamos à metade do plano. Até aqui, você respirou, organizou sua rotina e estancou os impulsos imediatos. Agora é hora da maturidade cirúrgica: encarar os seus próprios defeitos de fábrica.

Todo ser humano traz padrões automáticos aprendidos na infância ou em relacionamentos anteriores. Alguns homens se calam e se fecham quando confrontados (bloqueio emocional). Outros explodem, ironizam ou tentam vencer discussões pelo cansaço. Há quem se torne excessivamente ciumento e controlador, e há quem se acomode na rotina deixando de demonstrar carinho e admiração.

Prometer que "vai mudar" sem saber exatamente o que mudar é a receita perfeita para cometer os mesmos erros três semanas após uma eventual volta.

Mudar exige identificar o gatilho, a reação automática prejudicial e a resposta madura que você precisa treinar no lugar. Se você era reativo, precisa treinar a escuta sem interrupção. Se era passivo e acumulava ressentimentos, precisa aprender a colocar limites com clareza. Essa evolução tem valor permanente para toda a sua vida.`,
    challenge: {
      title: 'Plano de Substituição de Padrões',
      duration: '15 min',
      description: 'Selecione um padrão negativo específico e defina a resposta alternativa.',
      steps: [
        'Escolha o comportamento seu que mais causava atrito no dia a dia com ela.',
        'Descreva o gatilho: o que disparava esse comportamento em você?',
        'Escreva a nova atitude concreta que você adotará na próxima vez em que o gatilho surgir.'
      ]
    },
    checklist: [
      { id: 'd7-t1', text: 'Identifiquei honestamente meu principal padrão tóxico ou imaturo na relação' },
      { id: 'd7-t2', text: 'Compreendi a raiz ou o gatilho que disparava essa reação' },
      { id: 'd7-t3', text: 'Estruturei uma resposta prática e saudável para substituir o padrão antigo' },
      { id: 'd7-t4', text: 'Reconheci que mudanças reais demandam repetição diária e não apenas promessas' }
    ],
    reflection: {
      prompt: 'Reflita sobre os momentos de tensão do passado:',
      questions: [
        'Como você reagia quando era criticado ou quando algo não saía do seu jeito?',
        'Você costumava punir a outra pessoa com cara feia, deboche ou silêncio agressivo?',
        'Qual seria a atitude de um homem verdadeiramente maduro nessas mesmas situações?'
      ]
    },
    commonMistake: {
      title: 'Prometer "eu nunca mais vou fazer isso" sem nenhuma mudança estrutural',
      explanation: 'Declarações vazias de arrependimento perdem o crédito quando não são acompanhadas de ações práticas observáveis ao longo do tempo.',
      solution: 'Foque em ações pequenas, mensuráveis e consistentes. Mudança de verdade é demonstrada no comportamento silencioso.'
    }
  },
  {
    id: 8,
    title: 'Aprenda a conversar melhor',
    subtitle: 'Praticar escuta, comunicação clara e formas de discordar com respeito',
    estimatedTime: '20 min',
    objective: 'Dominar os fundamentos da comunicação não-reativa, escuta ativa e expressão de limites sem agressividade.',
    lesson: `A imensa maioria dos conflitos entre casais não decorre de falta de amor, mas de incapacidade técnica de comunicação. Quando duas pessoas não sabem conversar, qualquer divergência corriqueira sobre a conta de luz ou a visita aos sogros se transforma em uma batalha campal de egos.

Existem três pilares que transformam a comunicação de um homem:
1. Escutar para compreender, e não para rebater: enquanto o outro fala, a maioria das pessoas passa o tempo montando a própria defesa na cabeça. Pratique ouvir até o fim, respirar e validar o sentimento do outro antes de expor o seu ponto.
2. Usar a linguagem na primeira pessoa: trocar o dedo apontado ("Você sempre faz isso", "Você é egoísta") pela responsabilidade pessoal ("Eu me senti desrespeitado com essa atitude", "Para mim é importante termos essa clareza").
3. Discordar sem desqualificar: você pode não concordar com a decisão da outra pessoa e ainda assim respeitar o direito dela de pensar daquela forma.

Essas habilidades servirão para dialogar com ela no momento certo, mas servem imediatamente para o seu trabalho, suas amizades e sua família.`,
    challenge: {
      title: 'Treino de Comunicação Não-Defensiva',
      duration: '15 min',
      description: 'Reescreva frases típicas de atrito para um modelo sóbrio e assertivo.',
      steps: [
        'Pegue uma discussão recorrente do passado.',
        'Reescreva o que você disse na época utilizando apenas fatos e sentimentos em primeira pessoa.',
        'Treine mentalmente como você responderia caso ouvisse uma crítica dura sem elevar o tom de voz.'
      ]
    },
    checklist: [
      { id: 'd8-t1', text: 'Entendi a diferença entre rebater imediatamente e escutar para compreender' },
      { id: 'd8-t2', text: 'Pratiquei a reformulação de frases acusatórias para comunicação assertiva' },
      { id: 'd8-t3', text: 'Treinei a capacidade de manter o tom de voz calmo diante de divergências' },
      { id: 'd8-t4', text: 'Compreendi que ter razão não é mais importante do que ter paz e respeito' }
    ],
    reflection: {
      prompt: 'Pense na dinâmica das conversas difíceis:',
      questions: [
        'Quantas vezes você interrompia a fala dela antes de ela terminar o raciocínio?',
        'Você já usou ironias ou sarcasmo para ferir a outra pessoa quando se sentiu acuado?',
        'Como você pode demonstrar que é capaz de ter uma conversa adulta e serena hoje?'
      ]
    },
    commonMistake: {
      title: 'Transformar cada conversa em um tribunal onde um precisa ser condenado',
      explanation: 'Numa relação saudável, não existe vitória de um sobre o outro; se um perdeu a dignidade, ambos perderam o relacionamento.',
      solution: 'Trate o problema como algo externo que o casal precisa resolver em conjunto, não como uma guerra entre os dois.'
    }
  },
  {
    id: 9,
    title: 'Avalie se faz sentido reaproximar',
    subtitle: 'Considerar compatibilidade, reciprocidade, limites e motivos reais para voltar',
    estimatedTime: '20 min',
    objective: 'Fazer uma auditoria racional de compatibilidade e valores para checar se o desejo de volta é genuíno ou puro medo da solidão.',
    lesson: `Chegou o momento mais importante do plano para a sua tomada de consciência. Até agora, todo o seu foco esteve em "como resolver a situação" ou "como fazer dar certo". Hoje, a pergunta é outra e muito mais madura:
"Voltar para esse relacionamento realmente faz sentido para o homem que eu quero ser?"

Muitas vezes, a dor da rejeição cega nosso discernimento. Confundimos abstinência da presença física com amor verdadeiro. Queremos a pessoa de volta apenas para provar a nós mesmos que não fomos descartados, ou porque temos pavor de começar do zero.

Faça um exame honesto:
- Compatibilidade de valores: vocês queriam o mesmo tipo de vida, os mesmos planos familiares e financeiros?
- Reciprocidade real: você recebia carinho, respeito e lealdade na mesma medida em que entregava?
- Sustentabilidade: o convívio diário trazia paz e incentivo mútuo, ou era marcado por ansiedade constante, desconfiança e desgastes?

Se o relacionamento era tóxico, abusivo ou fundamentalmente incompatível, insistir numa volta é prolongar uma agonia que terminará pior mais adiante. Escolher seguir em frente pode ser a decisão mais corajosa e libertadora da sua vida.`,
    challenge: {
      title: 'Auditoria de Compatibilidade e Paz',
      duration: '20 min',
      description: 'Responda com sinceridade absoluta às perguntas de auditoria da relação.',
      steps: [
        'Escreva 3 valores essenciais inegociáveis para você num relacionamento.',
        'Avalie se a relação passada respeitava esses 3 valores.',
        'Defina se sua vontade de reaproximação vem do afeto maduro ou do medo da perda.'
      ]
    },
    checklist: [
      { id: 'd9-t1', text: 'Analisei com honestidade se havia compatibilidade real de longo prazo' },
      { id: 'd9-t2', text: 'Diferenciei a dor da quebra de rotina do sentimento genuíno de amor e respeito' },
      { id: 'd9-t3', text: 'Identifiquei se existiam incompatibilidades de valores fundamentais' },
      { id: 'd9-t4', text: 'Decidi conscientemente se o objetivo saudável é tentar reaproximação ou seguir em frente' }
    ],
    reflection: {
      prompt: 'Reflita sobre sua qualidade de vida no auge da relação:',
      questions: [
        'Você era um homem mais leve, focado e feliz dentro do relacionamento, ou vivia com medo constante de desagradar?',
        'Se o relacionamento voltasse exatamente como era nos últimos 3 meses, você aceitaria viver assim por mais 5 anos?',
        'O que você precisa que seja diferente para que qualquer relacionamento futuro funcione?'
      ]
    },
    commonMistake: {
      title: 'Acreditar que o amor sozinho resolve divergências estruturais de vida',
      explanation: 'Amor sem respeito, sem valores comuns e sem maturidade emocional é incapaz de sustentar um relacionamento no longo prazo.',
      solution: 'Priorize a paz e a coerência de vida. A paixão passa, mas a convivência diária permanece.'
    }
  },
  {
    id: 10,
    title: 'Uma mensagem respeitosa, se houver abertura',
    subtitle: 'Exemplos curtos e sem pressão. Se houver pedido de afastamento ou bloqueio, substitua por carta não enviada',
    estimatedTime: '20 min',
    isConditionalContact: true,
    objective: 'Avaliar com precisão as condições para um contato leve ou realizar um exercício individual de fechamento emocional.',
    lesson: `Atenção máxima neste dia: se a sua ex-parceira pediu expressamente para não ser procurada, se você foi bloqueado ou se tentou contatos anteriores sem resposta, NÃO envie mensagem alguma. Insistir em quem estabeleceu um limite quebra a confiança e demonstra falta de respeito básico.

Nesses casos, a atitude correta e madura é o exercício individual: escrever uma carta sincera de reconhecimento e guardá-la ou destruí-la, sem jamais enviar.

Agora, se ainda existe uma conversa neutra em andamento, se o término foi sereno e se há uma abertura mútua sem ressentimentos inflamados, qualquer contato deve ser:
1. Curto e sem cobranças: nada de textões explicando sua vida ou pedindo perdão melodramático.
2. Sem pressão por resposta: não pergunte se ela está com saudades nem questione os sentimentos dela.
3. Focado em algo prático ou em uma lembrança leve e respeitosa.

Exemplo de mensagem equilibrada (se houver abertura real):
"Oi, [Nome]. Lembrei de você hoje quando vi [assunto leve/relevante]. Espero que sua semana esteja produtiva e tranquila por aí. Um abraço."

Se ela responder de forma curta ou monossilábica, você encerra com serenidade. Se não responder, acate o silêncio sem cobrança alguma.`,
    challenge: {
      title: 'Filtragem Rígida de Contato ou Carta Sem Envio',
      duration: '15 min',
      description: 'Execute a ação correspondente ao seu cenário atual de limites.',
      steps: [
        'Se não houver abertura ou se ela pediu espaço: escreva a carta de fechamento nas anotações sem enviar.',
        'Se houver abertura real: redija uma mensagem com menos de 3 linhas, neutra e sem expectativas de retorno.',
        'Revise o texto: ele soa carente ou soa como um homem sereno e centrado?'
      ]
    },
    checklist: [
      { id: 'd10-t1', text: 'Respeitei estritamente a regra de ouro: sem contato se houver bloqueio ou pedido de espaço' },
      { id: 'd10-t2', text: 'Se redigi uma mensagem, garanti que não haja cobranças, carências ou textões' },
      { id: 'd10-t3', text: 'Assumi o compromisso de não cobrar ou insistir caso não haja retorno imediato' },
      { id: 'd10-t4', text: 'Entendi que a serenidade perante a resposta dela é o teste final da minha maturidade' }
    ],
    reflection: {
      prompt: 'Avalie sua expectativa com o contato:',
      questions: [
        'Você está preparado para receber uma resposta fria ou nenhuma resposta sem perder o equilíbrio?',
        'O envio dessa mensagem é uma tentativa disfarçada de forçar a barra?',
        'Como você reagirá internamente se a resposta for apenas educada e distante?'
      ]
    },
    commonMistake: {
      title: 'Mandar mensagem tarde da noite ou após beber',
      explanation: 'Mensagens noturnas revelam carência, falta de filtro e vulnerabilidade desordenada, gerando constrangimento imediato.',
      solution: 'Se for comunicar algo, faça em horário comercial, de forma sóbria, objetiva e respeitosa.'
    },
    individualAlternative: {
      title: 'Exercício da Carta Que Não Será Enviada',
      objective: 'Liberar as pendências emocionais internas com respeito irrestrito à decisão dela de não ser procurada.',
      lesson: `Você se encontra em uma situação onde a outra pessoa pediu espaço ou não deseja ser procurada. A maior demonstração de força, caráter e amor-próprio que um homem pode ter nesse cenário é honrar essa vontade com absoluto rigor.

Não contorne bloqueios por novas contas. Não mande flores no trabalho dela. Não peça a amigos para interceder.

A necessidade de falar o que você sente não obriga a outra pessoa a ser o seu confessionário. A terapia, a escrita e a reflexão são os canais adequados para elaborar suas pendências.

Hoje você fará o exercício da "Carta Que Não Será Enviada". Coloque no papel tudo o que ficou engasgado: seus agradecimentos pelo que foi bom, seu pedido sincero de desculpas por seus deslizes, suas dores e sua despedida consciente. Ao terminar de escrever, guarde o texto ou queime o papel. Você sentirá o peso saindo das suas costas sem precisar invadir o espaço alheio.`,
      challenge: {
        title: 'Redação da Carta de Alívio Interno',
        duration: '15 min',
        description: 'Escreva com o coração, para os seus próprios olhos.',
        steps: [
          'Escreva no campo de anotações ou no caderno tudo o que você gostaria de dizer.',
          'Inclua um reconhecimento sincero das suas responsabilidades.',
          'Finalize desejando a ela um caminho de paz e assumindo o compromisso de trilhar o seu.'
        ]
      },
      checklist: [
        { id: 'd10-alt-t1', text: 'Honrei a decisão dela de afastamento sem tentar nenhuma invasão de limites' },
        { id: 'd10-alt-t2', text: 'Escrevi a carta que não será enviada de forma honesta e profunda' },
        { id: 'd10-alt-t3', text: 'Percebi que o fechamento emocional depende da minha maturidade, não de uma conversa com ela' },
        { id: 'd10-alt-t4', text: 'Sinto-me em paz por agir como um homem íntegro que respeita a autonomia alheia' }
      ],
      reflection: {
        prompt: 'Observe o efeito de liberar a necessidade de validação externa:',
        questions: [
          'Como você se sente após colocar tudo em palavras sem a pressão de ter que enviar?',
          'O que muda na sua autoimagem quando você percebe que é capaz de respeitar uma decisão difícil?',
          'Qual é o primeiro passo para começar a cuidar do seu futuro a partir de hoje?'
        ]
      },
      commonMistake: {
        title: 'Guardar a carta com o objetivo secreto de enviar daqui a um mês',
        explanation: 'Fazer o exercício como pretexto para continuar alimentando a obsessão impede a cicatrização emocional real.',
        solution: 'Entenda a carta como um ponto final simbólico para a sua própria paz de espírito.'
      }
    }
  },
  {
    id: 11,
    title: 'Observe a reciprocidade',
    subtitle: 'Analisar o contexto e a consistência da conversa sem transformar sinais ambíguos em certezas',
    estimatedTime: '15 min',
    objective: 'Aprender a ler a dinâmica com realismo, sem cair na ilusão de migalhas de atenção ou no autoengano.',
    lesson: `Um dos erros mais cruéis que homens cometem após o término é transformar qualquer sinal ambíguo em evidência de que a reconciliação está garantida. Uma curtida numa foto antiga, uma visualização em três segundos de um story ou uma resposta educada como "obrigado, para você também" passam a ser analisadas como se fossem mensagens cifradas da CIA.

Isso é um equívoco perigoso. Educação não é interesse romântico. Resposta por cordialidade não é desejo de voltar.

Para avaliar se existe reciprocidade genuína, observe a consistência ao longo dos dias, e não atos isolados:
- Ela faz perguntas sobre a sua vida ou apenas responde o que você perguntou?
- Ela demonstra curiosidade espontânea e puxa assunto quando a conversa morre?
- Ela mantém o diálogo fluido ou demora dias para responder de forma seca?

Se você perceber que é sempre você quem puxa o assunto, você quem rema o barco e você quem tenta manter a conversa viva, pare imediatamente. O diálogo precisa de dois remos; se só você estiver remando, o barco anda em círculos. Aceitar a ausência de reciprocidade é a forma mais rápida de poupar seu tempo e sua dignidade.`,
    challenge: {
      title: 'Diagnóstico da Balança da Conversa',
      duration: '15 min',
      description: 'Avalie com sobriedade as últimas trocas de mensagens.',
      steps: [
        'Abra mentalmente as últimas 3 interações (caso tenham ocorrido).',
        'Conte quem iniciou o contato e qual era a profundidade das respostas dela.',
        'Se a resposta foi fria ou inexistente, decida recolher seus remos com elegância.'
      ]
    },
    checklist: [
      { id: 'd11-t1', text: 'Parei de analisar curtidas ou visualizações de redes como sinais de reconciliação' },
      { id: 'd11-t2', text: 'Avaliei se há iniciativa espontânea dela ou apenas respostas protocolares' },
      { id: 'd11-t3', text: 'Decidi não forçar conversas quando as respostas forem secas ou evasivas' },
      { id: 'd11-t4', text: 'Preservei minha dignidade ao não insistir onde não há interesse mútuo' }
    ],
    reflection: {
      prompt: 'Reflita sobre o valor do seu tempo e da sua presença:',
      questions: [
        'Você está se contentando com migalhas de atenção por medo de ficar sozinho?',
        'Como você se sentiria se recebesse o mesmo nível de reciprocidade e dedicação que você oferece?',
        'O que te impede de aceitar com tranquilidade quando alguém não deseja continuar?'
      ]
    },
    commonMistake: {
      title: 'Perguntar "Por que você está tão fria?" ou cobrar atenção',
      explanation: 'Cobrar calor emocional de quem está afastada gera apenas irritação e reforça a decisão dela de manter distância.',
      solution: 'Espelhe o tom e a velocidade da outra pessoa. Se o ambiente esfriou, afaste-se com elegância e silêncio.'
    }
  },
  {
    id: 12,
    title: 'Convide sem pressionar',
    subtitle: 'Somente se houver conversa recíproca, ensinar convite simples e aceitar recusa. Caso contrário, atividade individual',
    estimatedTime: '20 min',
    isConditionalContact: true,
    objective: 'Aprender a estruturar um convite leve e despretensioso com elegância total diante de um eventual "não".',
    lesson: `Este passo só é aplicável se as seguintes condições estiverem 100% satisfeitas:
1. Vocês já estão conversando com fluidez, leveza e boa vontade mútua há alguns dias.
2. Não há pedidos de afastamento, discussões recentes nem bloqueios.
3. Há reciprocidade clara e iniciativa dos dois lados.

Se qualquer uma dessas condições não for verdadeira, ou se ela pediu para não ser procurada, pule para a atividade individual de fortalecimento de limites.

Quando o momento for propício, um convite de reaproximação deve obedecer a três regras:
- Baixa pressão e duração limitada: nada de jantares românticos de 4 horas ou viagens. Opte por um café rápido à tarde ("Vou tomar um café ali perto do trabalho por volta das 16h, adoraria te dar um abraço de 20 minutos se você tiver disponibilidade").
- Rota de fuga amigável: deixe evidente que ela pode recusar sem criar climão ("Se tiver muito corrida a sua semana, sem problemas de forma alguma").
- Reação impecável diante da recusa: se ela disser que não pode ou inventar uma desculpa vaga, responda com gentileza pura: "Entendido perfeitamente! Boa semana para você." E não toque mais no assunto.

Saber receber um "não" com classe é a marca registrada de um homem emocionalmente maduro.`,
    challenge: {
      title: 'Estruturação do Convite Leve ou Ensaio de Recusa',
      duration: '15 min',
      description: 'Prepare a postura psicológica correta antes de qualquer movimento.',
      steps: [
        'Se as condições de reciprocidade existirem: formule uma proposta simples de café de 20 a 30 minutos.',
        'Ensaie sua resposta interna para o pior cenário (ela dizer não ou ignorar).',
        'Certifique-se de que sua autoestima continuará 100% intacta independentemente do resultado.'
      ]
    },
    checklist: [
      { id: 'd12-t1', text: 'Verifiquei se as pré-condições reais de reciprocidade e leveza foram atendidas' },
      { id: 'd12-t2', text: 'Estruturei uma proposta de baixo investimento de tempo (café diurno e objetivo)' },
      { id: 'd12-t3', text: 'Ofereci uma saída elegante para que ela recuse sem nenhum tipo de constrangimento' },
      { id: 'd12-t4', text: 'Estou completamente preparado para receber uma recusa com educação e tranquilidade' }
    ],
    reflection: {
      prompt: 'Pense sobre o poder de aceitar a liberdade alheia:',
      questions: [
        'A recusa dela diminuiria o homem que você se tornou nestes últimos dias?',
        'Você compreende que aceitar um não com elegância gera muito mais respeito do que insistir?',
        'O que significa para você agir com maturidade absoluta?'
      ]
    },
    commonMistake: {
      title: 'Tentar negociar a recusa ("Mas é rapidinho, você não tem nem 15 minutos?")',
      explanation: 'Negociar recusa demonstra desespero e desrespeito ao tempo e à vontade da outra pessoa.',
      solution: 'Aceite o primeiro "não" na hora. Agradeça, deseje o melhor e continue sua vida.'
    },
    individualAlternative: {
      title: 'Atividade Individual de Fortalecimento de Limites',
      objective: 'Consolidar sua capacidade de suportar recusas e frustrações sem recorrer à mendicância emocional.',
      lesson: `Se o seu cenário atual não comporta um convite (ela pediu espaço, estão sem contato ou a reciprocidade não existe), comemore. O seu desafio de hoje é o mais nobre: treinar a aceitação serena da realidade como ela se apresenta.

A maturidade de um homem é medida não pelas portas que ele consegue forçar, mas por sua capacidade de caminhar com a cabeça erguida quando uma porta permanece fechada.

A carência nos faz implorar por encontros forçados, nos humilhar por alguns minutos de atenção e aceitar migalhas de afeto. Mas o homem que constrói autoestima sólida compreende: a companhia de qualquer pessoa no mundo só tem valor quando é oferecida com entusiasmo, respeito e vontade mútua.

Hoje você vai se convidar para algo que você gosta: um café em um lugar agradável, um treino revigorante ou uma leitura enriquecedora. Você é a sua melhor companhia.`,
      challenge: {
        title: 'O Encontro Consigo Mesmo',
        duration: '20 min',
        description: 'Tire 20 minutos do seu dia para fazer uma atividade que você aprecia exclusivamente sozinho.',
        steps: [
          'Vá a um café, parque ou livraria sem fones de ouvido e sem ficar olhando o celular a cada minuto.',
          'Aprecie o momento presente e sua própria presença.',
          'Reconheça a paz que existe em não depender da resposta de ninguém para se sentir inteiro.'
        ]
      },
      checklist: [
        { id: 'd12-alt-t1', text: 'Reconheci que não forçar um convite é um sinal claro de maturidade e respeito próprio' },
        { id: 'd12-alt-t2', text: 'Dediquei um momento de qualidade exclusivo para mim mesmo' },
        { id: 'd12-alt-t3', text: 'Desconectei da urgência de receber mensagens ou validações externas' },
        { id: 'd12-alt-t4', text: 'Consolidei a certeza de que só vale a pena estar onde minha presença é valorizada' }
      ],
      reflection: {
        prompt: 'Avalie sua sensação de autonomia:',
        questions: [
          'Como foi passar um tempo de qualidade sozinho sem desespero?',
          'O que torna a sua própria companhia valiosa e agradável?',
          'Como essa postura muda o seu padrão de relacionamento daqui para frente?'
        ]
      },
      commonMistake: {
        title: 'Sentir pena de si mesmo por estar fazendo uma atividade sozinho',
        explanation: 'A solitude é um sinal de força e autonomia; a solidão dolorosa nasce da ideia de que só somos completos com outro ao lado.',
        solution: 'Encare seu momento sozinho como um privilégio de introspecção e crescimento pessoal.'
      }
    }
  },
  {
    id: 13,
    title: 'Converse sobre o que mudaria',
    subtitle: 'Responsabilidade, expectativas, desculpas sinceras e mudanças possíveis, sem prometer o que não pode cumprir',
    estimatedTime: '20 min',
    objective: 'Estruturar os pilares de um diálogo adulto sobre mudanças reais, ou consolidar o aprendizado para futuros relacionamentos.',
    lesson: `Se uma oportunidade de conversa profunda surgir — seja agora com ela, seja no futuro em um novo relacionamento —, você precisa saber como abordar erros do passado sem cair em lamúrias nem em promessas mirabolantes.

Desculpas sinceras têm quatro elementos indispensáveis:
1. Nomear o erro com clareza ("Eu falhei ao ser reativo e elevar o tom de voz naquela discussão").
2. Reconhecer o impacto no outro ("Eu compreendo que isso fez você se sentir insegura e desrespeitada").
3. Assumir a responsabilidade sem desculpas ("Não há justificativa para o que fiz, a responsabilidade foi minha").
4. Apresentar a mudança em andamento ("Tenho trabalhado minha gestão emocional e praticado a escuta antes de reagir").

Promessas como "eu vou ser perfeito", "eu nunca mais vou errar" ou "eu mudo tudo por você" soam infantis e falsas. Ninguém muda da noite para o dia. O que se oferece é coerência, compromisso sincero e maturidade para alinhar expectativas realistas.

E se essa conversa nunca acontecer com ela? Excelente: esse aprendizado já está gravado na sua mente para que você nunca mais seja o causador desse tipo de sofrimento no seu próximo ciclo afetivo.`,
    challenge: {
      title: 'Estruturação de um Pedido de Desculpas Maduro',
      duration: '15 min',
      description: 'Escreva mentalmente ou nas anotações como seria um pedido de desculpas íntegro.',
      steps: [
        'Identifique uma atitude sua do passado que realmente merecia um pedido sincero de perdão.',
        'Formule a frase nos 4 passos (erro, impacto, responsabilidade, mudança real).',
        'Elimine qualquer vestígio de "mas você também fez aquilo..." da sua reflexão.'
      ]
    },
    checklist: [
      { id: 'd13-t1', text: 'Compreendi a estrutura de uma desculpa sincera sem vitimismo nem justificativas' },
      { id: 'd13-t2', text: 'Eliminei a tentação de fazer promessas megalomaníacas que não posso sustentar' },
      { id: 'd13-t3', text: 'Reconheci o impacto das minhas atitudes nas pessoas com quem me relacionei' },
      { id: 'd13-t4', text: 'Entendi que pedir desculpas alivia a consciência e não obriga a outra pessoa a perdoar ou voltar' }
    ],
    reflection: {
      prompt: 'Avalie sua capacidade de assumir erros:',
      questions: [
        'Você tinha o costume de usar a palavra "mas" logo após pedir desculpas no passado?',
        'Você está preparado para pedir desculpas sabendo que a pessoa pode não querer reatar?',
        'Qual é a mudança mais concreta que você já percebeu em seu temperamento nestes 13 dias?'
      ]
    },
    commonMistake: {
      title: 'Esperar que o pedido de desculpas seja um passe de mágica para reatar na hora',
      explanation: 'Desculpas não são moedas de troca. Elas servem para consertar o que você causou, e a outra pessoa é livre para aceitar e continuar afastada.',
      solution: 'Peça desculpas por honra e integridade própria, sem cobrar qualquer recompensa afetiva.'
    }
  },
  {
    id: 14,
    title: 'Escolha os próximos passos',
    subtitle: 'Avaliar a experiência e montar um plano pessoal para continuar, com ou sem reconciliação',
    estimatedTime: '20 min',
    objective: 'Consolidar os 14 dias de evolução pessoal, formalizar sua bússola de vida e assumir o leme do seu destino como homem maduro.',
    lesson: `Parabéns por chegar até aqui. Ao longo destes 14 dias, você tomou uma decisão crucial: em vez de se afundar no desespero, na humilhação pública ou na autopiedade, você escolheu o caminho árduo do autodomínio e da clareza emocional.

Não importa em qual ponto do caminho você se encontra hoje:
- Se vocês estão conversando e avaliando uma volta: você fará isso sob novas bases, com respeito mútuo, comunicação aberta e sem as ilusões do passado.
- Se o término é definitivo e o ciclo foi encerrado: você sai dessa história maior do que entrou, com a consciência limpa, hábitos restaurados e dignidade preservada.

O "Plano Reconquista Certa" nunca foi uma fórmula mágica para controlar a vontade de outra pessoa — porque ninguém é dono de ninguém. A verdadeira reconquista sempre foi reconquistar o homem que você deixou pelo caminho: um homem com propósito, integridade, postura firme e coração em paz.

A partir de agora, mantenha sua rotina física, cultive amizades que te elevem, nunca abra mão dos seus limites e jamais aceite menos respeito do que aquele que você oferece.`,
    challenge: {
      title: 'O Manifesto Pessoal do Homem Maduro',
      duration: '20 min',
      description: 'Formalize os 3 compromissos inegociáveis para a sua vida nos próximos meses.',
      steps: [
        'Escreva nas anotações quais são as 3 prioridades da sua vida hoje (saúde, carreira, família, etc.).',
        'Declare uma linha vermelha: o que você nunca mais vai tolerar ou fazer em um relacionamento.',
        'Agradeça a si mesmo pela coragem de encarar este processo com verdade e sobriedade.'
      ]
    },
    checklist: [
      { id: 'd14-t1', text: 'Concluí os 14 dias de reflexões e desafios com honestidade e presença' },
      { id: 'd14-t2', text: 'Defini meus 3 compromissos inegociáveis para o meu futuro pessoal' },
      { id: 'd14-t3', text: 'Estabeleci clareza sobre meus limites em relações futuras' },
      { id: 'd14-t4', text: 'Assumi a responsabilidade total pelo meu bem-estar e crescimento contínuo' }
    ],
    reflection: {
      prompt: 'Olhe para trás e compare o primeiro dia com o dia de hoje:',
      questions: [
        'Como a sua mente e a sua postura mudaram desde o Dia 1 até hoje?',
        'Qual foi a lição mais transformadora que você aprendeu sobre si mesmo?',
        'O que você diria para o homem que você era há 14 dias atrás?'
      ]
    },
    commonMistake: {
      title: 'Achar que o processo acabou e voltar aos velhos hábitos de negligência',
      explanation: 'A maturidade é uma prática contínua. Desistir da rotina e dos limites faz o homem retroceder aos mesmos velhos dilemas.',
      solution: 'Revisite este plano e os guias da biblioteca sempre que sentir sua bússola vacilar. Mantenha o curso.'
    }
  }
];
