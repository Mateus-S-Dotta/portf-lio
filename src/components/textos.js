import atenas from '../imgs/atenas.jpg';
import ivan from '../imgs/ivan.jpg';
import sisifo from '../imgs/sisifo.jpg';
import prudencia from '../imgs/prudencia.jpg';
import ceia from '../imgs/ceia.jpg';
import napoleao from '../imgs/napoleao.jpg';
import adao from '../imgs/adao.jpg';

import ottomar from '../imgs/ottomar.png';
import cubos from '../imgs/cubos.png';
import bd from '../imgs/bd.png';
import portfolio from '../imgs/portfolio.png';
import figjam from '../imgs/figjam.png';
import caldeira from '../imgs/caldeira.png';
import pet from '../imgs/pet.png';

const textos = {
    inicio: {
        linha1: 'Mateus Salaibb Dotta',
        linha2: 'Sou Programador e Designer',
        opcao1: 'Sobre Mim',
        opcao2: 'Meus Trabalhos',
        foto: atenas,
    },
    sobremim: {
        linha1: 'Há muito para conhecer',
        linha2: 'Sobre Mim',
        opcao1: 'Curiosidades e Outros',
        opcao2: 'Minhas Habilidades',
        foto: ivan,
    },
    trabalhos: {
        linha1: 'Desenvolvi trabalhos de',
        linha2: 'Programação e de Design',
        opcao1: 'Trabalhos de Programação',
        opcao2: 'Trabalhos de Design',
        foto: sisifo,
    },
    curiosidades: {
        linha1: 'Minhas',
        linha2: 'Curiosidades',
        foto: prudencia,
        cards: [{
            titulo: 'Veja as pinturas',
            texto: 'Clique aqui e veja um pouco sobre cada uma das pinturas e entenda por que elas estão neste portfólio.',
            link: '/pinturas'
        }, {
            titulo: 'Já fui agenciador',
            texto: 'Já trabalhei em muitos setores, mas o principal foi atendimento ao cliente em duas imobiliárias. Tinha de captar imóveis para nosso catálogo de vendas.',
            link: false
        }, {
            titulo: 'Livros',
            texto: 'Tenho uma biblioteca com mais de 80 livros. Estou ainda no processo de ler tudo.',
            link: false
        }, {
            titulo: 'Xadrez',
            texto: 'Gosto bastante de jogar xadrez. Me considero jogar bem.',
            link: false
        }, {
            titulo: 'Poemas',
            texto: 'Tenho aproximadamente 15 poemas decorados.',
            link: false
        }, {
            titulo: 'Cozinha',
            texto: 'Sou o melhor cozinheiro de 20 anos da minha casa. Com esses critérios, ninguém cozinha melhor que eu.',
            link: false
        }]
    },
    habilidades: {
        linha1: 'Minhas',
        linha2: 'Habilidades',
        foto: napoleao,
        cards: [{
            titulo: 'JS',
            texto: 'Com JavaScript, consigo desenvolver tanto Back-End quanto Front-End. Em Back com API REST e no Front com React.',
            link: false
        }, {
            titulo: 'Comunicação',
            texto: 'Considero me comunicar bem, principalmente presencialmente. Expresso bem as minhas ideias e consigo fazer com que todos entendam o que quero dizer.',
            link: false
        }, {
            titulo: 'React',
            texto: 'Consigo usar esse framework com relativa maestria. Todo este portfólio foi desenvolvido em React.',
            link: false
        }, {
            titulo: 'Resolução de Problemas',
            texto: 'Costumo pensar sempre em “como fazer isso funcionar melhor?”. ',
            link: false
        }, {
            titulo: 'GitHub',
            texto: 'Já desenvolvi em equipes, onde todos tinham de utilizar o GitHub em conjunto. Consigo fazer as principais funcionalidades com tranquilidade. Clique e veja meu GitHub.',
            link: false
        }, {
            titulo: 'Autogerenciamento',
            texto: 'Consigo me adaptar bem quando eu tenho que cuidar dos meus próprios horários e tarefas.',
            link: false
        }, {
            titulo: 'MUI',
            texto: 'Uso Material Design nos meus projetos React. Este portfólio todo foi desenvolvido utilizando MUI.',
            link: false
        }, {
            titulo: 'Trabalho em Equipe',
            texto: 'Em equipes, consigo variar bastante entre os extremos. Normalmente, fico como mediador, ponderando todas as ideias e tentando fazer todos falarem.',
            link: false
        }, {
            titulo: 'Figma',
            texto: 'Uso o Figma como ferramenta de Design. Tenho bastante maestria na ferramenta. Desenvolvi o portfólio com ele. Clique e veja.',
            link: false
        }, {
            titulo: 'Adaptalibidade',
            texto: 'Ao utilizar quaisquer ferramentas, consigo utilizá-la para cumprir meus objetivos. E me adapto bastante a mudança de equipe, regras ou lideranças.',
            link: false
        }]
    },
    programacao: {
        linha1: 'Trabalhos de',
        linha2: 'Programação',
        foto: ceia,
        cards: [{
            titulo: 'Madereira',
            texto: 'Desenvolvi o site de uma madeireira',
            foto: ottomar,
            link: 'https://ottomar.vercel.app/'
        }, {
            titulo: 'Este portfólio',
            texto: 'Desenvolvi esse portfólio',
            foto: portfolio,
            link: false
        }, {
            titulo: 'Projeto Cubos',
            texto: 'Projeto final do curso da Cubos',
            foto: cubos,
            link: 'https://github.com/devRafaCoelho/front-integral-m05-t08'
        }, {
            titulo: 'Interface Banco de Dados',
            texto: 'Interface gráfica para banco de dados',
            foto: bd,
            link: 'https://github.com/Mateus-S-Dotta/Interface-BD--back'
        }]
    },
    design: {
        linha1: 'Trabalhos de',
        linha2: 'Design',
        foto: adao,
        cards: [{
            titulo: 'Projeto Final Caldeira',
            texto: 'Figma do projeto final do Caldeira',
            foto: pet,
            link: 'https://www.figma.com/file/J1Pyy7rysxQha4MWOSqmRy/Esqueleto-Projeto-Caldeira?type=design&node-id=0%3A1&mode=design&t=NHcArJSBwkBnSazw-1'
        }, {
            titulo: 'Figjam projeto Caldeira',
            texto: 'Figjam do projeto final do Caldeira',
            foto: figjam,
            link: 'https://www.figma.com/file/j5W1pGJC90sdSZIcnsWCPg/matriz-csd?type=whiteboard&node-id=0%3A1&t=kIgAXJ0UX4kjp880-1'
        }, {
            titulo: 'Este Portfólio',
            texto: 'Este portfólio foi desenvolvido com Figma',
            foto: portfolio,
            link: 'https://www.figma.com/file/oYUYLqqoviZFqzWwJMc0nD/Meu-portf%C3%B3lio?type=design&node-id=0%3A1&mode=design&t=TRmFragQYEJ7t2uu-1'
        }, {
            titulo: 'Figma Primeiro Projeto',
            texto: 'Primeiro projeto para passar no Caldeira',
            foto: caldeira,
            link: 'https://www.figma.com/file/cvJB3Guj4waraz888fedDH/Meu-app-(Caldeira%2Fcurso-2)?type=design&mode=design&t=NHcArJSBwkBnSazw-1'
        }]
    },
    pinturas: {
        linha1: 'Sobre as',
        linha2: 'Pinturas',
        cards: [{
            titulo: 'Escola de Atenas, Rafael',
            texto: 'Essa pintura representa, em alguma medida, todos os filósofos gregos. No meio da pintura, está Platão (à esquerda) e Aristóteles (à direita). Platão aponta para cima, para representar o “Mundo das Ideias”, um conceito abordado em vários dos seus diálogos. Aristóteles aponta para o chão, focando na realidade, assim como na sua filosofia. Outra interpretação é que ele está apontando para frente, convidando o expectador para a filosofia. Sinta-se no Hall de entrada do meu portifólio e siga o convite.',
            foto: atenas
        }, {
            titulo: 'Ivan, o Terrível e seu filho Ivan, Répin',
            texto: 'Essa pintura mostra Ivan, O Terrível, o primeiro Czar da Rússia, abraçado ao seu filho. Ivan matou o próprio filho e existem muitas teorias sobre o caso, uma delas é que Ivan o matou com o cetro real, com pauladas na cabeça. Não se tem certeza também se ele de fato se arrependeu de ter feito isso, mas com muita sutileza, a pintura mostra que sim. Eu acho o tema história da Rússia muito interessante, e essa pintura mostra que o Czarismo não começou bem. Por conta da sutileza e pela história, gosto bastante desse quadro.',
            foto: ivan
        }, {
            titulo: 'Prudência, Luca Giordano',
            texto: 'Essa pintura mostra a virtude da prudência, que significa, pela definição, escolher o melhor meio para determinado fim. Sinceramente, pouco sei da relação entre a virtude e a pintura. A prudência é uma virtude prática e intelectual ao mesmo tempo, pois é “decisão”, algo pessoal e que necessita reflexão, dos “meios”, às nossas ações no mundo. É chamada de a mãe das virtudes, pois todas as nossas escolhas, mesmo as virtuosas, precisam ser tomadas com base nela. Está no curiosidades pois eu tento sempre torná-la mais presente nas minhas decisões.',
            foto: prudencia
        }, {
            titulo: 'Incêndio de Moscou, Mazuróvski',
            texto: 'Essa pintura mostra quando Napoleão chega a Moscou em 1812, com a cidade em chamas. Como em qualquer acontecimento histórico, existem milhões de fatos e interpretações. Alguns atribuem o fogo aos franceses, outros aos russos. Mas os russos utilizaram a estratégia da “terra arrasada” durante as invasões, o que confirma um pouco a teoria de os russos terem jogado fogo na cidade. Napoleão, foi muito polemico, mas inegavelmente, foi um grande estrategista de guerra. Ele de fato tinha muitas habilidades, e por isso essa pintura está nesta seção.',
            foto: napoleao
        }, {
            titulo: 'Sísifo, de Tiziano',
            texto: 'Essa pintura é de Sísifo, personagem grego que enganou a morte diversas vezes e por conta disso, recebeu como punição ser condenado a passar o restante da eternidade levando uma rocha para o topo de uma montanha e quando lá chegasse, a rocha cairia, tendo de fazer o serviço novamente. Existe uma versão dessa pintura onde Zeus é quem joga a pedra montanha a baixo. Aparentemente não é uma tarefa divertida, porém quando penso em pinturas sobre trabalhar, sempre me vem à cabeça. Por isso que está na seção “Trabalhos” do portfólio.',
            foto: sisifo
        }, {
            titulo: 'A Última Ceia, da Vinci',
            texto: 'Essa pintura é A Última Ceia, de Leonardo da Vinci. Pintada na parede de um refeitório de uma igreja, se tornou um clássico. Demorou muito tempo para esta pintura vir à minha mente para colocá-la na seção programação, mas realmente é difícil pensar em outra. Esse quadro é bastante matemático, por conta de suas proporções, tamanhos, separações, enfim. Jesus no centro, e em cada lado há uma porta, 4 janelas, o mesmo número de apóstolos, Por conta dessa matemática e proporção, era impossível não deixá-lo na seção programação.',
            foto: ceia
        }, {
            titulo: 'A Criação De Adão, Michelangelo',
            texto: 'Essa pintura é A Criação De Adão, Michelangelo. Pintada no teto da Capela Sistina. Há uma interpretação muito interessante dessa obra. Deus, que está à direita, está com o dedo totalmente esticado, porém Adão, à esquerda, não está. Como se Deus estivesse fazendo esforço para vir até nós e nós não. Sem contar a batida curiosidade de que o espaço vermelho onde Deus está tem o formato exato de um cérebro. Essa obra, por ser a “criação”, representa bem o Design, onde é extremamente importante o processo criativo e a criatividade.',
            foto: adao
        }]
    }
};

export default textos;