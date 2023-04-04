function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
 var hora = 20//var hora = data.getHours()

var minutos = data.getMinutes()
msg.innerHTML = `Agora são ${hora}:${minutos} hrs`
if (hora >= 0 && hora < 12) {
    //BOM DIA!
    img.src = 'imagem/manha.jpg'
    document.body.style.background = '#e2cd9f'
} else if (hora >= 12 && hora < 18) {
    //BOA TARDE
    img.src = 'imagem/tarde.jpg'
    document.body.style.background = '#b9846f'
} else {
    // BOA NOITE
    img.src = 'imagem/noite.jpg'
    document.body.style.background = '#515154'
}
}