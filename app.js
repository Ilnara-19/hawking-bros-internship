(function() {
  const text = document.getElementById('text');

  text.addEventListener('input', () => {
    localStorage.setItem('text', text.value);
  });

  localStorage.text ? (text.value = localStorage.text) : false;
  //console.log(localStorage.getItem('text'));
})();
