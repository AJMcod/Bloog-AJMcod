/*Data copy */
var an = document.querySelector('#ano')
var data = new Date()
var ano = data.getFullYear()
an.innerHTML = ano
    /*Fim Data copy */

/**Carrocel */
var carrocel1 = document.querySelector('#carrocel-1')
var carrocel2 = document.querySelector('#carrocel-2')
var carrocel3 = document.querySelector('#carrocel-3')

/**Variavel html que recebe valor do css */
var fazer = document.querySelector('.carrocel')
var fazer1 = document.querySelector('.carrocel-1')

var preveo = document.querySelector('#preveo')
var next = document.querySelector('#next')

var cont = 0
var cont1 = 1
var cont2 = 2

var imagem = ['img/instagram/thumb-card3.png', 'img/instagram/thumb-card4.png',
    'img/instagram/thumb-card5.png',
    'img/instagram/thumb-card6.png',
    'img/instagram/thumb-card7.png',
    'img/instagram/thumb-card8.png'
]

next.addEventListener('click', mais)
preveo.addEventListener('click', menos)

carrocel1.src = imagem[cont]
carrocel2.src = imagem[cont1]
carrocel3.src = imagem[cont2]

function mais() {
    if (cont2 < imagem.length - 1) {
        fazer.className = 'carroca'
        carrocel1.src = imagem[cont++]
        carrocel2.src = imagem[cont1++]
        carrocel3.src = imagem[cont2++]
    }
}

function menos() {
    if (cont > 0) {
        fazer1.className = 'carroca-1'
        carrocel1.src = imagem[cont--]
        carrocel2.src = imagem[cont1--]
        carrocel3.src = imagem[cont2--]
    }
}
/**Carrocel */


/**Frazes*/
var Autor = document.querySelector('#autor')
var Frase = document.querySelector('#frase')

var motivacionalSlyde = document.querySelector('#frase-motivacional')
var frases = [{
        frase: 'Olhos para o futuro',
        autor: 'Aparecido Manuel'
    },
    {
        frase: 'Investigar estudar e aplicar',
        autor: 'Junilson Manuel'
    },
    {
        frase: 'Esforse-te hoje para amanhâ estares descansado',
        autor: 'Desconhecido'
    },
    {
        frase: 'No principio serás visto como maluco',
        autor: 'Steeven Job'
    },
]
contFrase = 0

function mostrar() {
    motivacionalSlyde.className = 'slyde-frase'
    if (contFrase == frases.length) {
        contFrase = 0
    } else {
        motivacionalSlyde.className = 'slyde-frase'
        Frase.innerHTML = frases[contFrase].frase
        Autor.innerHTML = 'Autor:' + ' ' + frases[contFrase].autor
        contFrase++
    }
}
setInterval(mostrar, 5000)

/**Fim Frazes*/