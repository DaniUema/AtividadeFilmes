function selecionarFilme(){
    const escolha = parseInt(document.getElementById('filme').value);
    let estilo = '';

    switch(escolha) {
      case 1:
        estilo = 'Ação';
        break;
      case 2:
        estilo = 'Comédia';
        break;
      case 3:
        estilo = 'Drama';
        break;
      case 4:
        estilo = 'Terror';
        break;
      case 5:
        estilo = 'Ficção Científica';
        break;
      case 6:
        estilo = 'Romance';
        break;
      default:
    }

    const resultado = document.getElementById('resultadoFilme');
    if (estilo) {
      resultado.textContent = "Seu estilo de filme favorito é: " + estilo;
    } else {
      resultado.textContent = 'Opção inválida, por favor escolha um número entre 1 e 6.';
    }
}