//------Https------\\

/*if (window.location.protocol != "https:") {
  window.location.protocol="https:";
}*/

function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');

  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
}

updateTime();

setInterval(updateTime, 60000);