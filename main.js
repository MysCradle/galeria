class Personagem {
    constructor(nome, idade, raca, classe, habilidade, descricao, image, estado, organizacao, reino) {
        this.nome = nome;
        this.idade = idade;
        this.raca = raca;
        this.classe = classe;
        this.habilidade = habilidade;
        this.descricao = descricao
        this.image = image;
        this.estado = estado;
        this.organizacao = organizacao;
        this.reino = reino;
    }
}

let count = 0
let personagens = []
/**
 * @param {{
 *   nome: string,
 *   raca: string,
 *   classe: string,
 *   habilidade: object,
 *   descricao?: string,
 *   image?: string
 * }} p
 */
function criarPersonagem(p) {
    const personagem = new Personagem(p.nome, p.idade, p.raca, p.classe, p.habilidade, p.descricao, p.image, p.estado, p.organizacao, p.reino)
    personagens.push(personagem)
    count++
    return personagem
}

function mostrarMais(event) {
    const seta = event.currentTarget.querySelector('.seta-svg');
    const container = event.currentTarget.closest('.container');
    container.classList.toggle('ativo');
    seta.classList.toggle('ativo');
}

function zoomImage() {
    const img = event.target;
    const modal = document.getElementById('zoomModal');
    const zoomedImage = document.getElementById('zoomedImage');

    zoomedImage.src = img.src;
    modal.style.display = 'flex';
}

function closeZoom() {
    document.getElementById('zoomModal').style.display = 'none';
}

function mostrarPersonagens() {
    const output = document.getElementById("output");
    output.innerHTML = "";

    for (let i of personagens) {
        output.innerHTML += `
            <div class="container">
                <img onclick="zoomImage()" src="${i.image}">
                <strong>Nome:</strong> ${i.nome}<br>
                <strong>Idade:</strong> ${i.idade}<br>
                <strong>Raça:</strong> ${i.raca}<br>
                <strong>Classe:</strong> ${i.classe}<br>
                <strong>Habilidade:</strong> ${i.habilidade}<br>
                <strong>Reino:</strong> ${i.reino}<br>
                <strong>Organizacao:</strong> ${i.organizacao}<br>
                <strong>Estado:</strong> ${i.estado}<br>
                <strong>Descrição:</strong> ${i.descricao}
                <div class="container-depth">
                    <div onclick="mostrarMais(event)" class=" seta" title="clique para ver mais">
                        <svg class="seta-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9L12 15L18 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        `;
    }
}


const classe = {
    c1: 13,
    c2: 23
}

const Magico = {
    nome: "MAGICO",
    idade: 95,
    raca: "Humano",
    classe: "Mago",
    habilidade: "Fusão",
    estado: "Vivo",
    reino: "Astas",
    organizacao: "Jinsei no Unmei",
    descricao: "Maior Mago e Feiticeiro do mundo",
    image: "./src/magico.jpg"
}
const Kama = {
    nome: "Kama",
    idade: 20,
    raca: "Híbrido",
    classe: "Andarilho",
    habilidade: "Audição",
    estado: "Vivo",
    reino: "Apoena",
    organizacao: "???",
    descricao: "Ataca com Espada e garras que são como foices que cortam o ar",
    image: "./src/kamaitachi.jpg",
}
const Maggye = {
    nome: "Maggye",
    idade: 60,
    raca: "Humana",
    classe: "Maga",
    habilidade: "Controlar os 8 elementos da natureza",
    estado: "Morta",
    reino: "Samir",
    organizacao: "Jinsei no Unmei",
    descricao: "A maga dominadora com mais diversidade elementar (fogo, água, ar, terra, raio, ferro, areia, magia)",
    image: "./src/maggye_.png",
}
const Sammie = {
    nome: "Sammie",
    idade: 19,
    raca: "Monstro",
    classe: "Feiticeira",
    habilidade: "Invoca copias monstruosas de si",
    estado: "Viva",
    reino: "Apoena",
    organizacao: "Redemon",
    descricao: "jovem Feiticeira e encantadora de monstros, atrai monstros e híbridos e os ataca com suas criaturas",
    image: "./src/sammie.png",
}
criarPersonagem(Maggye)
criarPersonagem(Magico)
criarPersonagem(Kama)
criarPersonagem(Sammie)

mostrarPersonagens()


const light = document.getElementById("light")

light.addEventListener('click', ()=>{
    if (document.body.classList.contains('tema--escuro')){
        document.body.classList.remove('tema--escuro')
        document.body.classList.add('tema--claro')
    }else{
        document.body.classList.remove('tema--claro')
        document.body.classList.add('tema--escuro')
    }
})  