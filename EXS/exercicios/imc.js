document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const imc = (peso / (altura * altura)).toFixed(2);
    
    let classificacao = '';

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc < 24.9) {
        classificacao = 'Peso normal';
    } else if (imc < 29.9) {
        classificacao = 'Sobrepeso';
    } else {
        classificacao = 'Obesidade';
    }

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `Seu IMC é ${imc}. Classificação: ${classificacao}`;
    resultadoDiv.classList.remove('hidden');
    resultadoDiv.classList.add('visible');
});
