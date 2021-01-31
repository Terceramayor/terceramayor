const {
  createVirtualMainJest, cleanVirtualMainJest, createSearchpanel, askGoogleBooks, formatTextSearch, defineAPIrequest, fetchGoogle, buildSearchResults, getNamefromWindowLocation,
} = require('./dashboard');

const returnMokObject = {
  kind: 'books#volumes',
  totalItems: 1080,
  items: [
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
    }],
};

describe('Given a dashboard builders set of functions', () => {
  beforeEach(() => {
    createVirtualMainJest();
  });

  afterEach(() => {
    cleanVirtualMainJest();
  });

  describe('Given a function that creates the search button', () => {
    test('Then a div must be created with the id=main_block and class=search_panel', () => {
      createSearchpanel();
      const answer = document.getElementById('search_panel_id').className;
      expect(answer).toBe('search_panel');
    });

    test('Then a div must be created with the id=search_box_id and class=search_box ', () => {
      createSearchpanel();
      const answer = document.getElementById('search_box_id').className;
      expect(answer).toBe('search_box');
    });

    test('Then a img must be created with the src=./assets/loupe.png ', () => {
      createSearchpanel();
      const answer = document.getElementsByTagName('img')[0].className;
      expect(answer).toBe('owl');
    });

    test('Then the function askGoogleBooks should be called if there is a search location ', () => {
      delete global.window.location;
      global.window = Object.create(window);
      global.window.location = {
        search: '?=Homero',
      };

      const jsonResponse = new Promise((resolve) => resolve('irrelevant for this test'));
      const fetchReturnValue = new Promise((resolve) => resolve({ json: jest.fn().mockReturnValueOnce(jsonResponse) }));
      global.fetch = jest.fn().mockReturnValueOnce(fetchReturnValue);

      createSearchpanel();
      const answer = document.getElementById('search_box_id').value;

      expect(answer).toBe('Homero');
    });
  });

  describe('Given a function that reads the user search input', () => {
    test('When invoked, it replaces " " by "+"', () => {
      const answer = formatTextSearch('Harry Potter Caliz Fuego');
      expect(answer).toBe('Harry+Potter+Caliz+Fuego');
    });
  });

  describe('Given a function that gives format to query to be sent to google', () => {
    test('When invoked, it gets the URL request ready to be fetched', () => {
      const answer = defineAPIrequest('Harry+Potter+Caliz+Fuego');
      expect(answer).toBe('https://www.googleapis.com/books/v1/volumes?q=Harry+Potter+Caliz+Fuego');
    });
  });

  describe('Given a function that fetches fron google', () => {
    test('When invoked, it gets an object with the requested data', () => {
      const apiRequest = 'https://www.googleapis.com/books/v1/volumes?q=Harry+Potter+Caliz+Fuego';

      const jsonResponse = new Promise((resolve) => resolve(returnMokObject));
      const fetchReturnValue = new Promise((resolve) => resolve({ json: jest.fn().mockReturnValueOnce(jsonResponse) }));
      global.fetch = jest.fn().mockReturnValueOnce(fetchReturnValue);

      fetchGoogle(apiRequest).then((returnObject) => {
        expect(returnObject.totalItems).toBe(1080);
      });
    });
  });

  describe('Given a function that fetches fron google', () => {
    test('When invoked, it gets an object with the requested data', () => {
      const apiRequest = 'https://www.googleapis.com/books/v1/volumes?q=Harry+Potter+Caliz+Fuego';

      const jsonResponse = new Promise((resolve) => resolve(returnMokObject));
      const fetchReturnValue = new Promise((resolve) => resolve({ json: jest.fn().mockReturnValueOnce(jsonResponse) }));
      global.fetch = jest.fn().mockReturnValueOnce(fetchReturnValue);

      fetchGoogle(apiRequest).then((returnObject) => {
        expect(returnObject.totalItems).toBe(1080);
      });
    });
  });

  describe('Given a function that builds the serach results', () => {
    test('When invoked, a div block with the id="results_Block_id" should be present wuth the class="results_Block"', () => {
      buildSearchResults(returnMokObject);
      const answer = document.getElementById('results_Block_id').className;
      expect(answer).toBe('results_Block');
    });
    test('When invoked, an anchor block with the id="Harry Potter y el Cáliz de Fuego / Harry Potter and the Goblet of Fire" should be present wuth the class="results_Block"', () => {
      buildSearchResults(returnMokObject);
      const answer = document.getElementById('Harry Potter y el Cáliz de Fuego / Harry Potter and the Goblet of Fire').className;
      expect(answer).toBe('foundBook_block');
    });
    test('When invoked, an anchor block with the id="Harry Potter y el Cáliz de Fuego / Harry Potter and the Goblet of Fire" should be present with the href="http://localhost/book-details/book-details.html?id=HN1dzQEACAAJ', () => {
      buildSearchResults(returnMokObject);
      const answer = document.getElementById('Harry Potter y el Cáliz de Fuego / Harry Potter and the Goblet of Fire').href;
      expect(answer).toBe('http://localhost/book-details/book-details.html?id=HN1dzQEACAAJ');
    });
    test('When invoked, an h4 block with the id="authors_J. K. Rowling" and the inner text = "J. K. Rowling"', () => {
      buildSearchResults(returnMokObject);
      const answer = document.getElementById('authors_J. K. Rowling').innerText;
      expect(answer[0]).toBe('J. K. Rowling');
    });

    test('When invoked with an object lacking thumbnail, it should assign the missing-book.png image', () => {
      const returnMokObject = {
        kind: 'books#volumes',
        totalItems: 1080,
        items: [
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
          }],
      };
      buildSearchResults(returnMokObject);
      const answer = document.getElementById('book_thumbail_id').src;
      expect(answer).toBe('http://localhost/assets/missing-book.png');
    });

    test('When invoked with an object lacking author, it should flag it', () => {
      const returnMokObject = {
        kind: 'books#volumes',
        totalItems: 1080,
        items: [
          {
            kind: 'books#volume',
            id: 'HN1dzQEACAAJ',
            etag: 'LH651ql/3Rg',
            selfLink: 'https://www.googleapis.com/books/v1/volumes/HN1dzQEACAAJ',
            volumeInfo: {
              title: 'Harry Potter y el Cáliz de Fuego / Harry Potter and the Goblet of Fire',

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
          }],
      };
      buildSearchResults(returnMokObject);
      const answer = document.getElementById('authors_undefined').innerText;
      expect(answer).toBe('Unknown Author :(');
    });

    test('When invoked with an existing div element with the class=results_Block, there should be only one block with such class', () => {
      buildSearchResults(returnMokObject);
      buildSearchResults(returnMokObject);
      const answer = document.getElementsByClassName('results_Block');
      expect(answer.length).toBe(1);
    });
  });
});

describe('Given a function retrieves the author name fron the search location', () => {
  test('When invoked, When invoked, it filters the name', () => {
    const answer = getNamefromWindowLocation('?=Homero');
    expect(answer).toBe('Homero');
  });
});
