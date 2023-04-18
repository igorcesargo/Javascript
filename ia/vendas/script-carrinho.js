jQuery(document).ready(function() {
    var itens = [];
    var total = 0;
    var itensLista = jQuery(".carrinho .itens");
    var totalElement = jQuery(".carrinho .total");
    var enviarWhatsAppBotao = jQuery(".carrinho .enviar-whatsapp");
    
    // atualizar o carrinho e o total
    function atualizarCarrinho() {
      itensLista.empty();
      total = 0;
      for (var i = 0; i < itens.length; i++) {
        var item = itens[i];
        var nome = item.nome;
        var preco = item.preco;
        var itemElement = jQuery("<li>" + nome + " - R$ " + preco.toFixed(2) + "</li>");
        itensLista.append(itemElement);
        total += preco;
      }
      totalElement.text(total.toFixed(2));
    }
    
    // adicionar um item ao carrinho
    function adicionarItem(nome, preco) {
      itens.push({nome: nome, preco: preco});
      atualizarCarrinho();
    }
    
    // remover um item do carrinho
    function removerItem(index) {
      itens.splice(index, 1);
      atualizarCarrinho();
    }
    
    // adicionar ao carrinho ao clicar no botão "Adicionar ao carrinho"
    jQuery(".produto .adicionar-ao-carrinho").click(function() {
      var nome = jQuery(this).data("nome");
      var preco = parseFloat(jQuery(this).data("preco"));
      adicionarItem(nome, preco);
    });
    
    // remover do carrinho ao clicar no botão "Remover"
    jQuery(".carrinho .itens").on("click", "li", function() {
      var index = jQuery(this).index();
      removerItem(index);
    });
    
    // enviar o carrinho para o WhatsApp
    enviarWhatsAppBotao.click(function() {
      var mensagem = "Olá, gostaria de comprar os seguintes itens:%0A";
      for (var i = 0; i < itens.length; i++) {
        var item = itens[i];
        mensagem += item.nome + " - R$ " + item.preco.toFixed(2) + "%0A";
      }
      mensagem += "Total: R$ " + total.toFixed(2);
      var url = "https://wa.me/5521968650940/?text=" + mensagem;
      window.open(url, "_blank");
    });
  });