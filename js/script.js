const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

function obterTempoAtual() {
  const dateToday = new Date();
  const hr = String(dateToday.getHours()).padStart(2, '0');
  const min = String(dateToday.getMinutes()).padStart(2, '0');
  const sec = String(dateToday.getSeconds()).padStart(2, '0');
  return { hr, min, sec };
}

function atualizarRelogio() {
  const { hr, min, sec } = obterTempoAtual();
  horas.textContent = hr;
  minutos.textContent = min;
  segundos.textContent = sec;
}

atualizarRelogio();

const relogio = setInterval(atualizarRelogio, 1000);
