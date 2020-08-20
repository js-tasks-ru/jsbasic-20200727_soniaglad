function toggleText() {
  let button = document.querySelector('.toggle-text-button');
  let text = document.getElementById('text');

  button.addEventListener('click', () => (text.hidden === false) ? text.hidden = true : text.hidden = false);
}
