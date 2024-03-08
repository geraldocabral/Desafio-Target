

function resposta1() {
    let indice = 13
    let soma = 0;
    let k = 0;

    while(k < indice) {
        k = k + 1;
        soma = soma + k;
    }

    document.getElementById('resposta1').innerText = soma;
}

function resposta2(){
    let primeiro = 0;
    let ultimo = 1;
    let fibonacci = 0;
    let numero = document.getElementById('numero').value;



    while(fibonacci < numero) {
        fibonacci = primeiro + ultimo;
        primeiro = ultimo;
        ultimo = fibonacci;
    }

    if(fibonacci == numero) {
        document.getElementById('resposta2').innerText = 'O número ' + numero + ' pertence a sequência de Fibonacci';
    } else {
        document.getElementById('resposta2').innerText = 'O número ' + numero + ' não pertence a sequência de Fibonacci';
    }

    document.getElementById('primeiro').textContent = numero;
    document.getElementById('numero').value = numero;

}

function resposta3(){
    let a = document.getElementById('a');
    let b = document.getElementById('b');
    let c = document.getElementById('c');
    let d = document.getElementById('d');
    let e = document.getElementById('e');
    let f = document.getElementById('f')

    a.textContent = '9';
    a.value = '9';
    b.textContent = '128';
    b.value = '128';
    c.textContent = '49';
    c.value = '49';
    d.textContent = '100';
    d.value = '100';
    e.textContent = '13';
    e.value = '13';
    f.textContent = '19';
    f.value = '19';
    
}