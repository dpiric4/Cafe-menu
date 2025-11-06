const categories = {
  'Topli napici': {
    image: 'julius.jpg',
    items: [
      { name: 'Kafa Espresso - Julius', price: '2.50 KM', image: 'espresso.jpg' },
      { name: 'Kafa sa mlijekom', price: '2.50 KM', image: 'latte.jpg' },
      { name: 'Kafa sa šlagom', price: '2.50 KM', image: 'slag.jpg' },
      { name: 'Macchiato mali', price: '2.50 KM', image: 'macchiato.jpg' },
      { name: 'Macchiato veliki', price: '2.50 KM', image: 'macchiato.jpg' },
      { name: 'Nescaffe Classic', price: '3.50 KM', image: 'classic.jpg' },
      { name: 'Nescaffe 3u1', price: '3.50 KM', image: '3u1.jpg' },
      { name: 'Cappuchino', price: '3.50 KM', image: 'cappuchino.jpeg' },
      { name: 'Topla čokolada', price: '3.50 KM', image: 'topla.jpeg' },
      { name: 'Latte macchiato', price: '3.50 KM', image: 'latte.jpg' },
      { name: 'Latte macchiato aroma', price: '3.50 KM', image: 'aroma.avif' },
      { name: 'Čaj Julius', price: '3.50 KM', image: 'caj.jpg' },
    ]
  },
  'Gazirana pića': {
    image: 'sokovi.jpeg',
    items: [
      { name: 'Mineralna voda 0.25l', price: '2.00 KM', image: 'mineralna.jpg' },
      { name: 'Coca-Cola 0.25l', price: '3.50 KM', image: 'cola.webp' },
      { name: 'Fanta 0.25l', price: '3.50 KM', image: 'fanta.png' },
      { name: 'Sprite 0.25l', price: '3.50 KM', image: 'sprite.jpg' },
      { name: 'Schweppes bitterlemon 0.25l', price: '3.50 KM', image: 'biter.jpg' },
      { name: 'Schweppes tangerina 0.25l', price: '3.50 KM', image: 'tangerina.jpg' },
      { name: 'Schweppes tonic 0.25l', price: '3.50 KM', image: 'tonic.jpg' },
      { name: 'Cocta 0.33l', price: '3.50 KM', image: 'cocta.jpg' },
      { name: 'Orangina 0.25l', price: '4.00 KM', image: 'orangina.jpg' },
      { name: 'Sensation limeta kiwano 0.25l', price: '3.00 KM', image: 'sensation.jpg' }
    ]
  },
  'Negazirana pića': {
    image: 'cappy.jpg',
    items: [
      { name: 'Prirodna voda 0.25l', price: '2.00 KM', image: 'prirodna.jpg' },
      { name: 'Cappy naranča 0.25l', price: '3.50 KM', image: 'naranča.jpg' },
      { name: 'Cappy jabuka 0.25l', price: '3.50 KM', image: 'jabuka.jpg' },
      { name: 'Cappy jagoda 0.25l', price: '3.50 KM', image: 'jagoda.jpg' },
      { name: 'Cappy ribizla  0.25l', price: '3.50 KM', image: 'ribizla.jpg' },
      { name: 'Juice ananas 0.25l', price: '3.50 KM', image: 'ananas.jpg' },
      { name: 'Juice višnja 0.25l', price: '3.50 KM', image: 'visnja1.jpg' },
    ]
  },
  'Energetska pića': {
    image: 'energy.jpg',
    items: [
      { name: 'Red Bull 0.25l', price: '5.00 KM', image: 'redbull.jpg' },
      { name: 'Rodeo 0.25l', price: '3.00 KM', image: 'rodeo.jpeg' },
    ]
  },
  'Cijeđeni sokovi': {
    image: 'cijedjeni.jpeg',
    items: [
      { name: 'Narandža 100% 0.24l', price: '5.00 KM', image: 'narandza.jpg' },
      { name: 'Limunada 0.20l', price: '4.50 KM', image: 'limunada.jpeg' },
    ]
  },
  'Kokteli': {
    image: 'monini.jpg',
    items: [
      { name: 'Koktel jagoda', price: '4.00 KM', image: 'jagoda.jpeg' },
      { name: 'Koktel tropsko voće', price: '4.00 KM', image: 'tropsko.jpeg' },
      { name: 'Koktel lubenica', price: '4.00 KM', image: 'lubenica.jpeg' },
      { name: 'Koktel višnja', price: '4.00 KM', image: 'visnja.jpg' },
      { name: 'Koktel carribean captain', price: '4.00 KM', image: 'carribean.jpeg' }
    ]
  },
  'Ledena kafa': {
    image: 'ledena.jpeg',
    items: [
      { name: 'Čoko keks', price: '4.00 KM', image: 'coko.webp' },
      { name: 'Prženi lješnjak', price: '4.00 KM', image: 'ljesnjak.png' },
      { name: 'Slana karamela', price: '4.00 KM', image: 'slana.webp' },
      { name: 'Vanilia', price: '4.00 KM', image: 'vanilia.jpeg' }
    ]
  },
  'Slastice': {
    image: 'sladoled.jpg',
    items: [
      { name: 'Točeni sladoled čokolada', price: '3.50 KM', image: 'cokolada.jpg' },
      { name: 'Točeni sladoled vanilia', price: '3.50 KM', image: 'vanilia.jpg' }
    ]
  },
  'Pivo': {
    image: 'pivo.jpeg',
    items: [
      { name: 'Heineken', price: '4.00 KM', image: 'heineken.jpg' },
      { name: 'Sarajevsko', price: '3.50 KM', image: 'sarajevsko.jpg' },
      { name: 'Tuborg', price: '3.50 KM', image: 'tuborg.jpg' },
      { name: 'Karlovačko', price: '3.50 KM', image: 'karlovacko.jpeg' },
      { name: 'Corona', price: '5.00 KM', image: 'corona.png' },
      { name: 'Stella Artois', price: '4.50 KM', image: 'stella.jpg' },
      { name: 'Radler', price: '4.00 KM', image: 'radler.jpg' },
      { name: 'Paulaner Weissbier', price: '4.50 KM', image: 'weissbier.jpeg' },
      { name: 'Paulaner tamni', price: '4.50 KM', image: 'tamni.webp' },
      { name: 'Somersby jabuka', price: '4.00 KM', image: 'somer.jpeg' },
      { name: 'Somersby kruška', price: '4.00 KM', image: 'pear.jpeg' },
    ]
  },
  'Bezalkohono pivo': {
    image: 'alk.avif',
    items: [
      { name: 'Haineken 0.00% alk', price: '3.50 KM', image: '00.jpeg' },
      { name: 'Laško Malt', price: '3.50 KM', image: 'lasko.jpg' },
      { name: 'Somersby jagoda 0.00% alk', price: '3.50 KM', image: '000.png' },
    ]
  },
  'Pjenušci': {
    image: 'pjenusci.jpg',
    items: [
      { name: 'Hankell trocken 0.75l', price: '30.00 KM', image: 'hankell.avif' }
    ]
  },
  'Bijela vina': {
    image: 'bijelo.jpg',
    items: [
      { name: 'Vino graševina 0.20l', price: '7.00 KM', image: 'grasevina.webp' },
      { name: 'Žilavka 0.75l', price: '45.00 KM', image: 'zilavka.png' },
      { name: 'Graševina 0.75l', price: '30.00 KM', image: 'grasevina1.jpg' },
      { name: 'Vino čaša 0.10l', price: '2.50 KM', image: '0.1.avif' },
      { name: 'Vino čaša 0.20l', price: '5.00 KM', image: '0.1.avif' }
    ]
  },
  'Crna vina': {
    image: 'crno.jpeg',
    items: [
      { name: 'Vranac ProCorde 0.20l', price: '7.00 KM', image: 'vranac.jpg' },
      { name: 'Vranac ProCorde 0.75l', price: '30.00 KM', image: 'vranac1.jpg' },
      { name: 'Cabarnet Souvignon 0.75l', price: '25.00 KM', image: 'nuic.jpg' },
      { name: 'Blatina 0.75l', price: '40.00 KM', image: 'blatina.jpg' },
      { name: 'Vino čaša 0.10l', price: '2.50 KM', image: 'crno1.png' },
      { name: 'Vino čaša 0.20l', price: '5.00 KM', image: 'crno1.png' }
    ]
  },
  'Alkoholna pića': {
    image: 'alkohol.jpg',
    items: [
      { name: 'Vodka 0.03l', price: '4.00 KM', image: 'vodka.jpg' },
      { name: 'Stock 0.03l', price: '5.00 KM', image: 'stock.avif' },
      { name: 'Rum 0.03l', price: '4.00 KM', image: 'rum.jpg' },
      { name: 'Kruškovac 0.03l', price: '4.00 KM', image: 'kruskovac.jpg' },
      { name: 'Pelinkovac 0.03l', price: '4.00 KM', image: 'pelin.jpg' },
      { name: 'Jegermaister 0.03l', price: '4.00 KM', image: 'jeger.jpg' },
      { name: 'Tequila 0.03l', price: '4.00 KM', image: 'tekila.jpg' },
      { name: 'Gin 0.03l', price: '4.00 KM', image: 'gin.jpg' },
      { name: 'Chivas 0.03l', price: '4.00 KM', image: 'chivas.webp' },
      { name: 'Jack Daniel’s 0.03l', price: '4.00 KM', image: 'jack.webp' },
      { name: 'Johny Walker Red l. 0.03l', price: '4.00 KM', image: 'red.webp' },
      { name: 'Johny Walker Black l. 0.03l', price: '4.00 KM', image: 'black.webp' },
      { name: 'Viljamovka Fructal 0.03l', price: '4.00 KM', image: 'fructal.jpeg' },
      { name: 'Viljamovka Gazdina 0.03l', price: '4.00 KM', image: 'vilj.jpeg' },
      { name: 'Šljivovica Gazdina 0.03l', price: '4.00 KM', image: 'slji.jpeg' },
      { name: 'Jabuka Gazdina 0.03l', price: '4.00 KM', image: 'jabu.jpeg' },
      { name: 'Kajsija Gazdina 0.03l', price: '4.00 KM', image: 'kajsija.jpeg' },
      { name: 'Dunja Gazdina 0.03l', price: '4.00 KM', image: 'dunja.jpeg' },
      { name: 'Gorki list 0.03l', price: '4.00 KM', image: 'gorki.webp' },
      { name: 'Vodka Belveder 0.03l', price: '4.00 KM', image: 'belve.avif' },
      { name: 'Višnjevača 0.03l', price: '4.00 KM', image: 'vis.png' },
      { name: 'Bacardi 0.03l', price: '4.00 KM', image: 'bacardi.jpg' },
      { name: 'Martini 0.05l', price: '4.00 KM', image: 'martini.jpeg' },
      { name: 'Jameson 0.03l', price: '4.00 KM', image: 'jameson.webp' },
    ]
  }
}; 

