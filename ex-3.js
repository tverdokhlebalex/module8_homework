const input = document.querySelector('input');
const button = document.querySelector('button');
const output = document.querySelector('.output');

document.addEventListener("DOMContentLoaded", function() {
button.addEventListener('click', () => {
  const value = parseInt(input.value);
  
  if (value <= 0 || value > 10 || Number.isNaN(value)) {
    output.textContent = 'Число вне диапазона от 1 до 10';
  } else {
    const url = `https://picsum.photos/v2/list?limit=${value}`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function () {
      const response = JSON.parse(xhr.responseText);
      response.forEach(item => {
        const img = document.createElement('img');
        img.src = item.download_url;
        output.appendChild(img);
      });
    };
    xhr.send();
  }
});
});