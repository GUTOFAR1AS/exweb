document.getElementById('calcular').addEventListener('click', function() {
    const numero = document.getElementById('numero').value;
    const resultadoDiv = document.getElementById('resultado');

  
    resultadoDiv.innerHTML = '';

    if (numero) {
        for (let i = 1; i <= 10; i++) {
            const resultado = document.createElement('div');
            resultado.className = 'resultado-item';
            resultado.innerText = `${numero} x ${i} = ${numero * i}`;
            resultadoDiv.appendChild(resultado);
        }

    
        setTimeout(() => {
            const items = document.querySelectorAll('.resultado-item');
            items.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '1';
                }, index * 100); 
            });
        }, 50);
    } else {
        resultadoDiv.innerText = 'Por favor, insira um número.';
    }
});
