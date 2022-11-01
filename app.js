(function() {
  const validBtn = document.getElementById('validate');
  const inputState = document.getElementById('input-validate');
  const errorMessage = document.getElementById('error');

  validBtn.addEventListener('click', () => {
    try {
      switch (true) {
        case !inputState.value:
          throw new Error('input is empty');
        case inputState.value < 5:
          throw new Error('not validate');
        case inputState.value > 10:
          throw new Error('not validate');
        case isNaN(inputState.value):
          throw new Error('value is not a number');
        default:
          alert('No value');
      }
    } catch (error) {
      errorMessage.classList.add('error');
      errorMessage.innerHTML = error.message;
    }
  });

  inputState.addEventListener('input', () => {
    errorMessage.classList.remove('error');
  });
})();

// || inputState.value > 10
