const input = document.getElementById('number');
const btn = document.getElementById('btn');
const output = document.querySelector('.output');

btn.addEventListener('click', () => {
  const inputValue = parseInt(input.value);
  if (isNaN(inputValue)) {
    output.innerHTML = '<p class="error">Ошибка: введите число</p>';
    return;
  }
  if (inputValue < 1 || inputValue > 10) {
    output.innerHTML = '<p class="error">Ошибка: число должно быть от 1 до 10</p>';
    return;
  }
  
  output.innerHTML = '';

  for (let i = 1; i <= inputValue; i++) {
    const img = document.createElement('img');
    img.src = `https://picsum.photos/id/${i}/200`;
    img.classList.add('img');
    output.appendChild(img);
  }
});
