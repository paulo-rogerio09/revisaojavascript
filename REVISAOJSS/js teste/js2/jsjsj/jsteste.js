/*function pegartexto()
{
    var textocpf = document.getElementById('cpf').value;
    alert(textocpf);
}
document.addEventListener('click', pegartexto())*/

window.addEventListener('load', function(){
    mascaraCPF();
    mascaratele();
});

function mascaraCPF(){
    var cpfmask = IMask(
        document.getElementById('cpf'), {mask: '000.000.000-00',}
    );
}
function mascaratele(){
    var telemask = IMask(
        document.getElementById('tel'), {mask: '(00) 00000-0000',}
    );
}

const btn = document.querySelector('button');
btn.style.color = 'red'
btn.addEventListener('click', function(){
   cpf = document.getElementById('cpf').value;
    alert(cpf)
});