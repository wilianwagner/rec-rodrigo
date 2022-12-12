var chute = document.querySelector("#chute")
const b1 = document.querySelector("#b1")
const resp = document.querySelector("h2")
const resp2 = document.querySelector("#rep")
let min = 0
let max = 10
let comparaçao = 0
var repetidos = []
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomIntInclusive(min, max))
var random = getRandomIntInclusive(min, max)
b1.addEventListener("click", (e) => {


    while (chute.value != random) {
console.log(chute.value +"chute while")
        console.log(chute.value)
        console.log(repetidos)

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

        resp.innerText = ("Tente novamente")


        break
    }
    if(chute.value == random)
    {
        resp.innerText = ("Parabéns você acertou")
    }
})