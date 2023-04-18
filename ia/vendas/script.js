$(document).ready(function() {
    var produtosContainer = $(".produtos-rolando");
    var produtos = $(".produtos");
    var setaEsquerda = $(".seta-esquerda");
    var setaDireita = $(".seta-direita");
  
    var passoRolagem = 320; // ajuste a quantidade de pixels a ser rolada de cada vez
  
    // duplicar a lista de produtos para permitir rolagem infinita
    produtos.append(produtos.html());
  
    // habilitar a rolagem por gestos de deslize em dispositivos móveis
    produtosContainer.swipe({
      swipeLeft: function() {
        produtos.animate({marginLeft: "-=" + passoRolagem + "px"}, 500, function() {
          var margemEsquerda = parseInt(produtos.css("marginLeft"));
          var larguraProdutos = produtos.width();
          var larguraContainer = produtosContainer.width();
          if (larguraProdutos - margemEsquerda < larguraContainer) {
            produtos.css("marginLeft", "0px");
          }
        });
      },
      swipeRight: function() {
        produtos.animate({marginLeft: "+=" + passoRolagem + "px"}, 500, function() {
          var margemEsquerda = parseInt(produtos.css("marginLeft"));
          if (margemEsquerda >= 0) {
            produtos.css("marginLeft", "-" + (produtos.width() / 2) + "px");
          }
        });
      },
      allowPageScroll: "auto"
    });
  
    // habilitar a rolagem clicando nas setas de navegação
    setaEsquerda.click(function() {
      produtos.animate({marginLeft: "+=" + passoRolagem + "px"}, 500, function() {
        var margemEsquerda = parseInt(produtos.css("marginLeft"));
        if (margemEsquerda >= 0) {
          produtos.css("marginLeft", "-" + (produtos.width() / 2) + "px");
        }
      });
    });
  
    setaDireita.click(function() {
      produtos.animate({marginLeft: "-=" + passoRolagem + "px"}, 500, function() {
        var margemEsquerda = parseInt(produtos.css("marginLeft"));
        var larguraProdutos = produtos.width();
        var larguraContainer = produtosContainer.width();
        if (larguraProdutos - margemEsquerda < larguraContainer) {
          produtos.css("marginLeft", "0px");
        }
      });
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

*/
