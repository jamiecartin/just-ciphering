document.getElementById('encodeButton').addEventListener('click', function() {
  const inputText = document.getElementById('inputText').value;
  const shift = parseInt(document.getElementById('shift').value, 10);
  const result = caesarCipher(inputText, shift);
  document.getElementById('result').textContent = result;
});

document.getElementById('decodeButton').addEventListener('click', function() {
  const inputText = document.getElementById('inputText').value;
  const shift = parseInt(document.getElementById('shift').value, 10);
  const result = caesarCipher(inputText, -shift); // Decoding is just encoding with a negative shift
  document.getElementById('result').textContent = result;
});

document.getElementById('clearButton').addEventListener('click', function() {
  document.getElementById('inputText').value = ''; // Clear the textarea
  document.getElementById('shift').value = ''; // Clear the shift input
  document.getElementById('result').textContent = ''; // Clear the result
});

function caesarCipher(str, shift) {
  return str.split('').map(char => {
    if (char.match(/[a-z]/i)) {
      const code = char.charCodeAt(0);
      let shiftAmount = shift % 26;
      if (code >= 65 && code <= 90) { // Uppercase letters
        return String.fromCharCode(((code - 65 + shiftAmount + 26) % 26) + 65);
      } else if (code >= 97 && code <= 122) { // Lowercase letters
        return String.fromCharCode(((code - 97 + shiftAmount + 26) % 26) + 97);
      }
    }
    return char;
  }).join('');
}
