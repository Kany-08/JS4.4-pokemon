/*
  
  Сделайте библиотеку покемонов
  
  1. Выведите список всех покемонов по адресу
  https://pokeapi.co/api/v2/pokemon?limit=100&offset=0
  
  Каждый результат оформите по шаблону: «Незагруженный покемон» (см. HTML)
  2. При нажатии на кнопку «Загрузить...» загружайте данные по адресу
  https://pokeapi.co/api/v2/pokemon/имя
  где имя - имя покемона. Например:
  https://pokeapi.co/api/v2/pokemon/ditto
  Результаты загружайте по шаблону «Пример карточки покемона»
*/

async function func() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0');
    const data = await res.json();
    const list = document.querySelector('.list');

   
    for (let i = 0; i < data.results.length; i++) {
        const item = document.createElement('div')
        item.className = 'item';
        const loadImgBtn = document.createElement('a');
        loadImgBtn.className = 'item__load';
        loadImgBtn.textContent = 'Загрузить изображение...';
        const title = document.createElement('h3');
        list.append(item);
        item.append(title, loadImgBtn);

        title.textContent = data.results[i].name;

        loadImgBtn.addEventListener('click', () => {
    
            const image = document.createElement('img');
            image.className = 'item__image'
            image.src = `https://img.pokemondb.net/artwork/${data.results[i].name}.jpg`;
            item.append(image);
            loadImgBtn.style.display = 'none';
        })
    }
}
func()

