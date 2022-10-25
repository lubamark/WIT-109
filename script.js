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


window.onload = function () {
  let checkResult1Text = checkResult1.toString();
  let codeBox1 = document.getElementById('code1');
  codeBox1.innerHTML = checkResult1Text;
}