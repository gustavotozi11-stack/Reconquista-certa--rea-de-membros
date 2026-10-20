import { Guide } from '../types';

export const GUIDES_DATA: Guide[] = [
  {
    id: 'guia-1',
    number: 1,
    title: 'Os 7 Erros Que Fazem Ela Se Afastar',
    subtitle: 'Comportamentos comuns impulsionados pela ansiedade que destroem a atração e o respeito mútuo',
    description: 'Um manual prático para identificar reações tóxicas ou desesperadas após o rompimento e substituí-las por atitudes de homem maduro.',
    badge: 'Comportamento & Limites',
    chapters: [
      {
        id: 'g1-c1',
        number: 1,
        title: 'Mandar mensagens repetidamente',
        subtitle: 'O bombardeio de notificações que sufoca qualquer possibilidade de reconexão',
        readTime: '4 min',
        behavior: 'Enviar várias mensagens em sequência quando a outra pessoa não respondeu ou demorou para responder: "Oi?", "Você viu?", "Não vai me responder?", ou mandar dezenas de reels e links para tentar chamar atenção.',
        whyHurtful: 'Esse comportamento comunica desespero, falta de autocontrole e incapacidade de tolerar o silêncio. Além de sufocar a pessoa, transforma o contato em uma obrigação incômoda em vez de uma troca espontânea.',
        example: 'Carlos enviou uma mensagem às 14h. Às 15h30, como ela não respondeu, ele mandou uma interrogação. Às 17h, mandou um áudio dizendo que ela estava sendo infantil por não responder. Resultado: ela arquivou a conversa por se sentir pressionada.',
        whatToDoInstead: 'Adote a regra de ouro do 1:1. Se você enviou uma mensagem, não envie nenhuma outra até que a resposta venha de forma natural. Se ela não responder em 48 horas, aceite o silêncio como uma resposta e siga seu dia normalmente.',
        practicalExercise: 'Abra seu WhatsApp e silencie conversas que geram gatilho. Treine passar uma tarde inteira sem checar se o contato visualizou ou esteve online.'
      },
      {
        id: 'g1-c2',
        number: 2,
        title: 'Cobrar respostas ou explicações o tempo todo',
        subtitle: 'Transformar a relação em um interrogatório policial sufocante',
        readTime: '5 min',
        behavior: 'Exigir saber o porquê de cada decisão, com quem a pessoa estava, por que demorou a responder, ou demandar justificativas detalhadas para o término semanas após o rompimento.',
        whyHurtful: 'Cobrança não gera aproximação; gera repulsa. Quando duas pessoas não estão mais juntas ou estão em momento de crise, ninguém deve satisfações minuciosas ao outro. Cobrar faz você parecer um controlador inseguro.',
        example: 'Marcos viu que a ex postou uma foto em um restaurante e mandou mensagem na mesma hora: "Com quem você foi aí? Você nunca me convidava para esse lugar." Ela sequer respondeu e limitou os stories para ele.',
        whatToDoInstead: 'Abra mão do controle imaginário. Aceite que a vida dela não está mais sob a sua jurisdição. Se houver algo que realmente precise ser alinhado (filhos, contratos, bens), seja estritamente profissional e cordial.',
        practicalExercise: 'Toda vez que vier a tentação de perguntar "por que você fez isso?", respire fundo três vezes e escreva essa pergunta no bloco de notas. Pergunte a si mesmo: "Essa informação mudaria a minha dignidade hoje?".'
      },
      {
        id: 'g1-c3',
        number: 3,
        title: 'Tentar provocar ciúmes',
        subtitle: 'Teatros infantis em redes sociais que denunciam imaturidade',
        readTime: '4 min',
        behavior: 'Postar fotos premeditadas com copos em baladas, fingir que está rodeado de outras mulheres, colocar músicas de indireta ou criar cenários fictícios para tentar fazê-la se arrepender.',
        whyHurtful: 'Mulheres percebem encenações de ciúmes a quilômetros de distância. Esse comportamento soa artificial e passa a mensagem exata de que você está desesperado para chamar a atenção dela, e não realmente vivendo bem.',
        example: 'Felipe tirou foto de um copo com a mão de uma amiga ao fundo e postou com legenda enigmática. A ex viu, percebeu a encenação óbvia e concluiu que ele continuava imaturo como sempre.',
        whatToDoInstead: 'Viva a sua vida de verdade, sem plateia. Se for sair, aproveite com os amigos. Se for estudar ou treinar, foque no seu resultado. O maior atrativo de um homem é ser autêntico e focado em construir o próprio futuro.',
        practicalExercise: 'Faça um detox de 7 dias de postagens em redes sociais. Treine ter momentos felizes e memoráveis sem a necessidade de exibi-los para o mundo.'
      },
      {
        id: 'g1-c4',
        number: 4,
        title: 'Implorar ou fazer promessas exageradas',
        subtitle: 'A mendicância afetiva que reduz a zero o respeito mútuo',
        readTime: '5 min',
        behavior: 'Chorar compulsivamente pedindo mais uma chance, dizer que "não é nada sem ela", jurar que vai mudar da noite para o dia tudo o que ela quiser, rebaixar-se para conseguir um minuto de atenção.',
        whyHurtful: 'Piedade e admiração são sentimentos mutuamente exclusivos. Uma mulher pode até sentir pena de um homem que se humilha, mas nunca sentirá respeito ou atração romântica por ele nessa condição.',
        example: 'Renato ligou às 2h chorando, dizendo que sua vida não tinha sentido e que ele aceitaria qualquer condição para voltarem. A conversa terminou com ela dizendo que aquilo a deixava com medo e desconfortável.',
        whatToDoInstead: 'Mantenha a postura ereta. Se cometeu erros, peça desculpas de forma sóbria e assuma a consequência. Mostre firmeza: "Eu lamento pelo que aconteceu e gostaria de consertar, mas se sua decisão é nos afastarmos, eu respeito e seguirei meu caminho".',
        practicalExercise: 'Escreva em uma folha: "Meu valor não depende de ninguém me aceitar de volta". Leia isso em voz alta diante do espelho toda manhã.'
      },
      {
        id: 'g1-c5',
        number: 5,
        title: 'Ignorar limites e pedidos de espaço',
        subtitle: 'A insistência invasiva que beira a perseguição',
        readTime: '5 min',
        behavior: 'Aparecer de surpresa na porta da casa ou no trabalho dela, mandar presentes inesperados depois de ela pedir para não ser procurada, insistir em ligar de números diferentes após ser bloqueado.',
        whyHurtful: 'Isso ultrapassa o limite da carência e entra no campo da violação de fronteiras. Gera medo, sensação de insegurança e desgosto profundo. É a certeza absoluta de que ela nunca mais desejará proximidade.',
        example: 'Lucas mandou um buquê de flores com uma carta para o escritório dela após ela ter pedido 15 dias sem contato. As colegas viram, gerou constrangimento no ambiente de trabalho e ela bloqueou todas as vias de comunicação.',
        whatToDoInstead: 'Quando alguém diz "preciso de espaço", a única atitude digna é responder: "Compreendo e respeito seu pedido. Fique bem." E se retirar completamente. Limite respeitado é o alicerce da consideração.',
        practicalExercise: 'Elimine qualquer plano de enviar presentes, intermediários ou aparições surpresas. Assuma o compromisso irrevogável de respeitar a soberania alheia.'
      },
      {
        id: 'g1-c6',
        number: 6,
        title: 'Usar indiretas ou outras pessoas para pressionar',
        subtitle: 'Recrutar amigos, familiares ou canais públicos como armas de pressão',
        readTime: '4 min',
        behavior: 'Ficar ligando para a mãe ou amiga dela para saber notícias, desabafar com conhecidos em comum esperando que eles "falem bem de você", postar indiretas no status ou tweets reflexivos com recados subliminares.',
        whyHurtful: 'Envolver terceiros é uma atitude covarde que expõe a intimidade do casal e coloca amigos e parentes em situações extremamente desconfortáveis. Demonstra falta de maturidade para resolver as coisas de forma direta.',
        example: 'André começou a mandar mensagens para a sogra dizendo como estava sofrendo e perguntando se a filha falava dele. A ex descobriu e ficou furiosa com a manipulação familiar.',
        whatToDoInstead: 'Mantenha as conversas sobre o término estritamente entre vocês dois, ou com um terapeuta e um amigo íntimo de confiança estrita. Se terceiros vierem fofocar, diga educadamente: "Agradeço o carinho, mas é um assunto nosso e eu prefiro não comentar".',
        practicalExercise: 'Corte imediatamente qualquer conversa com parentes ou amigos dela sobre a situação do término. Preserve a privacidade do casal.'
      },
      {
        id: 'g1-c7',
        number: 7,
        title: 'Fingir mudanças apenas para conseguir voltar',
        subtitle: 'O teatro insustentável que desmorona em poucas semanas',
        readTime: '5 min',
        behavior: 'Dizer que começou a fazer terapia, academia e parou de beber apenas para impressionar nos primeiros dias, sem nenhum compromisso real de continuidade interior.',
        whyHurtful: 'Mudanças cosméticas e forçadas duram no máximo duas ou três semanas. Se vocês voltarem sob uma farsa, os velhos vícios reaparecem no primeiro desentendimento, tornando o segundo término dez vezes mais traumático.',
        example: 'Thiago prometeu que cuidaria das finanças e não gritaria mais. Voltaram em uma semana. Duas semanas depois, após uma conta atrasada, ele explodiu da mesma forma de sempre. O relacionamento acabou em definitivo.',
        whatToDoInstead: 'Mude por você, no seu ritmo e com honestidade brutal. Se for fazer terapia, faça para curar seus traumas. Se for treinar, faça pela sua saúde. Quando a transformação é genuína, as pessoas percebem pela consistência ao longo do tempo, e não pelas suas palavras.',
        practicalExercise: 'Escolha uma única mudança real que você fará por si mesmo pelos próximos 6 meses, mesmo que vocês nunca mais troquem uma palavra.'
      }
    ]
  },
  {
    id: 'guia-2',
    number: 2,
    title: 'Como Ler os Sinais de Interesse Dela',
    subtitle: 'Diferenciar educação de interesse romântico com sobriedade, sem cair em armadilhas de ego',
    description: 'Um guia objetivo para avaliar conversas, iniciativas e atitudes da outra pessoa sem fantasias, sem fórmulas mágicas e com respeito à realidade.',
    badge: 'Comunicação & Discernimento',
    chapters: [
      {
        id: 'g2-c1',
        number: 1,
        title: 'Reciprocidade na conversa',
        subtitle: 'A diferença entre uma troca equilibrada e um monólogo forçado',
        readTime: '5 min',
        intro: 'A conversa entre duas pessoas é como um jogo de tênis: um bate a bola, o outro rebate. Se você está tendo que ir buscar a bola na rede a cada jogada e rebater sozinho, o jogo acabou.',
        keyPoints: [
          {
            title: 'Equilíbrio no volume e profundidade',
            description: 'Em uma conversa com reciprocidade saudável, o tamanho das mensagens e o interesse pelo tema são proporcionais. Se você escreve 5 parágrafos e recebe "Legal" ou um emoji, o recado é evidente.'
          },
          {
            title: 'Perguntas de retorno',
            description: 'Quando alguém tem interesse em manter a conexão, faz perguntas de volta: "E como foi o seu projeto?", "Você melhorou daquela gripe?". Respostas sem perguntas de retorno sinalizam apenas encerramento educado.'
          },
          {
            title: 'Fluidez temporal',
            description: 'Pessoas ocupadas demoram para responder, mas quando respondem, explicam a ausência com naturalidade e dão continuidade ao assunto com entusiasmo.'
          }
        ],
        takeaway: 'Nunca confunda a educação de uma pessoa que não quer ser grosseira com abertura afetiva. Dê espaço para ela demonstrar vontade própria.'
      },
      {
        id: 'g2-c2',
        number: 2,
        title: 'Iniciativa espontânea vs. Resposta reativa',
        subtitle: 'O teste definitivo de onde está a energia da relação',
        readTime: '5 min',
        intro: 'Responder quando perguntada é o padrão mínimo da boa convivência social. Já ter iniciativa espontânea exige energia mental, lembrança e vontade de se conectar.',
        keyPoints: [
          {
            title: 'Quem dá o primeiro passo?',
            description: 'Observe quem costuma puxar os assuntos ao longo de uma ou duas semanas. Se em 100% das vezes é você quem inicia, o interesse atual dela em manter vínculo é baixo.'
          },
          {
            title: 'Lembranças espontâneas',
            description: 'Sinais reais de reaproximação ocorrem quando ela manda uma mensagem sem você ter provocado: "Lembrei de você com esse meme", "Acabei de ouvir aquela música que você gostava".'
          },
          {
            title: 'O perigo de manter na reanimação artificial',
            description: 'Ficar alimentando a conversa com assuntos inventados impede que a pessoa sinta a sua falta e teste se ela mesma sente vontade de te procurar.'
          }
        ],
        takeaway: 'Dê pausas estratégicas. Se você parar de puxar assunto e a conversa morrer para sempre, você terá a resposta mais valiosa que precisava: era hora de seguir em frente.'
      },
      {
        id: 'g2-c3',
        number: 3,
        title: 'Interesse genuíno na sua vida atual',
        subtitle: 'Perceber se existe curiosidade sobre quem você está se tornando',
        readTime: '4 min',
        intro: 'Quando o vínculo emocional persiste, a pessoa não quer saber apenas do passado de vocês; ela quer saber o que você tem feito hoje, como está sua família, seu trabalho e seus novos passos.',
        keyPoints: [
          {
            title: 'Curiosidade ativa',
            description: 'Ela presta atenção aos detalhes do que você conta e retoma esses pontos em conversas posteriores.'
          },
          {
            title: 'Vulnerabilidade compartilhada',
            description: 'Ela também se abre sobre os desafios dela, mostrando que ainda enxerga em você um porto seguro para confidências.'
          },
          {
            title: 'Conversa burocrática',
            description: 'Se as trocas se resumem a resolver pendências de contas, entregas ou animais de estimação, não tente forçar intimidade romântica onde só existe praticidade.'
          }
        ],
        takeaway: 'O interesse real se manifesta na curiosidade sincera pelo seu bem-estar, e não na nostalgia melancólica de fotos antigas.'
      },
      {
        id: 'g2-c4',
        number: 4,
        title: 'Disposição real para encontros presenciais',
        subtitle: 'Como separar promessas vagas de disponibilidade prática',
        readTime: '5 min',
        intro: 'O mundo digital é um terreno fértil para ilusões. É muito fácil trocar mensagens durante o tédio da noite. O verdadeiro teste de interesse é a disposição para estar presente no mesmo espaço físico.',
        keyPoints: [
          {
            title: 'O "vamos combinar" que nunca acontece',
            description: 'Se diante de um convite a resposta for vaga ("uma hora dessas a gente vê", "minha vida tá uma loucura"), isso é uma recusa polida. Não insista.'
          },
          {
            title: 'Contraproposta é o sinal de ouro',
            description: 'Quando alguém realmente quer te ver mas não pode na data proposta, ela faz questão de oferecer uma alternativa: "Quarta não consigo, mas na sexta à tarde estou livre, dá para você?".'
          },
          {
            title: 'Prioridade vs. Desculpas',
            description: 'Todo ser humano arruma tempo para o que considera prioritário. Quem tem interesse dá um jeito; quem não tem, dá uma explicação.'
          }
        ],
        takeaway: 'Se não houve contraproposta clara, encerre o assunto com um sorriso e nunca repita o convite na mesma semana.'
      },
      {
        id: 'g2-c5',
        number: 5,
        title: 'Educação, amizade e interesse romântico',
        subtitle: 'A linha tênue que confunde homens após o término',
        readTime: '5 min',
        intro: 'Muitos homens interpretam gentileza básica como desejo sexual ou amoroso reprimido. Compreender essas três categorias é essencial para não criar expectativas falsas.',
        keyPoints: [
          {
            title: 'Educação',
            description: 'Desejar feliz aniversário, responder um "bom dia", agradecer por uma ajuda. É civilidade básica, não amor.'
          },
          {
            title: 'Amizade e carinho platônico',
            description: 'Gostar de conversar, torcer pelo seu sucesso, mas sem nenhuma tensão de proximidade física, flerte ou ciúmes saudáveis.'
          },
          {
            title: 'Interesse romântico',
            description: 'Presença de olhar diferenciado, toques sutis, vontade de estar a sós, preocupação com sua disponibilidade afetiva e busca por intimidade.'
          }
        ],
        takeaway: 'Não se iluda: respeite a amizade se ela fizer bem a ambos, mas se você ainda tem sentimentos românticos não correspondidos, afaste-se para se proteger.'
      },
      {
        id: 'g2-c6',
        number: 6,
        title: 'A ilusão das redes sociais (likes e visualizações)',
        subtitle: 'Por que métricas digitais não comprovam absolutamente nada',
        readTime: '4 min',
        intro: 'Visualizar um story no Instagram requer exatamente um deslize de dedo de meio segundo enquanto a pessoa está no banheiro ou no trânsito. Curtir uma foto antiga pode ser puro reflexo ou nostalgia passageira.',
        keyPoints: [
          {
            title: 'O viés de confirmação',
            description: 'Quem está apaixonado e ansioso procura padrões em tudo: "Ela visualizou em 2 minutos, ela deve estar pensando em mim". Ela só estava com o celular na mão.'
          },
          {
            title: 'Ação no mundo real',
            description: 'Um homem maduro só leva em consideração atitudes deliberadas no mundo real: telefonemas, conversas diretas, encontros combinados e atitudes de lealdade.'
          },
          {
            title: 'Parar de ser o detetive digital',
            description: 'Ficar conferindo quem viu seus stories e quem ela começou a seguir é uma forma voluntária de tortura mental que drena sua energia vital.'
          }
        ],
        takeaway: 'Se o sinal não veio na forma de uma mensagem direta ou atitude concreta, trate como se não existisse.'
      },
      {
        id: 'g2-c7',
        number: 7,
        title: 'Como interpretar recusas e o silêncio sem insistir',
        subtitle: 'A elegância de aceitar o ponto final sem necessidade de escândalo',
        readTime: '5 min',
        intro: 'O silêncio é uma das respostas mais claras e barulhentas que existem. Aprender a aceitá-lo sem criar rancor é o ápice da maturidade emocional masculina.',
        keyPoints: [
          {
            title: 'Não é não, e o silêncio também é',
            description: 'Não tente decifrar o silêncio procurando desculpas ("a bateria deve ter acabado", "ela deve estar ocupada há 3 semanas"). A ausência de resposta é a declaração de que aquele canal não está aberto.'
          },
          {
            title: 'Evite a "última mensagem indignada"',
            description: 'Mandar uma mensagem desaforada ou cobrando maturidade após ser ignorado só confirma para a outra pessoa que ela tomou a decisão certa de se afastar.'
          },
          {
            title: 'A postura do homem inabalável',
            description: 'Você recebe a recusa, agradece mentalmente pelo tempo vivido, guarda as lições aprendidas e vira a página com a cabeça erguida.'
          }
        ],
        takeaway: 'O seu valor como homem não diminui nem um milímetro diante de uma recusa. A vida continua cheia de propósitos grandiosos à sua espera.'
      },
      {
        id: 'g2-c8',
        number: 8,
        title: 'Como perguntar com clareza quando existe abertura',
        subtitle: 'O momento certo de alinhar intenções sem joguinhos infantis',
        readTime: '5 min',
        intro: 'Se após semanas de conversa recíproca, encontros agradáveis e boa convivência o clima for propício, um homem maduro não vive na ambiguidade: ele senta e alinha o momento de forma clara e calma.',
        keyPoints: [
          {
            title: 'Escolha o momento presencial',
            description: 'Nunca tente definir status de relação ou falar sobre sentimentos complexos por aplicativo de mensagem. Faça isso pessoalmente, em ambiente tranquilo.'
          },
          {
            title: 'Fale sobre seus sentimentos com sobriedade',
            description: '"Eu aprecio a nossa convivência e tenho gostado muito da forma como amadurecemos. Quero entender se estamos no mesmo momento para tentar reconstruir algo novo ou se devemos manter como amigos".'
          },
          {
            title: 'Pronto para qualquer resposta',
            description: 'Só faça a pergunta se você estiver verdadeiramente preparado para ouvir qualquer resposta sem desmoronar ou atacar.'
          }
        ],
        takeaway: 'A clareza é a maior prova de coragem. Um homem íntegro prefere uma verdade dolorosa do que uma dúvida confortável.'
      }
    ]
  },
  {
    id: 'guia-3',
    number: 3,
    title: 'Manual do Homem Magnético',
    subtitle: 'Magnetismo como confiança serena, integridade de caráter e autonomia de vida',
    description: 'Os princípios fundamentais de postura, maturidade e presença masculina que atraem o respeito natural das pessoas ao seu redor.',
    badge: 'Maturidade & Postura',
    chapters: [
      {
        id: 'g3-c1',
        number: 1,
        title: 'Autoestima sem arrogância',
        subtitle: 'A força silenciosa de quem não precisa se vangloriar',
        readTime: '5 min',
        intro: 'O homem verdadeiramente seguro de si não precisa falar alto, desmerecer os outros ou ostentar posses. A segurança dele é percebida pelo olhar calmo, pela firmeza das decisões e pela ausência de necessidade de validação.',
        keyPoints: [
          {
            title: 'Arrogância é insegurança fantasiada',
            description: 'Quem precisa provar que é forte, inteligente ou desejado o tempo todo está, no fundo, apavorado com a possibilidade de ser descoberto fraco.'
          },
          {
            title: 'A calma sob pressão',
            description: 'O homem magnético é o ponto de estabilidade em meio ao caos. Quando todos perdem a cabeça, ele respira e busca a solução prática.'
          }
        ],
        practicalAction: 'Passe o dia de hoje elogiando sinceramente as pessoas ao seu redor sem falar de si mesmo ou das suas conquistas.',
        checklist: [
          'Não me gabei de nenhuma realização pessoal hoje',
          'Mantive a tranquilidade diante de imprevistos do cotidiano',
          'Tratei todas as pessoas com o mesmo nível de consideração e respeito'
        ]
      },
      {
        id: 'g3-c2',
        number: 2,
        title: 'Autocuidado e apresentação pessoal',
        subtitle: 'O respeito ao próprio corpo e à própria imagem',
        readTime: '4 min',
        intro: 'A forma como você se apresenta para o mundo é o cartão de visitas da sua autoimagem. Higiene impecável, roupas bem cuidadas e condicionamento físico refletem disciplina diária.',
        keyPoints: [
          {
            title: 'O poder dos detalhes',
            description: 'Unhas cortadas, hálito fresco, perfume discreto e calçados limpos comunicam consideração pelas pessoas com quem você convive.'
          },
          {
            title: 'Saúde como estilo de vida',
            description: 'Corpo são, mente sã. Exercício físico não é apenas estética; é regulação química do humor e da testosterona.'
          }
        ],
        practicalAction: 'Separe hoje mesmo 3 peças do seu guarda-roupa que estão velhas ou desgastadas e organize seu armário com peças limpas e alinhadas.',
        checklist: [
          'Cuidei da minha higiene e apresentação com atenção meticulosa',
          'Realizei meu treino ou caminhada para cuidar da saúde corporal',
          'Usei uma roupa que reflete respeito por mim mesmo'
        ]
      },
      {
        id: 'g3-c3',
        number: 3,
        title: 'Comunicação e escuta ativa',
        subtitle: 'Falar com intenção e ouvir com profundidade',
        readTime: '5 min',
        intro: 'Um homem magnético raramente fala à toa. Suas palavras têm peso porque ele não desperdiça energia com fofocas, reclamações estéreis ou discussões sem sentido.',
        keyPoints: [
          {
            title: 'Contato visual firme e acolhedor',
            description: 'Ao conversar, olhe nos olhos da pessoa sem intimidação, mas com foco total, sem desviar para o celular a cada notificação.'
          },
          {
            title: 'A arte do silêncio produtivo',
            description: 'Não tenha medo de pausas numa conversa. O silêncio denota reflexão madura antes de emitir uma opinião.'
          }
        ],
        practicalAction: 'Em sua próxima conversa presencial, guarde o celular no bolso e faça 2 perguntas profundas sobre o que o outro acabou de contar.',
        checklist: [
          'Não chequei notificações enquanto alguém falava comigo',
          'Ouvi até o final sem interromper o interlocutor',
          'Evitei reclamações vazias ao longo de todo o dia'
        ]
      },
      {
        id: 'g3-c4',
        number: 4,
        title: 'Vida própria, amizades e interesses',
        subtitle: 'Nunca faça de outra pessoa o seu único ecossistema',
        readTime: '5 min',
        intro: 'Nada é mais desinteressante do que um indivíduo que não possui paixões, hobbies, amigos leais ou propósitos de carreira independentes do relacionamento amoroso.',
        keyPoints: [
          {
            title: 'A irmandade masculina e amizades sólidas',
            description: 'Cultive amigos homens de valor, que cobram o seu melhor e que estão com você nos momentos difíceis da vida.'
          },
          {
            title: 'Missão pessoal',
            description: 'Tenha projetos que te façam acordar motivado: sua carreira, estudos, um esporte ou uma habilidade que você deseja dominar.'
          }
        ],
        practicalAction: 'Ligue para um grande amigo hoje para saber como ele está, sem falar de problemas de relacionamento.',
        checklist: [
          'Dediquei tempo a um projeto ou estudo exclusivamente meu',
          'Conversei com um amigo leal sobre trabalho, esportes ou vida',
          'Lembrei-me de que meu mundo é amplo e repleto de oportunidades'
        ]
      },
      {
        id: 'g3-c5',
        number: 5,
        title: 'Responsabilidade emocional',
        subtitle: 'Abandonar de vez a postura de vítima das circunstâncias',
        readTime: '5 min',
        intro: 'Culpados apontam o dedo; homens adultos assumem o leme. A responsabilidade emocional é o compromisso de gerenciar a própria dor sem terceirizar suas reações para terceiros.',
        keyPoints: [
          {
            title: 'Você é responsável pelas suas escolhas',
            description: 'Você pode não ter escolhido o término, mas é 100% responsável pelo que faz com a sua vida a partir do término.'
          },
          {
            title: 'Fim do papel de vítima',
            description: 'Ficar se lamentando e esperando que o mundo sinta pena de você apenas atrai desprezo e estagnação.'
          }
        ],
        practicalAction: 'Identifique uma área da sua vida que você estava negligenciando e tome uma atitude corretiva concreta hoje.',
        checklist: [
          'Assumi total responsabilidade pelas minhas atitudes do dia',
          'Não me vitimizei perante amigos ou familiares',
          'Tomei uma decisão prática para resolver um problema pendente'
        ]
      },
      {
        id: 'g3-c6',
        number: 6,
        title: 'Limites e respeito',
        subtitle: 'A capacidade de dizer e aceitar o "não" com naturalidade',
        readTime: '5 min',
        intro: 'Um homem sem limites é um homem sem respeito próprio. Quem tenta agradar a todos o tempo todo acaba desagradando a si mesmo e perdendo todo o magnetismo.',
        keyPoints: [
          {
            title: 'Dizer não com firmeza e elegância',
            description: 'Você não precisa ser rude para colocar um limite. Um "Não posso dessa vez, obrigado" dito com calma é suficiente.'
          },
          {
            title: 'Respeitar o não alheio',
            description: 'Quando alguém diz não para você, encare como um dado da realidade. Não insista, não faça bico, não faça chantagem emocional.'
          }
        ],
        practicalAction: 'Diga um "não" educado para algo que você realmente não quer ou não pode fazer hoje.',
        checklist: [
          'Coloquei um limite saudável em uma situação cotidiana',
          'Aceitei sem mágoa quando alguém estabeleceu um limite para mim',
          'Preservei meu tempo e minha integridade pessoal'
        ]
      },
      {
        id: 'g3-c7',
        number: 7,
        title: 'Consistência entre palavras e atitudes',
        subtitle: 'O valor sagrado da sua palavra de homem',
        readTime: '5 min',
        intro: 'Promessas fáceis não constroem reputação; atitudes repetidas constroem lendas. O homem magnético faz exatamente o que disse que faria, mesmo quando a motivação inicial sumiu.',
        keyPoints: [
          {
            title: 'Menos discurso, mais entrega',
            description: 'Não anuncie seus planos antes da hora. Deixe que as pessoas vejam os resultados no silêncio do seu trabalho.'
          },
          {
            title: 'Pontualidade e honra',
            description: 'Chegue no horário combinado, cumpra os prazos e mantenha seus compromissos com você mesmo e com os outros.'
          }
        ],
        practicalAction: 'Cumpra hoje com perfeição um compromisso que você vinha procrastinando há tempos.',
        checklist: [
          'Fiz o que me propus a fazer sem desculpas',
          'Fui pontual nos meus horários e entregas de hoje',
          'Alinhei minhas atitudes práticas com os meus valores declarados'
        ]
      },
      {
        id: 'g3-c8',
        number: 8,
        title: 'Como lidar com a rejeição e seguir em frente',
        subtitle: 'Transformar o fim de um capítulo em combustível de evolução',
        readTime: '5 min',
        intro: 'A rejeição não define quem você é; ela define apenas que aquele caminho específico chegou ao fim. Os homens mais admirados da história foram rejeitados dezenas de vezes antes de encontrarem a excelência.',
        keyPoints: [
          {
            title: 'A bênção do redirecionamento',
            description: 'Muitas vezes, aquilo que você achava que era o amor da sua vida era apenas uma escola preparatória para o homem que você precisava se tornar.'
          },
          {
            title: 'O encerramento digno',
            description: 'Agradeça pelo que foi vivido, perdoe os erros do passado e caminhe para o futuro com a certeza de que dias ainda melhores estão por vir.'
          }
        ],
        practicalAction: 'Escreva em uma folha tudo o que você aprendeu com essa experiência e guarde como um troféu de amadurecimento.',
        checklist: [
          'Olhei para o passado com gratidão pelas lições e sem rancor',
          'Reconheci que minha felicidade futura está inteiramente nas minhas mãos',
          'Me sinto pronto e entusiasmado para construir o meu próximo capítulo'
        ]
      }
    ]
  }
];
