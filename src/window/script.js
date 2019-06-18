const encodeTextArea = document.querySelector('#encode');
const decodeTextArea = document.querySelector('#decode');
const newline = /\r\n|\n|\r/;

encodeTextArea.addEventListener('keyup', ({ target: { value } }) => {
  decodeTextArea.value = value
    .split(newline)
    .map(v => btoa(v))
    .join('\n');
});

decodeTextArea.addEventListener('keyup', ({ target: { value } }) => {
  encodeTextArea.value = value
    .split(newline)
    .map(v => atob(v))
    .join('\n');
});
