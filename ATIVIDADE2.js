function maiorData(data1, data2) {
  if (data1 > data2) {
    return data1;
  } else {
    return data2;
  }
}

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

function getDataAtual() {
  const agora = new Date();
  const hora = agora.getHours();
  const minuto = agora.getMinutes();
  const dia = agora.getDate();
  const mes = agora.getMonth() + 1;
  const ano = agora.getFullYear();
  return `${hora}:${minuto} - ${dia}/${mes}/${ano}`;
}

console.log(maiorData(new Date("2022-01-01"), new Date("2022-01-02"))); // deve retornar a data mais recente
console.log(calcularIntervalo(new Date("2022-01-01"), new Date("2022-01-02"))); // deve retornar o intervalo entre as datas
console.log(getDataAtual()); // deve retornar a data e hora atuais no formato especificado
