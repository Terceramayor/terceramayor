function buildSearchResults({ items, totalItems }) {
  localStorage.setItem('objecttransfer', JSON.stringify(items));
  if (document.getElementById('results_Block_id')) {
    document.getElementById('results_Block_id').remove();
  }

  const main = document.getElementById('main_block');
  const resultsBlock = document.createElement('div');
  resultsBlock.className = 'results_Block';
  resultsBlock.id = 'results_Block_id';
  main.appendChild(resultsBlock);

  items.forEach((foundBook, index) => {
    const result = document.createElement('a');
    result.href = `./../book-details/book-details.html?id=${foundBook.id}`;
    result.className = 'foundBook_block';
    result.id = `${foundBook.volumeInfo.title}`;
    resultsBlock.appendChild(result);

    const image = document.createElement('img');
    image.src = (foundBook.volumeInfo.imageLinks) ? foundBook.volumeInfo.imageLinks.thumbnail : './assets/missing-book.png';
    image.className = 'book_thumbail';
    image.id = 'book_thumbail_id';
    result.appendChild(image);

    const bookBasicInfo = document.createElement('div');
    bookBasicInfo.className = 'bookBasicInfo--formating';
    result.appendChild(bookBasicInfo);

    const title = document.createElement('h3');
    title.className = 'book_title';
    title.id = `title_${foundBook.volumeInfo.title}`;
    title.innerText = foundBook.volumeInfo.title;
    bookBasicInfo.appendChild(title);

    const author = document.createElement('h4');
    author.className = 'book_authors';
    author.id = `authors_${foundBook.volumeInfo.authors}`;
    author.innerText = (foundBook.volumeInfo.authors) ? foundBook.volumeInfo.authors : 'Unknown Author :(';
    bookBasicInfo.appendChild(author);

    const separator = document.createElement('img');
    separator.src = `./assets/separator${index + 1}.png`;
    separator.className = 'separator';
    resultsBlock.appendChild(separator);
  });
}

function getNamefromWindowLocation(currentlocation) {
  let id = currentlocation.replace('?', ''); id = id.split('=');
  id = id[1];
  return id;
}

function createSearchpanel() {
  const main = document.getElementById('main_block');
  const searchPanel = document.createElement('div');
  searchPanel.className = 'search_panel';
  searchPanel.id = 'search_panel_id';
  main.appendChild(searchPanel);

  const owlOne = document.createElement('img');
  owlOne.className = 'owl';
  owlOne.src = './assets/owl3.png';
  searchPanel.appendChild(owlOne);

  const searchBoxElements = document.createElement('div');
  searchBoxElements.className = 'searchBoxElements';
  searchBoxElements.id = 'searchBoxElements_id';
  searchPanel.appendChild(searchBoxElements);

  const searchBox = document.createElement('input');
  searchBox.className = 'search_box';
  searchBox.id = 'search_box_id';
  searchBox.placeholder = 'Ask the owls to find you a book...';
  searchBoxElements.appendChild(searchBox);

  const searchIcon = document.createElement('img');
  searchIcon.className = 'search_icon';
  searchIcon.src = './assets/loupe.png';
  searchIcon.onclick = askGoogleBooks;
  searchBoxElements.appendChild(searchIcon);

  const owlTwo = document.createElement('img');
  owlTwo.className = 'owl';
  owlTwo.src = './assets/owl4.png';
  searchPanel.appendChild(owlTwo);

  if (location.search) {
    searchBox.value = getNamefromWindowLocation(location.search);
    askGoogleBooks();
  }
}

function askGoogleBooks() {
  let searchText = document.getElementById('search_box_id');
  searchText = formatTextSearch(searchText.value);
  const query = defineAPIrequest(searchText);
  const searchResponse = fetchGoogle(query);

  searchResponse.then((response) => buildSearchResults(response));
}

function formatTextSearch(query) {
  for (let i = 0; i < query.length; i++) {
    if (query.charAt(i) === ' ') {
      query = query.replace(' ', '+');
    }
  }
  return query;
}

function defineAPIrequest(queryToBeSent) {
  const googleApiFormat = 'https://www.googleapis.com/books/v1/volumes?q=';
  const askGoogle = googleApiFormat + queryToBeSent;
  return askGoogle;
}

function fetchGoogle(request) {
  const googleResponse = fetch(request).then((response) => response.json());
  return googleResponse;
}

function createVirtualMainJest() {
  const main = document.createElement('main');
  main.id = 'main_block';
  const body = document.getElementsByTagName('BODY')[0];
  body.appendChild(main);
}

function cleanVirtualMainJest() {
  const body = document.getElementsByTagName('BODY')[0];
  body.innerHTML = '';
}

module.exports = {
  createVirtualMainJest, cleanVirtualMainJest, createSearchpanel, askGoogleBooks, formatTextSearch, defineAPIrequest, fetchGoogle, buildSearchResults, getNamefromWindowLocation,
};
