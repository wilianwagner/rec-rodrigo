//Código para gerar um numero aleatorio e fazer o usuario tentar acertar

//variaveis e arrays
var chute = document.querySelector("#chute")
const b1 = document.querySelector("#b1")
const resp = document.querySelector("h2")
const resp2 = document.querySelector("#rep")
let min = 0
let max = 10
let comparaçao = 0
var repetidos = []



//função que gera meu numero aleatorio
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomIntInclusive(min, max))
var random = getRandomIntInclusive(min, max)


//acionamento do botão chute do usuario
b1.addEventListener("click", (e) => {

//repetição para varias tentativas enquanto errado
    while (chute.value != random) {
        console.log(chute.value + "chute while")
        console.log(chute.value)
        console.log(repetidos)

        //teste para saber se há numeros repetidos
        var teste = repetidos.lastIndexOf(chute.value)
        console.log(teste + "teste")
        repetidos.push(chute.value)
        if (teste == -1) {
            resp2.innerText = (repetidos)
        }
        else {
            repetidos.forEach(function (comparação) {
                if (comparação == chute.value);
                {
                    resp2.innerText = ("Esse numero já foi utilizado")

                }

            })
        };
//encerra o teste aqui
        resp.innerText = ("Tente novamente")


        break
    }
    if (chute.value == random) {
        resp.innerText = ("Parabéns você acertou")
    }
})

//boa sorte corrigindo