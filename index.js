//Exercício 1
document.querySelector('#titulo').innerText="Olá, JavaScript!";
//Exercício 2
document.querySelector('.paragrafo').style.color='blue';
//Exercício 3
document.querySelector('#enviar').addEventListener('click',function(){
    alert('Formulário enviado!');
})
//Exercício 4
const tarefas = document.querySelectorAll('.tarefas li');
tarefas[0].textContent = 'Primeira tarefa concluída';
//Exercício 5
document.querySelector('.nome').value = "João da Silva";
//Exercício 6
document.querySelectorAll('.card').forEach(card=>{
    card.style.backgroundColor='#f0f0f0';
});
//Exercício 7
document.querySelector('.dark-mode').addEventListener('click',function(){
    document.body.style.backgroundColor='black';
    document.body.style.color='white';
});
//Exercício 8
document.querySelector('h2').classList.add('destaque');
//Exercício 9
document.querySelector('#mostrarSenha').addEventListener('click',function(){
const senha = document.querySelector('#senha');
senha.type='text';
});
//Exercício 10
const novaTarefa = document.createElement('li');
novaTarefa.textContent = 'Tarefa extra';
document.querySelector('.tarefas').appendChild(novaTarefa);