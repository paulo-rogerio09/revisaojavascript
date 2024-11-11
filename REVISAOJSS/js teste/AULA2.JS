
function IDADE_DE_PASSAR(idade){
    if(idade<18)
    {
        console.log("menor de idade");
    }
    else if(idade>= 18 && idade<=60){
        console.log("maior de idade");
    }
    else if(idade> 60 && idade<70){
        console.log("terceira idade, nao aposentado");
    }
    else if(idade> 70){
        console.log("terceira idade aposentado");
    }
}
var idade2 = IDADE_DE_PASSAR(10);
console.log(idade2);

function imcf(peso, altura){
    imc = peso/(altura**2)
    return imc;
}
var imc3 = imcf(70, 1.84)
console.log(imc3);

for(var i = 0; i < 10; i++){
    console.log(i);
} 

var n = 0;
while(n<10){
    console.log(n);
    n++
}

var pessoa ={
    nome: 'elias',
    idade: '31',
    profissao: 'professor',
    trauma: 'aula com 3B',

    salario: function(){
        console.log(5000)
    }

}

console.log(pessoa.salario())

var aa = document.getElementById('teste')


