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
            img.setAttribute('src','4-9-menino.jpg')
        } else if (idade < 14) {
            //Pre-adolescente
            img.setAttribute('src','10-14-menino.jpg')
        } else if (idade < 17) {
            //Adolescente
            img.setAttribute('src','15-17-menino.jpg')
        } else if (idade < 24) {
            //Jovem
            img.setAttribute('src','18-24-homem.jpg')
        } else if (idade < 34) {
            //Adulto
            img.setAttribute('src','25-34-homem.jpg')
        } else if (idade < 44) {
            //pre
            img.setAttribute('src','35-44-homem.jpg')
        } else if (idade < 54) {
            //Menopausa
            img.setAttribute('src','45-55-homem.jpg')
        }
        else {
            //Idoso
            img.setAttribute('src','56-homem.jpg')
        }
    }else if (fsex[1].checked){
        genero = 'Mulher'
        if(idade >=0 && idade < 3) {
            //bebe
            img.setAttribute('src','0-3.jpg')
        } else if (idade < 9) {
            //criança
            img.setAttribute('src','4-9-menina.jpg')
        } else if (idade < 14) {
            //Pre-adolescente
            img.setAttribute('src','10-14-menina.jpg')
        } else if (idade < 17) {
            //Adolescente
            img.setAttribute('src','15-17-menina.jpg')
        } else if (idade < 24) {
            //Jovem
            img.setAttribute('src','18-24-mulher.jpg')
        } else if (idade < 34) {
            //Adulto
            img.setAttribute('src','25-34-mulher.jpg')
        } else if (idade < 44) {
            //pre
            img.setAttribute('src','35-44-mulher.jpg')
        } else if (idade < 54) {
            //Menopausa
            img.setAttribute('src','45-55-mulher.jpg')
        }
        else {
            //Idoso
            img.setAttribute('src','56-mulher.jpg')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos. <br>`
    res.appendChild(img)
    
}
}