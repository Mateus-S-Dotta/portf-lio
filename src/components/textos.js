import storm from '../imgs/storm.jpg';
import sisifo from '../imgs/sisifo.jpg';
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
        linha1: 'Portfólio Mateus Dotta',
        linha2: 'Programador e Designer',
        opcao1: 'Sobre Mim',
        opcao2: 'Meus Trabalhos',
        foto: storm,
        cards: [{
            titulo: 'Sobre Mim',
            texto: 'Meu nome é Mateus, tenho 20 anos e sou Programador Full Stack e Designer. Já me envolvi em vários projetos de programação e Design, principalmente nos cursos que fiz, no Instituto Caldeira e na Cubos Academy. Estou em busca da minha primeira oportunidade profissional na área de tecnologia, mas já trabalhei desde os 11 anos, entregando panfletos, atendente de locadora (sim, locadora de filmes), jardineiro, e muitos outros. Minhas maiores experiências profissionais foram em imobiliárias, como agenciador, onde lidava muito com o público e convencia os proprietários a colocar os imóveis a venda conosco. Obrigado.'
        }]
    },
    trabalhos: {
        linha1: 'Desenvolvi trabalhos de',
        linha2: 'Programação e de Design',
        opcao1: 'Trabalhos de Programação',
        opcao2: 'Trabalhos de Design',
        foto: sisifo,
    },
    habilidades: {
        linha1: 'Minhas',
        linha2: 'Habilidades',
        foto: napoleao,
        cards: [{
            titulo: 'JS',
            texto: 'Com JavaScript, sou capaz de desenvolver tanto o Back-End, utilizando API REST, quanto o Front-End, com React.',
            link: false
        }, {
            titulo: 'Comunicação',
            texto: 'Considero me comunicar bem, principalmente presencialmente. Expresso bem as minhas ideias e consigo fazer com que todos entendam o que quero dizer.',
            link: false
        }, {
            titulo: 'React',
            texto: 'Tenho um domínio relativo do React e todo este portfólio foi desenvolvido utilizando esta tecnologia.',
            link: false
        }, {
            titulo: 'Resolução de Problemas',
            texto: 'Costumo pensar sempre em “como fazer isso funcionar melhor?”.',
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
            texto: 'Utilizo Material Design nos meus projetos React, e este portfólio foi desenvolvido inteiramente utilizando MUI.',
            link: false
        }, {
            titulo: 'Trabalho em Equipe',
            texto: 'Em equipes, consigo variar bastante entre os extremos. Normalmente, fico como mediador, ponderando todas as ideias e tentando fazer todos falarem.',
            link: false
        }, {
            titulo: 'Figma',
            texto: 'Utilizo o Figma como ferramenta de design, tenho bastante maestria nela e desenvolvi meu portfólio utilizando-a. Clique aqui para ver.',
            link: false
        }, {
            titulo: 'Adaptalibidade',
            texto: 'Ao utilizar qualquer ferramenta, consigo utilizá-la para cumprir meus objetivos. Além disso, me adapto facilmente a mudanças de equipe, regras ou lideranças.',
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
            titulo: 'A Storm in the Rocky Mountains, Albert Bierstadt',
            texto: 'Essa pintura é maravilhosa. Essa pintura, muito característica do pintor e pintada em 1866, ainda é muito influente até hoje e parece muito atual. Quando pensamos em paisagens belas e épicas, sempre pensaremos próximo a estas pinturas. O que mais me impressiona é a quantidade de detalhes. Quaisquer zooms que demos, torna-se perceptível todos os detalhes. A qualidade das sombras e todos os detalhes de cada uma das centenas de árvores, enfim, tornam essa obra incrível.',
            foto: storm
        }, {
            titulo: 'Incêndio de Moscou, Mazuróvski',
            texto: 'Essa pintura mostra quando Napoleão chega a Moscou em 1812, com a cidade em chamas. Como em qualquer acontecimento histórico, existem milhões de fatos e interpretações. Alguns atribuem o fogo aos franceses, outros aos russos. Mas os russos utilizaram a estratégia da "terra arrasada" durante as invasões, o que reforça a teoria de que os russos possam ter incendiado a cidade. Napoleão foi muito polêmico, mas inegavelmente um grande estrategista de guerra. Ele de fato tinha muitas habilidades, por isso essa pintura está nesta seção.',
            foto: napoleao
        }, {
            titulo: 'Sísifo, de Tiziano',
            texto: 'Essa pintura é de Sísifo, personagem grego que enganou a morte diversas vezes. Por conta disso, recebeu como punição ser condenado a passar o restante da eternidade levando uma rocha para o topo de uma montanha e, quando lá chegasse, a rocha cairia, tendo de fazer o serviço novamente. Existe uma versão dessa pintura onde Zeus é quem joga a rocha montanha a baixo. Embora não seja uma tarefa divertida, sempre me vem à cabeça quando penso em pinturas sobre o trabalho. Por isso, está na seção "Trabalhos" do portfólio.',
            foto: sisifo
        }, {
            titulo: 'A Última Ceia, da Vinci',
            texto: 'Essa pintura é A Última Ceia, de Leonardo da Vinci. Pintada na parede de um refeitório de uma igreja, se tornou um clássico. Demorou muito tempo para que eu decidisse incluir esta pintura na seção de programação, mas realmente é difícil pensar em outra opção. Esse quadro é bastante matemático, por conta de suas proporções, tamanhos e separações. Jesus está no centro, e de cada lado há uma porta e 4 janelas, o mesmo número de apóstolos. Devido a essa matemática e proporção, era impossível não incluí-lo na seção de programação.',
            foto: ceia
        }, {
            titulo: 'A Criação De Adão, Michelangelo',
            texto: 'Essa pintura é A Criação De Adão, Michelangelo. Pintada no teto da Capela Sistina. Há uma interpretação muito interessante dessa obra. Deus, que está à direita, está com o dedo totalmente esticado, porém Adão, à esquerda, parece mais relaxado, como se estivesse menos atento. Como se Deus estivesse se esforçando para alcançar Adão, enquanto Adão parece menos reativo. Sem contar a conhecida curiosidade de que o espaço vermelho onde Deus está tem o formato exato de um cérebro. Essa obra, por representar a "criação", reflete bem o Design, no qual o processo criativo e a criatividade são extremamente importantes.',
            foto: adao
        }]
    }
};

export default textos;