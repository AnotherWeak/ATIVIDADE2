# ATIVIDADE2

Função maiorData

function maiorData(data1, data2) {
  if (data1 > data2) {
    return data1;
  } else {
    return data2;
  }
}

A função maiorData recebe dois parâmetros data1 e data2 do tipo Date.
Ela compara os dois parâmetros utilizando o operador de comparação >, que retorna true se data1 for maior que data2. 
Se data1 for maior, a função retorna data1, caso contrário, retorna data2.



Função calcularIntervalo

function calcularIntervalo(data1, data2) {
  if (data1 > data2) {
    throw new Error("O primeiro parâmetro deve ser mais antigo que o segundo");
  }
  const diff = data2 - data1;
  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  return `${dias} dias, ${horas} horas e ${minutos} minutos`;
}

A função calcularIntervalo recebe novamente os dois parâmetros anteriores (tipo date).
Ela verifica se a data1 é maior que data2, caso seja, lança um erro. 
Em seguida, calcula a diferença entre os dois dados utilizando a subtração.
Ápos isso, converte essa diferença em dias, horas e minutos utilizando operações matemáticas e retorna uma string com o resultado.


Função getDataAtual
function getDataAtual() {
  const agora = new Date();
  const hora = agora.getHours();
  const minuto = agora.getMinutes();
  const dia = agora.getDate();
  const mes = agora.getMonth() + 1;
  const ano = agora.getFullYear();
  return `${hora}:${minuto} - ${dia}/${mes}/${ano}`;
}

A função getDataAtual cria um objeto Date com os dados e hora atual utilizando o construtor new Date().
Em seguida, extrai as informações de hora, minuto, dia, mês e ano utilizando os métodos getHours(), getMinutes(), getDate(), getMonth()e getFullYear().
Por fim, retorna uma string com a data e hora atual no formato especificado.


Parte de Testes

console.log(maiorData(new Date("2022-01-01"), new Date("2022-01-02")));             // deve retornar a data mais recente
console.log(calcularIntervalo(new Date("2022-01-01"), new Date("2022-01-02")));     // deve retornar o intervalo entre as datas
console.log(getDataAtual());                                                        // deve retornar a data e hora atuais no formato especificado

