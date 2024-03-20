import storm from '../imgs/storm.jpg';
import aristoteles from '../imgs/aristoteles.jpg';
import napoleao from '../imgs/napoleao.jpg';
import adao from '../imgs/adao.jpg';

import ottomar from '../imgs/ottomar.png';
import cubos from '../imgs/cubos.png';
import bd from '../imgs/bd.png';
import portfolio from '../imgs/portfolio.png';
import figjam from '../imgs/figjam.png';
import caldeira from '../imgs/caldeira.png';
import pet from '../imgs/pet.png';

const texts = {
    inicio: {
        line1: 'Portfólio Mateus Dotta',
        line2: 'Programador e Designer',
        photo: storm,
        cards: [{
            title: 'Sobre Mim',
            text: 'Meu nome é Mateus, tenho 20 anos e sou Programador Full Stack e Designer. Já me envolvi em vários projetos de programação e Design, principalmente nos cursos que fiz, no Instituto Caldeira e na Cubos Academy. Estou em busca da minha primeira oportunidade profissional na área de tecnologia, mas já trabalhei desde os 11 anos, entregando panfletos, atendente de locadora (sim, locadora de filmes), jardineiro, e muitos outros. Minhas maiores experiências profissionais foram em imobiliárias, como agenciador, onde lidava muito com o público e convencia os proprietários a colocar os imóveis a venda conosco. Obrigado.'
        }]
    },
    habilidades: {
        line1: 'Minhas',
        line2: 'Habilidades',
        photo: napoleao,
        cards: [{
            title: 'JS',
            text: 'Com JavaScript, sou capaz de desenvolver tanto o Back-End, utilizando API REST, quanto o Front-End, com React.',
            link: false
        }, {
            title: 'Comunicação',
            text: 'Considero me comunicar bem, principalmente presencialmente. Expresso bem as minhas ideias e consigo fazer com que todos entendam o que quero dizer.',
            link: false
        }, {
            title: 'React',
            text: 'Tenho um domínio relativo do React e todo este portfólio foi desenvolvido utilizando esta tecnologia.',
            link: false
        }, {
            title: 'Resolução de Problemas',
            text: 'Costumo pensar sempre em “como fazer isso funcionar melhor?”.',
            link: false
        }, {
            title: 'GitHub',
            text: 'Já desenvolvi em equipes, onde todos tinham de utilizar o GitHub em conjunto. Consigo fazer as principais funcionalidades com tranquilidade. Clique e veja meu GitHub.',
            link: false
        }, {
            title: 'Auto gerenciamento',
            text: 'Consigo me adaptar bem quando eu tenho que cuidar dos meus próprios horários e tarefas.',
            link: false
        }, {
            title: 'MUI',
            text: 'Utilizo Material Design nos meus projetos React, e este portfólio foi desenvolvido inteiramente utilizando MUI.',
            link: false
        }, {
            title: 'Trabalho em Equipe',
            text: 'Em equipes, consigo variar bastante entre os extremos. Normalmente, fico como mediador, ponderando todas as ideias e tentando fazer todos falarem.',
            link: false
        }, {
            title: 'Figma',
            text: 'Utilizo o Figma como ferramenta de design, tenho bastante maestria nela e desenvolvi meu portfólio utilizando-a. Clique aqui para ver.',
            link: false
        }, {
            title: 'Adaptalibidade',
            text: 'Ao utilizar qualquer ferramenta, consigo utilizá-la para cumprir meus objetivos. Além disso, me adapto facilmente a mudanças de equipe, regras ou lideranças.',
            link: false
        }]
    },
    programacao: {
        line1: 'Trabalhos de',
        line2: 'Programação',
        photo: aristoteles,
        cards: [{
            title: 'Madereira',
            text: 'Desenvolvi o site de uma madeireira',
            photo: ottomar,
            link: 'https://www.ottomarmadeiras.com'
        }, {
            title: 'Este portfólio',
            text: 'Desenvolvi esse portfólio',
            photo: portfolio,
            link: 'https://github.com/Mateus-S-Dotta/portf-lio'
        }, {
            title: 'Projeto Cubos',
            text: 'Projeto final do curso da Cubos',
            photo: cubos,
            link: 'https://github.com/devRafaCoelho/front-integral-m05-t08'
        }, {
            title: 'Interface Banco de Dados',
            text: 'Interface gráfica para banco de dados',
            photo: bd,
            link: 'https://github.com/Mateus-S-Dotta/Interface-BD--back'
        }]
    },
    design: {
        line1: 'Trabalhos de',
        line2: 'Design',
        photo: adao,
        cards: [{
            title: 'Projeto Final Caldeira',
            text: 'Figma do projeto final do Caldeira',
            photo: pet,
            link: 'https://www.figma.com/file/J1Pyy7rysxQha4MWOSqmRy/Esqueleto-Projeto-Caldeira?type=design&node-id=0%3A1&mode=design&t=NHcArJSBwkBnSazw-1'
        }, {
            title: 'Figjam projeto Caldeira',
            text: 'Figjam do projeto final do Caldeira',
            photo: figjam,
            link: 'https://www.figma.com/file/j5W1pGJC90sdSZIcnsWCPg/matriz-csd?type=whiteboard&node-id=0%3A1&t=kIgAXJ0UX4kjp880-1'
        }, {
            title: 'Este Portfólio',
            text: 'Este portfólio foi desenvolvido com Figma',
            photo: portfolio,
            link: 'https://www.figma.com/file/oYUYLqqoviZFqzWwJMc0nD/Meu-portf%C3%B3lio?type=design&node-id=0%3A1&mode=design&t=TRmFragQYEJ7t2uu-1'
        }, {
            title: 'Figma Primeiro Projeto',
            text: 'Primeiro projeto para passar no Caldeira',
            photo: caldeira,
            link: 'https://www.figma.com/file/cvJB3Guj4waraz888fedDH/Meu-app-(Caldeira%2Fcurso-2)?type=design&mode=design&t=NHcArJSBwkBnSazw-1'
        }]
    },
    pinturas: {
        line1: 'Sobre as',
        line2: 'Pinturas',
        cards: [{
            title: 'A Storm in the Rocky Mountains, Albert Bierstadt',
            text: 'Essa pintura é maravilhosa. Essa pintura, muito característica do pintor e pintada em 1866, ainda é muito influente até hoje e parece muito atual. Quando pensamos em paisagens belas e épicas, sempre pensaremos próximo a estas pinturas. O que mais me impressiona é a quantidade de detalhes. Quaisquer zooms que demos, torna-se perceptível todos os detalhes. A qualidade das sombras e todos os detalhes de cada uma das centenas de árvores, enfim, tornam essa obra incrível.',
            photo: storm
        }, {
            title: 'Incêndio de Moscou, Mazuróvski',
            text: 'Essa pintura mostra quando Napoleão chega a Moscou em 1812, com a cidade em chamas. Como em qualquer acontecimento histórico, existem milhões de fatos e interpretações. Alguns atribuem o fogo aos franceses, outros aos russos. Mas os russos utilizaram a estratégia da "terra arrasada" durante as invasões, o que reforça a teoria de que os russos possam ter incendiado a cidade. Napoleão foi muito polêmico, mas inegavelmente um grande estrategista de guerra. Ele de fato tinha muitas habilidades, por isso essa pintura está nesta seção.',
            photo: napoleao
        }, {
            title: 'Aristóteles Contemplando um Busto de Homero, Rembrandt',
            text: 'Essa obra mostra Aristóteles em um ato de respeito ao busto de Homero. Aristóteles, com uma roupagem do século XVII, em seus escritos, elogia bastante Homero, apesar de algumas críticas, o que torna o quadro mais interessante. Por um lado, podemos ver uma corrente de ouro, que representa o apego às questões materiais, e no outro, vemos a contemplação de Aristóteles ao busto, que representa uma reflexão de sua vida, isso fica ainda mais evidente no rosto do personagem. Aristóteles foi o criador da lógica, praticamente, o que explica o motivo desta obra estar na seção “Programação” no portfólio.',
            photo: aristoteles
        }, {
            title: 'A Criação De Adão, Michelangelo',
            text: 'Essa pintura é A Criação De Adão, Michelangelo. Pintada no teto da Capela Sistina. Há uma interpretação muito interessante dessa obra. Deus, que está à direita, está com o dedo totalmente esticado, porém Adão, à esquerda, parece mais relaxado, como se estivesse menos atento. Como se Deus estivesse se esforçando para alcançar Adão, enquanto Adão parece menos reativo. Sem contar a conhecida curiosidade de que o espaço vermelho onde Deus está tem o formato exato de um cérebro. Essa obra, por representar a "criação", reflete bem o Design, no qual o processo criativo e a criatividade são extremamente importantes.',
            photo: adao
        }]
    }
};

export default texts;