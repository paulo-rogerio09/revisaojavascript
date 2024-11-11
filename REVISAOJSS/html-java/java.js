/*function SOMAR(){

    var n1 = parseFloat (document.getElementById('campo1').value);
    var n2 = parseFloat (document.getElementById('campo2').value);
    var soma = n1+n2;
    var res = document.getElementById('resultado')
    var hello = "hello world!"
    res.innerHTML = "o resultado é " + hello;
    /*document.getElementById("resultado").innerHTML = soma;
}*/
function Elias()
{
    var d = parseFloat (document.getElementById('campo1').value);
    var M = parseFloat (document.getElementById('campo2').value);
    var v = parseFloat (document.getElementById('campo3').value);
    var raiz = d*M;
    var velocidade =  Math.sqrt(raiz);
    var final = 15.946 * velocidade; 
    var res = document.getElementById('resultado');
    if(final<v)
    {
        res.style.color='blue';
        var resposta= " a velocidade é permitida";
        /*res.style.color='blues'*/

    }
    else{
        res.style.color='red'
        var resposta =" a velocidade nao é permitida";
    }
    res.innerHTML = "o resultado é " + final.toFixed(2) + resposta;
}