// Selektovanje elemenata
const categoryButtons = document.getElementById('category-buttons');
const menuContainer = document.getElementById('menu-container');
const stickyHeader = document.getElementById('sticky-header');
const stickyTitle = document.getElementById('sticky-title');
const menuTitle = document.getElementById('menu-title');
const welcomeHeader = document.getElementById('welcome-header');

// Detekcija uređaja
const userAgent = navigator.userAgent || navigator.vendor || window.opera;
const isAndroid = /Android/i.test(userAgent);
const isIOS = /iPhone|iPad|iPod/i.test(userAgent);
const isOldAndroid = isAndroid && /Android [1-6]/i.test(userAgent);

// Skrol na vrh
function scrollToTop() {
  if (isOldAndroid || isAndroid) {
    window.scrollTo({ top: 0, behavior: 'auto' });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// Prikaz dugmadi kategorija
function generateCategoryButtons() {
  categoryButtons.innerHTML = '';
  for (const [name, category] of Object.entries(categories)) {
    const btn = document.createElement('button');
    btn.className = 'btn-category';
    btn.onclick = () => showCategory(name);
    btn.innerHTML = `
      <img src="${category.image}" alt="${name}">
      <span>${name}</span>
    `;
    categoryButtons.appendChild(btn);
  }
}

// Prikaz kategorije
function showCategory(categoryName) {
  history.pushState({ page: 'category' }, '', '');
  stickyTitle.textContent = categoryName;
  stickyHeader.classList.remove('d-none');
  welcomeHeader.classList.add('d-none');
  menuTitle.style.display = 'none';
  categoryButtons.style.display = 'none';
  menuContainer.style.display = 'flex';
  menuContainer.innerHTML = '';

  const items = categories[categoryName].items;
  items.forEach(item => {
    const div = document.createElement('div');
    div.className = 'menu-item';
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div>
        <h5>${item.name}</h5>
        <p>${item.price}</p>
      </div>
    `;
    menuContainer.appendChild(div);
  });

  setTimeout(scrollToTop, 10);
}

// Povratak na početni meni
function showCategoryList() {
  history.pushState({ page: 'home' }, '', '');
  stickyHeader.classList.add('d-none');
  welcomeHeader.classList.remove('d-none');
  menuTitle.style.display = 'block';
  menuContainer.style.display = 'none';
  categoryButtons.style.display = 'grid';
  generateCategoryButtons();
  setTimeout(scrollToTop, 10);
}

// Pokreni
generateCategoryButtons();

// Browser back/forward
window.addEventListener('popstate', function(event) {
  if (event.state && event.state.page === 'category') {
    stickyHeader.classList.remove('d-none');
    welcomeHeader.classList.add('d-none');
    menuTitle.style.display = 'none';
    categoryButtons.style.display = 'none';
    menuContainer.style.display = 'flex';
  } else {
    stickyHeader.classList.add('d-none');
    welcomeHeader.classList.remove('d-none');
    menuTitle.style.display = 'block';
    menuContainer.style.display = 'none';
    categoryButtons.style.display = 'grid';
    generateCategoryButtons();
  }
  setTimeout(scrollToTop, 10);
});
