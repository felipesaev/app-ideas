function convertNumber(event) {
  event.preventDefault();
  const numberBinary = document.getElementById('input').value;
  if( numberBinary === '') return alert("Por favor, insira um numero binario");
  numberBinary.split('').map((char) => {
    if(char !== '0' && char !== '1') {
      return alert("Por favor, insira um numero binario");
    }
  });
  const decimal = parseInt(numberBinary, 2);
  document.getElementById('resultInput').value = decimal;
  return true;
}