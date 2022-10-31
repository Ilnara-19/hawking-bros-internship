const loadBtn = document.querySelector('.js-load');
const loadBtn2 = document.querySelector('.load-server');
const resultsContainer = document.querySelector('.js-results');
const searchInput = document.querySelector('.js-input');
const resetBtn = document.querySelector('.reset');

//render GIT profile
function render(data) {
  return (resultsContainer.innerHTML = `<div class="response-container">
              <img src="${data.avatar_url}">
              <p> Имя: <span>${data.name}</span><p>
              <p> О себе: <span>${data.bio}</span><p>
              <p> Кол-во репозиториев: <span>${data.public_repos}</span><p>
            </div>`);
}

//render Users
function renderDataServer(data){
   data.forEach(item => {
     return(resultsContainer.insertAdjacentHTML("beforeend",`<div class="response-container">
     <p> Имя: <span>${item?.name}</span><p>
     <p> Ник: <span>${item?.username}</span><p>
     <p> Email: <span>${item?.email}</span><p>
     <p> Адрес: <span>${item?.address?.city}</span>
                <span>${item?.address?.street}</span>
                <span>${item?.address?.suite}</span>
                <span>${item?.address?.zipcode}</span>
     <p>
     <p> Веб-сайт: <span>${item?.website}</span><p>
     <p> Телефон: <span>${item?.phone}</span><p>
     <p> Компания: <span>${item?.company?.bs}</span>
                   <span>${item?.company?.catchPhrase}</span>
                   <span>${item?.company?.name}</span>
     <p>
   </div>`));
   });
 }

//get GIT profile
loadBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  const searchValue = searchInput.value.trim().toLowerCase();

  if (!searchValue) return;

  fetch(`https://api.github.com/users/${searchValue}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    })
    .then(data => render(data))
    .catch(error => alert(error));
});

//get Users
loadBtn2.addEventListener('click', event => {
  event.preventDefault();

  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(response => response.data)
    .then(data=> (!data.length) ? alert('users are not found') : renderDataServer(data))
    .catch(error=> alert(error));
});

//clear
resetBtn.addEventListener('click', ()=>resultsContainer.innerHTML='');
