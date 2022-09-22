

function getBotResponse(input) {
    //pedra papel e tesoura
    if (input == "pedra") {
        return '📰papel';
    } else if (input == "papel") {
        return '✂ tesoura, rsrsrs';
    } else if (input == "tesoura") {
        return 'kkkk 💎 pedra';
    }



    // saudação
    if (input == "oi") {
        return 'Olá, Meu nome é Laura sua Técnica em Saúde e Segurança Ocupacional Virtual vamos falar de Saúde e Segurança hoje?🦺👷‍♀️';
    } else if (input == "bom dia") {
        return 'bom dia, Meu nome é Laura sua Técnica em Saúde e Segurança Ocupacional Virtual vamos falar de Saúde e Segurança hoje?🦺👷‍♀️';
    } else if (input == "boa tarde") {
        return 'boa tarde, Meu nome é Laura sua Técnica em Saúde e Segurança Ocupacional Virtual vamos falar de Saúde e Segurança hoje?🦺👷‍♀️';
    }else if (input == "boa noite") {
        return 'Boa noite, Meu nome é Laura sua Técnica em Saúde e Segurança Ocupacional Virtual vamos falar de Saúde e Segurança hoje?🦺👷‍♀️';
    } else if (input == 'qual seu nome') {
        return 'Meu nome é Laura... assim escolheram meus DEVS! só não me pergunte o porque rsrsrs!'
    } else if (input == 'porque') {
      return 'Não resistiu né rsrsrs';
    }

    //despedida
    else if (input == 'tchau') {
      return 'Até logo';
    } else if (input == 'adeus') {
        return 'Muito obrigado pela sua atenção';
    } else if (input == 'bye bye') {
        return 'Good Bye';
    } else if (input == 'ate logo') {
        return 'Estarei aqui quando precisar'
    }
 
    //NRS
    else if (input == 'nr') {
      return 'Heyyy, ta falando com a IA certa! Qual Nr quer consultar?';
    } else if (input == 'nr 01') {
      return 'Norma Regulamentadora nr.º 01 – O objetivo desta Norma é estabelecer as disposições gerais, o campo de aplicação, os termos e as definições comuns às Normas Regulamentadoras - NR relativas a segurança e saúde no trabalho e as diretrizes e os requisitos para o gerenciamento de riscos ocupacionais e as medidas de prevenção em Segurança e Saúde no Trabalho - SST.';
    } else if (input == '01') {
      return 'Norma Regulamentadora nr.º 01 – O objetivo desta Norma é estabelecer as disposições gerais, o campo de aplicação, os termos e as definições comuns às Normas Regulamentadoras - NR relativas a segurança e saúde no trabalho e as diretrizes e os requisitos para o gerenciamento de riscos ocupacionais e as medidas de prevenção em Segurança e Saúde no Trabalho - SST.';
    } else if (input == '1') {
      return 'Norma Regulamentadora nr.º 01 – O objetivo desta Norma é estabelecer as disposições gerais, o campo de aplicação, os termos e as definições comuns às Normas Regulamentadoras - NR relativas a segurança e saúde no trabalho e as diretrizes e os requisitos para o gerenciamento de riscos ocupacionais e as medidas de prevenção em Segurança e Saúde no Trabalho - SST.';
    } 


    //NHO
    else if (input == 'nho') {
        return 'Mais uma sigla de muita importância! Normas de Higiene Ocupacional, são normas técnicas desenvolvidas pela Fundacentro.';
    } else if (input == 'objetivo da nho') {
        return 'Além das NRs – Normas Regulamentadoras, criadas pelo MTE para a segurança do trabalho, as NHOs tem como o foco dela é determinar limites de tolerância, metodologia de avaliação, critérios técnicos de equipamentos usados nas avaliações de riscos ocupacionais, bem como, servem de orientação sobre formas de agentes de riscos ambientais';
    } else if (input == 'quantas nhos existem') {
        return 'Temos 11 NHOs, porém vamos começar falando que a NHO 02, está em processo de reavaliação, então podemos dizer que temos ativa 10 NHO, se quiser saber o que cada uma diz, ou estabelece digite por exemplo: NHO 01';
    }

    //assunto
    else if (input == 'sim') {
      return 'Show sobre o que vamos falar EPI, NHO, PGR, NR, bate papo ou jogar pedra papel e tesoura?';
    } else if (input == 'yes') {
      return 'VériGudi... Ops, desculpe até tentei mas não me programarão para outra lingua ^^! vamos falar de EPI, NR, Bater um papo ou jogar pedra papel e tesoura?';
    } else if (input == 'nao') {
      return 'Olha, não tem problema mesmo! Mas caso queira, estarei aqui a sua disposição ^^ S2';
    } else if (input == 'jogar') {
      return 'Você começa! ;)';
    } else if (input == 'pedra papel tesoura') {
      return 'Você começa! ;)';
    }

    //EPI
    else if (input == 'epi') {
      return 'Que bom, A verdade é que mesmo sendo uma obrigação, muitas vezes os EPIs não são utilizados corretamente, o que acaba gerando um transtorno enorme.Mas sobre qual tipo de EPI, me fala um tema relacionado ex: Ruído, Altura, Espaço confinado etc...';
    } else if (input == 'ruido') {
      return 'Os mais simples é o tipo protetor auricular, também conhecidos como tampões ou “plugs“. Porém, também encontramos outros tipos de EPIs, os protetores chamados de “concha”, “fone” ou “abafador“. Se você tem dúvidas sobre qual é o EPI mais adequado para a sua atividade digite seu cargo.';
    } else if (input == 'altura') {
      return '1 - Cinto de Segurança tipo paraquedista. 2 - Talabartes simples. 3 - Talabarte Y. 4 - Talabarte ajustável ( de posicionamento ) 5 - Trava-quedas. 6 - Capacete com jugular. 7 - Botinas de Segurança. 8 - Óculos de segurança.';
    } else if (input == 'mecanico') {
      return 'Seus EPIs devem ser: Protetor auricular (geralmente em plugs), bota com bicos de aço, óculos de proteção e creme protetor para as mãos (luva quimica).';
    } else if (input == 'manutencao') {
      return 'similar aos EPIs distribuídos para mecânicos, os EPIs são: Protetor auricular (geralmente em plugs), bota com bicos de aço, óculos de proteção e creme protetor para as mãos (luva quimica).';
    } else if (input == 'faxineiro') {
      return 'Existem vários tipos de EPIs para limpeza profissional, dentre eles os mais comuns: Luvas de proteção, protetor auricular (dependendo da área não há necessidade, se o ruído da sua área te atrapalhar, UTILIZE), botas, respirador (dependerá da sua área de atuação) e avental.';
    } else if (input == 'auxiliar de limpeza') {
      return 'Existem vários tipos de EPIs para limpeza profissional, dentre eles os mais comuns: Luvas de proteção, protetor auricular (dependendo da área não há necessidade, se o ruído da sua área te atrapalhar, UTILIZE), botas, respirador (dependerá da sua área de atuação) e avental.';
    } else if (input == 'gari') {
        return 'Seus EPIs serão: Luvas de proteção, Botinas de segurança, protetor auricular, vestimenta de segurança (EPIs que protege todo o corpo).';
    } else if (input == 'coletor de lixo') {
        return 'Seus EPIs serão: Luvas de proteção, Botinas de segurança, protetor auricular, vestimenta de segurança (EPIs que protege todo o corpo).';
    } else if (input == 'lixeiro') {
        return 'Seus EPIs serão: Luvas de proteção, Botinas de segurança, protetor auricular, vestimenta de segurança (EPIs que protege todo o corpo).';
    } else if (input == 'calor') {
        return 'Vindo de uma fonte artificial, os EPIs para calor são: Avental térmico, Luvas térmicas, Mangotes térmicos ou EPIs de corpo inteiro (depende da sua área de atuação).';
    } else if (input == 'vibracao') {
        return 'As luvas antivibração são essenciais para este risco.';
    }

    //bate papo
    else if (input == 'bate papo') {
      return 'Show, você sabia que o Prof. Maurício vai ser Pai! :O';
    } else if (input == 'bater papo') {
      return 'Morre um trabalhador a cada 15 segundos.';
    } else if (input == 'nossa') {
      return 'Nem me fala, mas olha estou recrutando pessoas para fazer parte do meu grupo seleto de SUPER HERÓIS... Isso não é o máximo, divulgue todo conhecimento que puder extrair da nossa BASE nas NUVENS... S2 não vejo a hora de começarmos a salvar vidas!';
    } else if (input == 'mais') {
      return 'A fadiga é um dos maiores causadores de acidente de trabalho.';
    }




    //pergunta fora da base de dados
    else {
      return (
        'Eita não encontrei nada, mas fique tranquiles viu vou avisar meus Devs!' +
        ' Agora vamos tentar outro assunto Ex: EPI, NHO, PGR, NR, Bater um papo ou jogar pedra papel e tesoura e para recomeçar é só dizer ' +
        ' Bom dia, Boa tarde, Boa noite etc...'
      );
    }
}


