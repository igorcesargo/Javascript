$(document).ready(function() {
    var produtosContainer = $(".produtos-rolando");
    var produtos = $(".produtos");
    var setaEsquerda = $(".seta-esquerda");
    var setaDireita = $(".seta-direita");
    
    var passoRolagem = 320; // ajuste a quantidade de pixels a ser rolada de cada vez
    
    // habilitar a rolagem por gestos de deslize em dispositivos móveis
    produtosContainer.swipe({
      swipeLeft: function() {
        produtos.animate({marginLeft: "-=" + passoRolagem + "px"}, 500);
      },
      swipeRight: function() {
        produtos.animate({marginLeft: "+=" + passoRolagem + "px"}, 500);
      },
      allowPageScroll: "auto"
    });
    
    // habilitar a rolagem clicando nas setas de navegação
    setaEsquerda.click(function() {
      produtos.animate({marginLeft: "+=" + passoRolagem + "px"}, 500);
    });
    
    setaDireita.click(function() {
      produtos.animate({marginLeft: "-=" + passoRolagem + "px"}, 500);
    });
    
    // habilitar a rolagem arrastando com o mouse
    produtosContainer.mousedown(function(e) {
      var posicaoInicial = e.pageX;
      var posicaoAtual = posicaoInicial;
      
      $(document).mousemove(function(e) {
        posicaoAtual = e.pageX;
        var distancia = posicaoAtual - posicaoInicial;
        produtos.css("marginLeft", "+=" + distancia + "px");
        posicaoInicial = posicaoAtual;
      });
    });
    
    $(document).mouseup(function() {
      $(document).off("mousemove");
    });
  });





  jQuery(document).ready(function() {
    // variáveis
    var larguraCarousel = jQuery(".carousel").outerWidth();
    var itemWidth = jQuery(".carousel-item").outerWidth(true);
    var numItens = jQuery(".carousel-item").length;
    var numItensVisiveis = Math.floor(larguraCarousel / itemWidth);
    var posicaoAtual = 0;
    var posicaoMaxima = numItens - numItensVisiveis;
    
    // atualiza o estado dos botões de controle
    function atualizarControles() {
  
 /*

  $(document).ready(function() {
    var produtosContainer = $(".produtos-rolando");
    var produtos = $(".produtos");
    var setaEsquerda = $(".seta-esquerda");
    var setaDireita = $(".seta-direita");
    
    var passoRolagem = 320; // ajuste a quantidade de pixels a ser rolada de cada vez
    var numeroDeCopia = 3; // ajuste o número de cópias de cada produto
    
    // fazer cópias dos primeiros e últimos produtos
    for (var i = 0; i < numeroDeCopia; i++) {
      produtos.children().last().after(produtos.children().first().clone());
      produtos.children().first().before(produtos.children().last().clone());
    }
    
    var produtosWidth = produtos.children().length * produtos.children().first().outerWidth(true);
    produtos.css("width", produtosWidth + "px");
    var produtosContainerWidth = produtosContainer.width();
    
    // habilitar a rolagem por gestos de deslize em dispositivos móveis
    produtosContainer.swipe({
      swipeLeft: function() {
        produtos.animate({marginLeft: "-=" + passoRolagem + "px"}, 500, function() {
          var margemAtual = parseInt(produtos.css("marginLeft"), 10);
          if (margemAtual <= -(produtosWidth - produtosContainerWidth)) {
            produtos.css("marginLeft", passoRolagem + "px");
          }
        });
      },
      swipeRight: function() {
        produtos.animate({marginLeft: "+=" + passoRolagem + "px"}, 500, function() {
          var margemAtual = parseInt(produtos.css("marginLeft"), 10);
          if (margemAtual >= passoRolagem) {
            produtos.css("marginLeft", -(produtosWidth - produtosContainerWidth) + "px");
          }
        });
      },
      allowPageScroll: "auto"
    });
    
    // habilitar a rolagem clicando nas setas de navegação
    setaEsquerda.click(function() {
      produtos.animate({marginLeft: "+=" + passoRolagem + "px"}, 500, function() {
        var margemAtual = parseInt(produtos.css("marginLeft"), 10);
        if (margemAtual >= passoRolagem) {
          produtos.css("marginLeft", -(produtosWidth - produtosContainerWidth) + "px");
        }
      });
    });
    
    setaDireita.click(function() {
      produtos.animate({marginLeft: "-=" + passoRolagem + "px"}, 500, function() {
        var margemAtual = parseInt(produtos.css("marginLeft"), 10);
        if (margemAtual <= -(produtosWidth - produtosContainerWidth)) {
          produtos.css("marginLeft", passoRolagem + "px");
        }
      });
    });
    
    // habilitar a rolagem arrastando com o mouse
    produtosContainer.mousedown(function(e) {
      var posicaoInicial = e.pageX;
      var posicaoAtual = posicaoInicial;
      
      $(document).mousemove(function(e) {
        posicaoAtual = e.pageX;
        var distancia = posicaoAtual -




