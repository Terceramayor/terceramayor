function getIdfromWindowLocation(currentlocation) {
  let id = currentlocation.replace('?', ''); id = id.split('=');
  id = id[1];
  return id;
}

function catchSelectedBook(bookId) {
  const objectSearchAsString = localStorage.getItem('objecttransfer');
  const booksObject = JSON.parse(objectSearchAsString);
  const currentBook = booksObject.filter((book) => book.id === bookId);
  return currentBook;
}

function mockLocalstorageJest() {
  const booksArray = [
    {
      kind: 'books#volume',
      id: 'HN1dzQEACAAJ',
      etag: 'LH651ql/3Rg',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/HN1dzQEACAAJ',
      volumeInfo: {
        title: 'Harry Potter y el Cáliz de Fuego / Harry Potter and the Goblet of Fire',
        authors: [
          'J. K. Rowling',
        ],
        publisher: 'Salamandra Infantil Y Juvenil',
        publishedDate: '2020-08-18',
        description: "\"Harry Potter y el cáliz de fuego es la cuarta entrega de la serie fantástica de la autora británica J.K. Rowling. «Habrá tres pruebas, espaciadas en el curso escolar, que medirán a los campeones en muchos aspectos diferentes: sus habilidades mágicas, su osadía, sus dotes de deducción y, por supuesto, su capacidad para sortear el peligro.» Se va a celebrar en Hogwarts el Torneo de los Tres Magos. Solo los alumnos mayores de diecisiete años pueden participar en esta competición, pero, aun así, Harry sueña con ganarla. En Halloween, cuando el cáliz de fuego elige a los campeones, Harry se lleva una sorpresa al ver que su nombre es uno de los escogidos por el cáliz mágico. Durante el torneo deberá enfrentarse a desafíos mortales, dragones y magos tenebrosos, pero con la ayuda de Ron y Hermione, sus mejores amigos, ¡quizá logre salir con vida!\" ENGLISH DESCRIPTION Harry Potter and the Goblet of Fire is the fourth volume of British author J.K. Rowling's now classic series of fantasy novels. \"There will be three tests, spaced throughout the school year, that will test the champions in many different ways: their magical abilities, their daring, their deduction skills, and of course, their ability to overcome danger.\" The Triwizard Tournament is going to be held at Hogwarts. Only students over the age of seventeen are allowed to enter the competition, but even so, Harry dreams of winning it. On Halloween, when the Goblet of Fire chooses the champions, Harry is shocked to see that his name is one of those chosen by the Magic Goblet. During the tournament he will have to face deadly challenges, dragons, and dark wizards, but with the help of his best friends Ron and Hermione, he may just be able to get out alive!",
        industryIdentifiers: [
          {
            type: 'ISBN_10',
            identifier: '8498389267',
          },
          {
            type: 'ISBN_13',
            identifier: '9788498389265',
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        pageCount: 672,
        printType: 'BOOK',
        categories: [
          'Juvenile Fiction',
        ],
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: 'preview-1.0.0',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail: 'http://books.google.com/books/content?id=HN1dzQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          thumbnail: 'http://books.google.com/books/content?id=HN1dzQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        },
        language: 'es',
        previewLink: 'http://books.google.es/books?id=HN1dzQEACAAJ&dq=Harry+potter&hl=&cd=1&source=gbs_api',
        infoLink: 'http://books.google.es/books?id=HN1dzQEACAAJ&dq=Harry+potter&hl=&source=gbs_api',
        canonicalVolumeLink: 'https://books.google.com/books/about/Harry_Potter_y_el_C%C3%A1liz_de_Fuego_Harry.html?hl=&id=HN1dzQEACAAJ',
      },
      saleInfo: {
        country: 'ES',
        saleability: 'NOT_FOR_SALE',
        isEbook: false,
      },
      accessInfo: {
        country: 'ES',
        viewability: 'NO_PAGES',
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink: 'http://play.google.com/books/reader?id=HN1dzQEACAAJ&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'NONE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet: '&quot; ENGLISH DESCRIPTION Harry Potter and the Goblet of Fire is the fourth volume of British author J.K. Rowling&#39;s now classic series of fantasy novels.',
      },
    }];
  localStorage.setItem('objecttransfer', JSON.stringify(booksArray));
}

function buildBookDetails(bookArray) {
  if (document.getElementById('main_block')) {
    document.getElementById('main_block').remove();
  }
  const book = bookArray[0];
  const main = document.createElement('main');
  main.className = 'main_block--flexdisplay';
  main.id = 'main_block';
  document.body.appendChild(main);

  const title = document.createElement('h1');
  title.className = 'title';
  title.id = 'title_id';
  title.innerText = book.volumeInfo.title;
  main.appendChild(title);

  const middleBlock = document.createElement('div');
  middleBlock.className = 'middleBlock';
  middleBlock.id = 'middleBlock_id';
  main.appendChild(middleBlock);

  const image = document.createElement('img');
  image.className = 'image';
  image.id = 'image_id';
  image.src = (book.volumeInfo.imageLinks) ? book.volumeInfo.imageLinks.thumbnail : './assets/missing-book.png';
  middleBlock.appendChild(image);

  const middleBlockRight = document.createElement('div');
  middleBlockRight.className = 'middleBlockRight';
  middleBlockRight.id = 'middleBlockRight_id';
  middleBlock.appendChild(middleBlockRight);

  const furtherInfo = document.createElement('div');
  furtherInfo.className = 'furtherInfo';
  furtherInfo.id = 'furtherInfo_id';
  middleBlockRight.appendChild(furtherInfo);

  const author = document.createElement('h2');
  author.className = 'author';
  author.id = 'author_id';
  author.innerText = (book.volumeInfo.authors) ? book.volumeInfo.authors : 'Unknown Author';
  furtherInfo.appendChild(author);

  const moreBooks = document.createElement('a');
  moreBooks.className = 'moreBooks';
  moreBooks.id = 'moreBooks_id';
  moreBooks.href = `./../dashboard/dashboard.html?=${book.volumeInfo.authors}`;
  moreBooks.target = '_blank';
  furtherInfo.appendChild(moreBooks);

  const moreBooksIcon = document.createElement('img');
  moreBooksIcon.className = 'moreBooksIcon';
  moreBooksIcon.id = 'moreBooksIcon_id';
  moreBooksIcon.src = './assets/books.png';
  moreBooks.appendChild(moreBooksIcon);

  const wikipedia = document.createElement('a');
  wikipedia.className = 'wikipedia';
  wikipedia.id = 'wikipedia_id';
  wikipedia.href = `https://en.wikipedia.org/wiki/${book.volumeInfo.authors}`;
  wikipedia.target = '_blank';
  furtherInfo.appendChild(wikipedia);

  const wikipediaIcon = document.createElement('img');
  wikipediaIcon.className = 'wikipediaIcon';
  wikipediaIcon.id = 'wikipediaIcon_id';
  wikipediaIcon.src = './assets/wikipedia.png';
  wikipedia.appendChild(wikipediaIcon);

  const returnLink = document.createElement('a');
  returnLink.className = 'returnLink';
  returnLink.id = 'returnLink_id';
  returnLink.href = './../dashboard/dashboard.html';
  furtherInfo.appendChild(returnLink);

  const returnIcon = document.createElement('img');
  returnIcon.className = 'returnIcon';
  returnIcon.id = 'returnIcon_id';
  returnIcon.src = './assets/back.png';
  returnLink.appendChild(returnIcon);

  const briefDescription = document.createElement('h4');
  briefDescription.className = 'briefDescription';
  briefDescription.id = 'briefDescription_id';
  briefDescription.innerText = (book.volumeInfo.description) ? book.volumeInfo.description : 'Description not available :(';
  middleBlockRight.appendChild(briefDescription);

  const editionInfoBlock = document.createElement('div');
  editionInfoBlock.className = 'editionInfoBlock';
  editionInfoBlock.id = 'editionInfoBlock_id';
  main.appendChild(editionInfoBlock);

  const year = document.createElement('h5');
  year.className = 'year';
  year.id = 'year_id';
  year.innerText = (book.volumeInfo.publishedDate) ? `- Published Date:   ${book.volumeInfo.publishedDate}        ` : 'Unknown publishing date        ';
  editionInfoBlock.appendChild(year);

  const pages = document.createElement('h5');
  pages.className = 'pages';
  pages.id = 'pages_id';
  pages.innerText = (book.volumeInfo.pageCount) ? `- Pages:   ${book.volumeInfo.pageCount}        ` : 'Unknown amount of pages        ';
  editionInfoBlock.appendChild(pages);

  const bookLanguage = document.createElement('h5');
  bookLanguage.className = 'bookLanguage';
  bookLanguage.id = 'bookLanguage_id';
  bookLanguage.innerText = (book.volumeInfo.language) ? `- Language:   ${book.volumeInfo.language}       ` : 'Unknown language        ';
  editionInfoBlock.appendChild(bookLanguage);

  const bookPublisher = document.createElement('h5');
  bookPublisher.className = 'bookPublisher';
  bookPublisher.id = 'bookPublisher_id';
  bookPublisher.innerText = (book.volumeInfo.publisher) ? `- Publisher:   ${book.volumeInfo.publisher}        ` : 'Unknown publisher        ';
  editionInfoBlock.appendChild(bookPublisher);
}

module.exports = {
  getIdfromWindowLocation, catchSelectedBook, mockLocalstorageJest, buildBookDetails,
};
