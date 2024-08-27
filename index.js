function criptografar() {
  let texto = document.getElementById("texto").value;
  let tituloMensagem = document.querySelector(".titulo__mensagem");
  let paragrafo = document.querySelector(".paragrafo__mensagem");
  let imagem = document.querySelector(".imagem");

  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if (texto.length !== 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensagem.textContent = "Texto criptografado com sucesso";
    paragrafo.textContent = "";
    imagem.src = "./img/imagem_cripto.png"; 
  } else {
    imagem.src = "./img/imagem_inicial.png";
    tituloMensagem.textContent = "Nenhuma mensagem encontrada";
    paragrafo.textContent =
      "Digite o texto que você deseja criptografar ou descriptografar";
    alert("Você não digitou um texto!");
  }
}

function descriptografar() {
  let texto = document.getElementById("texto").value;
  let tituloMensagem = document.querySelector(".titulo__mensagem");
  let paragrafo = document.querySelector(".paragrafo__mensagem");
  let imagem = document.querySelector(".imagem");

  let textoDesCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  if (texto.length !== 0) {
    document.getElementById("texto").value = textoDesCifrado;
    tituloMensagem.textContent = "Texto descriptografado com sucesso";
    paragrafo.textContent = "";
    imagem.src = "./img/imagem_descripto.png";
  } else {
    imagem.src = "./img/imagem_inicial.png";
    tituloMensagem.textContent = "Nenhuma mensagem encontrada";
    paragrafo.textContent =
      "Digite o texto que você deseja criptografar ou descriptografar";
    alert("Você não digitou um texto!");
  }
}
