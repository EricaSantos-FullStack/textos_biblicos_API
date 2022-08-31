      function verificaTexto(input) {
        if(isNaN(input.value)) {
          input.value = '';
          alert("Escrita invalida. Escreva apenas números");
        }
      }
      async function buscarSalmo() {
        let numero = document.getElementById("salmo").value;
        let response = await fetch(`https://www.abibliadigital.com.br/api/verses/nvi/sl/` + numero);
        let dados = await response.json();
        
        if(dados.book == undefined)
          return alert("Salmo não encontrado");
        
        document.getElementById("nome").value = dados.book.name;
        document.getElementById("autores").value = dados.book.author;
        document.getElementById("grupo").value = dados.book.group;

        let data = "";
        dados.verses.forEach(el => {
          data += `<li> ${el.text} </li>`
        });
        document.getElementById('lista').innerHTML = data;
      }