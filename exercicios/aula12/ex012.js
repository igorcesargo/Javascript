var agora = new Date()
var data = agora.getDate()
var hora = agora.getHours()
var minuto = agora.getMinutes()
var segundos = agora.getSeconds()
console.log(`Agora são exatamente ${hora}:${minuto}:${segundos} horas.`)
if (hora < 6) {
    console.log('Boa madrugada!')
} else if (hora <= 11){
    console.log('Bom dia!')
} else if (hora <= 17) {
    console.log('Boa tarde!')
} else if ('hora > 18') {
    console.log('Boa Noite!')
}