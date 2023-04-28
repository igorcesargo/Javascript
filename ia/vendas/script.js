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
      var margemEsquerda = parseInt(produtos.css("marginLeft"));
      var larguraProdutos = produtos.width();
      var larguraContainer = produtosContainer.width();
      var margemFim = larguraProdutos - margemEsquerda - larguraContainer;

      if (margemFim <= passoRolagem) {
        produtos.animate({marginLeft: "-=" + margemFim + "px"}, 500, function() {
          produtos.css("marginLeft", "0px");
          produtos.append(produtos.html());
        });
      } else {
        produtos.animate({marginLeft: "-=" + passoRolagem + "px"}, 500);
      }
    },
    swipeRight: function() {
      var margemEsquerda = parseInt(produtos.css("marginLeft"));

      if (margemEsquerda >= -passoRolagem) {
        produtos.animate({marginLeft: "+=" + margemEsquerda + "px"}, 500, function() {
          produtos.css("marginLeft", "-" + (produtos.width() / 2) + "px");
          produtos.prepend(produtos.html());
        });
      } else {
        produtos.animate({marginLeft: "+=" + passoRolagem + "px"}, 500);
      }
    },
    allowPageScroll: "auto"
  });

  // habilitar a rolagem clicando nas setas de navegação
  setaEsquerda.click(function() {
    var margemEsquerda = parseInt(produtos.css("marginLeft"));

    if (margemEsquerda >= -passoRolagem) {
      produtos.animate({marginLeft: "+=" + margemEsquerda + "px"}, 500, function() {
        produtos.css("marginLeft", "-" + (produtos.width() / 2) + "px");
        produtos.prepend(produtos.html());
      });
    } else {
      produtos.animate({marginLeft: "+=" + passoRolagem + "px"}, 500);
    }
  });

  setaDireita.click(function() {
    var margemEsquerda = parseInt(produtos.css("marginLeft"));
    var larguraProdutos = produtos.width();
    var larguraContainer = produtosContainer.width();
    var margemFim = larguraProdutos - margemEsquerda - larguraContainer;

    if (margemFim <= passoRolagem) {
      produtos.animate({marginLeft: "-=" + margemFim + "px"}, 500, function() {
        produtos.css("marginLeft", "0px");
        produtos.append(produtos.html());
      });
    } else {
      produtos.animate({marginLeft: "-=" + passoRolagem + "px"}, 500);
    }
  });
});

