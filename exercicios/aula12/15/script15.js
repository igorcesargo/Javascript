function verificar(){
var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.querySelector('div#res')

if(fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verificar os dados e tente novamente!')
}else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
   
    if(fsex[0].checked){
        genero = 'Homem' 
    if(idade >=0 && idade < 3) {
            //bebe
            img.setAttribute('src', '0-3-menino.jpg')
        } else if (idade < 9) {
            //criança
        } else if (idade < 14) {
            //Pre-adolescente
        } else if (idade < 17) {
            //Adolescente
        } else if (idade < 24) {
            //Jovem
        } else if (idade < 34) {
            //Adulto
        } else if (idade < 44) {
            //pre
        } else if (idade < 54) {
            //Menopausa
        }
        else {
            //Idoso
        }
    }else if (fsex[1].checked){
        genero = 'Mulher'
        if(idade >=0 && idade < 3) {
            //bebe
            img.setAttribute('src','0-3.jpg')
        } else if (idade < 9) {
            //criança
        } else if (idade < 14) {
            //Pre-adolescente
        } else if (idade < 17) {
            //Adolescente
        } else if (idade < 24) {
            //Jovem
        } else if (idade < 34) {
            //Adulto
        } else if (idade < 44) {
            //pre
        } else if (idade < 54) {
            //Menopausa
        }
        else {
            //Idoso
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
    
}
}