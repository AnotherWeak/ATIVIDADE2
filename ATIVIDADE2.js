document.getElementById('date-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const date1 = new Date(document.getElementById('date1').value);
    const date2 = new Date(document.getElementById('date2').value);
    const maior = maiorData(date1, date2);
    document.getElementById('result').textContent = `A data mais recente é: ${maior}`;
  });
  
  document.getElementById('interval-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const date3 = new Date(document.getElementById('date3').value);
    const date4 = new Date(document.getElementById('date4').value);
    try {
      const intervalo = calcularIntervalo(date3, date4);
      document.getElementById('interval-result').textContent = `O intervalo entre as duas datas é de: ${intervalo}`;
    } catch (error) {
      document.getElementById('interval-result').textContent = error.message;
    }
  });
  
  document.getElementById('current-date-btn').addEventListener('click', function() {
    const currentDate = getDataAtual();
    document.getElementById('current-date-result').textContent = currentDate;
  });
  
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

function getDataAtual(userHour, userMinute) {
  const agora = new Date();
  agora.setHours(userHour);
  agora.setMinutes(userMinute);
  const hora = agora.getHours();
  const minuto = agora.getMinutes();
  const dia = agora.getDate();
  const mes = agora.getMonth() + 1;
  const ano = agora.getFullYear();
  return `${hora}:${minuto} - ${dia}/${mes}/${ano}`;
}

console.log(maiorData(new Date("2022-01-01"), new Date("2022-01-02")));
console.log(calcularIntervalo(new Date("2022-01-01"), new Date("2022-01-02")));
console.log(getDataAtual(14, 30));
