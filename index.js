function exercicio1(){
  var nota = parseInt(prompt("Digite a número"));

  while(nota < 0 || nota > 10){
    nota = parseInt(prompt("Digite novamente a nota"));
  }

  document.getElementById("root").style.display = "block"
  document.getElementById("root").innerHTML = `
    <p>A sua nota: ${nota}</p>
  `
}

function exercicio2(){
  let contagem = 0

  while(contagem <= 10){
    alert(contagem + " pro ano novo")
    contagem = parseInt(contagem + 1)
  }

  alert("Ano novo!!!");
}

function exercicio3(){
  let nome = prompt("Digite seu nome");
  let senha = prompt("Digite um senha")

  while(nome === senha){
    nome = prompt("Digite um nome diferente da senha")
    senha = prompt("Digite uma senha diferente do nome")
  }

  document.getElementById("root").innerHTML = `
    <p>Seu nome é: ${nome} | Sua senha é: ${senha}</p>
  `
}

function showExercicio4(){
  document.getElementById("exercicio4").style.display = "block"
}

function somaExercicio4(){
  let num = document.getElementById("num").value
  let num2 = document.getElementById("num2").value

  if(num !== "" || num2 !== ""){
    let total = parseInt(num) + parseInt(num2)
    document.getElementById("exercicio4")
    document.getElementById("exercicio4").style.display = "none"
    document.getElementById("root").innerHTML = `
      <p>A soma entre ${num} e ${num2} é: ${total}</p>
    `
  }else{
    alert("Os campos são requeridos")
  }
}

function limpar(){
  document.getElementById("exercicio4").style.display = "none"
  document.getElementById("root").style.display = "none"
}


