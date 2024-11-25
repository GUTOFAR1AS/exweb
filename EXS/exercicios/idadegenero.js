function verificarIdadeGenero() {
    const idade = document.getElementById("idadeInput").value;
    const genero = document.getElementById("generoSelect").value;
    const resultado = document.getElementById("resultado");
    const mensagem = document.getElementById("mensagem");
    const imagem = document.getElementById("imagem");

    console.log("Idade inserida: " + idade);
    console.log("Gênero selecionado: " + genero);

    if (idade === "" || idade <= 0) {
        resultado.textContent = "Por favor, insira uma idade válida.";
        mensagem.textContent = "";
        imagem.style.display = "none";  
        return;
    }

    let faixaEtaria = "";
    let imgSrc = "";

    if (idade < 18) {
        faixaEtaria = "criança";
        imgSrc = genero === "masculino" ? "crianca.jpg" : "crianca2.jpg";
    } else if (idade >= 18 && idade < 60) {
        faixaEtaria = "adulto";
        imgSrc = genero === "masculino" ? "homem.webp" : "mulher.png";
    } else {
        faixaEtaria = "idoso";
        imgSrc = genero === "masculino" ? "idoso.jpg" : "idosa.jpg";
    }

    resultado.textContent = `Você está na faixa etária de ${faixaEtaria} e se identifica como ${genero}.`;
    mensagem.textContent = `Sua idade é ${idade} e seu gênero é ${genero}.`;

    if (faixaEtaria === "criança") {
        mensagem.textContent += " Você é uma criança.";
    } else if (faixaEtaria === "adulto") {
        mensagem.textContent += " Você é um adulto.";
    } else {
        mensagem.textContent += " Você é um idoso.";
    }

    imagem.src = imgSrc;
    imagem.style.display = "block";
}
