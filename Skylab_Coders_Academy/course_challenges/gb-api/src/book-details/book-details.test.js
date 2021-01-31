const {
  getIdfromWindowLocation, catchSelectedBook, mockLocalstorageJest, buildBookDetails,
} = require('./book-details.js');

const book = [
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

describe('Given a function retrieves the id fron the search location', () => {
  test('When invoked, it filters the id', () => {
    const answer = getIdfromWindowLocation('?id=8UBRAAAAcAAJ');
    expect(answer).toBe('8UBRAAAAcAAJ');
  });
});

describe('Given a function taht filters by id', () => {
  test('When invoked, it finds the book that matches such id when passed as argument', () => {
    mockLocalstorageJest();
    const answer = catchSelectedBook('HN1dzQEACAAJ');
    expect(answer[0].id).toBe('HN1dzQEACAAJ');
  });
});

describe('Given a function that builds the book details', () => {
  test('When invoked, the first h5 element should have the id="year_id"', () => {
    buildBookDetails(book);
    const answer = document.getElementsByTagName('h5')[0].id;
    expect(answer).toBe('year_id');
  });

  test('When invoked, the element with the id="year_id" the inner value should be: - Published Date:   2020-08-18        ', () => {
    buildBookDetails(book);
    const answer = document.getElementsByTagName('h5')[0].innerText;
    expect(answer).toBe('- Published Date:   2020-08-18        ');
  });

  test('When invoked, the first h5 element should have the id="bookPublisher_id"', () => {
    buildBookDetails(book);
    const answer = document.getElementsByTagName('h5')[3].id;
    expect(answer).toBe('bookPublisher_id');
  });

  test('When invoked, the element with the id="bookPublisher_id" should contain the following inner text ', () => {
    buildBookDetails(book);
    const answer = document.getElementsByTagName('h5')[3].innerText;
    expect(answer).toBe('- Publisher:   Salamandra Infantil Y Juvenil        ');
  });

  test('When invoked with a missing author, it should return "Unknown Author" ', () => {
    const book = [
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
    buildBookDetails(book);
    const answer = document.getElementById('author_id').innerText;
    expect(answer).toBe('Unknown Author');
  });
  test('When invoked with the image missing, it should assing the missing-book image', () => {
    const book = [
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
      }];
    buildBookDetails(book);
    const answer = document.getElementById('image_id').src;
    expect(answer).toBe('http://localhost/assets/missing-book.png');
  });

  test('When invoked wiht a missing description, it should return: Description not available :(', () => {
    const book = [
      {
        kind: 'books#volume',
        id: 'HN1dzQEACAAJ',
        etag: 'LH651ql/3Rg',
        selfLink: 'https://www.googleapis.com/books/v1/volumes/HN1dzQEACAAJ',
        volumeInfo: {
          title: 'Harry Potter y el Cáliz de Fuego / Harry Potter and the Goblet of Fire',
          publisher: 'Salamandra Infantil Y Juvenil',
          publishedDate: '2020-08-18',
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
      }];
    buildBookDetails(book);
    const answer = document.getElementById('briefDescription_id').innerText;
    expect(answer).toBe('Description not available :(');
  });

  test('When invoked wiht a missing publishig date, it should return: Unknown publishing date        ', () => {
    const book = [
      {
        kind: 'books#volume',
        id: 'HN1dzQEACAAJ',
        etag: 'LH651ql/3Rg',
        selfLink: 'https://www.googleapis.com/books/v1/volumes/HN1dzQEACAAJ',
        volumeInfo: {
          title: 'Harry Potter y el Cáliz de Fuego / Harry Potter and the Goblet of Fire',
          publisher: 'Salamandra Infantil Y Juvenil',

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
      }];
    buildBookDetails(book);
    const answer = document.getElementById('year_id').innerText;
    expect(answer).toBe('Unknown publishing date        ');
  });

  test('When invoked wiht a missing pages count, it should return: Unknown amount of pages        ', () => {
    const book = [
      {
        kind: 'books#volume',
        id: 'HN1dzQEACAAJ',
        etag: 'LH651ql/3Rg',
        selfLink: 'https://www.googleapis.com/books/v1/volumes/HN1dzQEACAAJ',
        volumeInfo: {
          title: 'Harry Potter y el Cáliz de Fuego / Harry Potter and the Goblet of Fire',
          publisher: 'Salamandra Infantil Y Juvenil',

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
      }];
    buildBookDetails(book);
    const answer = document.getElementById('pages_id').innerText;
    expect(answer).toBe('Unknown amount of pages        ');
  });

  test('When invoked wiht a missing language, it should return: Unknown language        ', () => {
    const book = [
      {
        kind: 'books#volume',
        id: 'HN1dzQEACAAJ',
        etag: 'LH651ql/3Rg',
        selfLink: 'https://www.googleapis.com/books/v1/volumes/HN1dzQEACAAJ',
        volumeInfo: {
          title: 'Harry Potter y el Cáliz de Fuego / Harry Potter and the Goblet of Fire',
          publisher: 'Salamandra Infantil Y Juvenil',

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
    buildBookDetails(book);
    const answer = document.getElementById('bookLanguage_id').innerText;
    expect(answer).toBe('Unknown language        ');
  });

  test('When invoked wiht a missing publisher, it should return: Unknown publisher        ', () => {
    const book = [
      {
        kind: 'books#volume',
        id: 'HN1dzQEACAAJ',
        etag: 'LH651ql/3Rg',
        selfLink: 'https://www.googleapis.com/books/v1/volumes/HN1dzQEACAAJ',
        volumeInfo: {
          title: 'Harry Potter y el Cáliz de Fuego / Harry Potter and the Goblet of Fire',

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
    buildBookDetails(book);
    const answer = document.getElementById('bookPublisher_id').innerText;
    expect(answer).toBe('Unknown publisher        ');
  });
});
