function checkResult1() {
  let value = document.getElementById('t1').value;
  let resElement = document.getElementById('r1');
  if (value >= 3 && value <= 5) {
    resElement.innerText = 'Spring';
  } else if (value >= 6 && value <= 8) {
    resElement.innerText = 'Summer';
  } else if (value >= 9 && value <= 11) {
    resElement.innerText = 'Autumn';
  } else if (value === 12 || value >= 1 && value <= 2) {
    resElement.innerText = 'Winter';
  } else {
    resElement.innerText = `${value ? value : 'Пустое значение'} - некорректное значение для месяца`;
  }
}

function checkResult2() {
  let value = document.getElementById('t2').value;
  let resElement = document.getElementById('r2');

  if (value[0] === 'a' || value[0] === 'а') {
    resElement.innerText = 'Да'
  } else {
    resElement.innerText = 'Нет'
  }
}

function checkResult3() {
  let value = document.getElementById('t3').value;
  let resElement = document.getElementById('r3');

  let valueStr = String(value);
  if (valueStr.length === 3) {
    resElement.innerText = +valueStr[0] + valueStr[1] + valueStr[2]
  } else {
    resElement.innerText = 'Нужно ввести 3 цифры'
  }

}

window.onload = function () {
  let codeBox1 = document.getElementById('code1');
  codeBox1.innerHTML = checkResult1.toString();

  let codeBox2 = document.getElementById('code2');
  codeBox2.innerHTML = checkResult2.toString();

  let codeBox3 = document.getElementById('code3');
  codeBox3.innerHTML = checkResult2.toString();


}