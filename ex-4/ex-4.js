document.addEventListener("DOMContentLoaded", function () {
  const submitBtn = document.getElementById("submitBtn");
  const result = document.getElementById("result");
  const input1 = document.getElementById("number1");
  const input2 = document.getElementById("number2");

  submitBtn.addEventListener("click", function () {
    const num1 = parseInt(input1.value);
    const num2 = parseInt(input2.value);

    if (isNaN(num1) || isNaN(num2)) {
      result.innerHTML = '<div class="error">Введите число в оба поля</div>';
      return;
    }

    if (num1 < 100 || num1 > 300 || num2 < 100 || num2 > 300) {
      result.innerHTML = '<div class="error">Одно из чисел вне диапазона от 100 до 300</div>';
      return;
    }

    fetch(`https://picsum.photos/${num1}/${num2}`)
      .then(response => {
        const img = document.createElement("img");
        img.src = response.url;
        result.innerHTML = "";
        result.appendChild(img);
      })
      .catch(error => {
        result.innerHTML = '<div class="error">Произошла ошибка при загрузке изображения</div>';
      });
  });
});
