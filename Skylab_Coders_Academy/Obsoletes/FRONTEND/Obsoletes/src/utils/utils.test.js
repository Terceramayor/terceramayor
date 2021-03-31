import { calculateOwnersExowners } from './calculateOwnersExowners';
import { formatDate } from './formatDate';
import { scoreToColor } from './scoreToColor';
import averageDuration from './averageDuration';
import { deathStatistics } from './deathStatistics';
import obsoletionMagic from './obsoletionMagic';
import mapping from './mapping';
import userFeedbackPosible from './userFeedbackPosible';

import { barDotPossition } from './barDotPossition';
import { checkIfInObsoletesDb } from './checkIfInObsoletesDb';
import { removeRepeatedEntries } from './removeRepeatedEntries';
import { searchPetitionsAxiosConfig } from './searchPetitionsAxiosConfig';

const mockProductBroken = {
  _id: '6047b4d99183cd62d8dd45b5',
  originId: '30493083045',
  productName: 'SumSag xPro ssd',
  thumbnailUrl: 'https://i.ibb.co/X3Kj5gb/i.png',
  brand: 'SumSag',
  category: 'smartPhone',
  obsoletion: 9.83,
  stats: [
    {
      _id: '604762aed7d1028120f70fe4',
      buyDate: '2020-06-04T00:00:00.000Z',
      broken: true,
      brokenDate: '2021-02-06T00:00:00.000Z',
      user: 'Pablo',
      reason: 'Slow System'
    }
  ],
  __v: 0,
  updatedDate: '2021-02-06T00:00:00.000Z'
};

const mockProductNotBroken = {
  _id: '6047b4d99183cd62d8dd45b5',
  originId: '30493083045',
  productName: 'SumSag xPro ssd',
  thumbnailUrl: 'https://i.ibb.co/X3Kj5gb/i.png',
  brand: 'SumSag',
  category: 'smartPhone',
  obsoletion: 9.83,
  stats: [
    {
      _id: '604762aed7d1028120f70fe4',
      buyDate: '2020-06-04T00:00:00.000Z',
      broken: false,
      brokenDate: '2021-02-06T00:00:00.000Z',
      user: 'Pablo',
      reason: 'Slow System'
    }
  ],
  __v: 0,
  updatedDate: '2021-02-06T00:00:00.000Z'
};

const mockProductSeveralBroken = {
  _id: '6047b4d99183cd62d8dd45b5',
  originId: '30493083045',
  productName: 'SumSag xPro ssd',
  thumbnailUrl: 'https://i.ibb.co/X3Kj5gb/i.png',
  brand: 'SumSag',
  category: 'smartPhone',
  obsoletion: 9.83,
  stats: [
    {
      _id: '604762aed7d1028120f70fe4',
      buyDate: '2020-06-04T00:00:00.000Z',
      broken: true,
      brokenDate: '2021-02-06T00:00:00.000Z',
      user: 'Pablo',
      reason: 'Slow System'
    },
    {
      _id: '604762aed7d1028120f70fe4',
      buyDate: '2017-06-04T00:00:00.000Z',
      broken: true,
      brokenDate: '2020-02-06T00:00:00.000Z',
      user: 'Pablo',
      reason: 'Screen Broke'
    },
    {
      _id: '604762aed7d1028120f70fe4',
      buyDate: '2015-06-04T00:00:00.000Z',
      broken: false,
      brokenDate: '',
      user: 'Pablo',
      reason: ''
    }
  ],
  __v: 0,
  updatedDate: '2021-02-06T00:00:00.000Z'
};

const mockedProductForOboletionCalculation = {
  __v: 0,
  _id: '604a35ef8311fb40d48fdb18',
  brand: 'MiXiao',
  category: 'smartPhone',
  obsoletion: 10,
  originId: '098354098534',
  productName: 'MiXiao Ultra Lol',
  stats: [
    {
      _id: '604762aed7d1028120f70fe4',
      broken: false,
      brokenDate: '',
      buyDate: '2017-01-04T00:00:00.000Z',
      reason: '',
      user: 'Inma'
    },
    {
      _id: '604762aed7d1028120f70fe4',
      broken: true,
      brokenDate: '2020-01-04T00:00:00.000Z',
      buyDate: '2017-01-04T00:00:00.000Z',
      reason: 'Water',
      user: 'Pablo'
    },
    {
      _id: '604762aed7d1028120f70fe4',
      broken: true,
      brokenDate: '2020-01-04T00:00:00.000Z',
      buyDate: '2017-01-04T00:00:00.000Z',
      reason: 'Screen',
      user: 'Pablo'
    }
  ],
  thumbnailUrl: 'https://i.ibb.co/X3Kj5gb/i.png',
  updatedDate: '2010-01-04T00:00:00.000Z'
};

const mockedProductForOboletionCalculationShortDuration = {
  __v: 0,
  _id: '604a35ef8311fb40d48fdb18',
  brand: 'MiXiao',
  category: 'smartPhone',
  obsoletion: 10,
  originId: '098354098534',
  productName: 'MiXiao Ultra Lol',
  stats: [
    {
      _id: '604762aed7d1028120f70fe4',
      broken: false,
      brokenDate: '',
      buyDate: '2010-01-04T00:00:00.000Z',
      reason: '',
      user: 'Inma'
    },
    {
      _id: '604762aed7d1028120f70fe4',
      broken: true,
      brokenDate: '2020-02-04T00:00:00.000Z',
      buyDate: '2020-01-04T00:00:00.000Z',
      reason: 'Water',
      user: 'Pablo'
    },
    {
      _id: '604762aed7d1028120f70fe4',
      broken: true,
      brokenDate: '2020-02-04T00:00:00.000Z',
      buyDate: '2020-01-04T00:00:00.000Z',
      reason: 'Screen',
      user: 'Pablo'
    }
  ],
  thumbnailUrl: 'https://i.ibb.co/X3Kj5gb/i.png',
  updatedDate: '2010-01-04T00:00:00.000Z'
};

const mockedProductForOboletionCalculationAllExowners = {
  __v: 0,
  _id: '604a35ef8311fb40d48fdb18',
  brand: 'MiXiao',
  category: 'smartPhone',
  obsoletion: 10,
  originId: '098354098534',
  productName: 'MiXiao Ultra Lol',
  stats: [
    {
      _id: '604762aed7d1028120f70fe4',
      broken: true,
      brokenDate: '2010-01-04T00:00:00.000Z',
      buyDate: '1900-01-04T00:00:00.000Z',
      reason: '',
      user: 'Inma'
    },
    {
      _id: '604762aed7d1028120f70fe4',
      broken: true,
      brokenDate: '2010-01-04T00:00:00.000Z',
      buyDate: '1900-01-04T00:00:00.000Z',
      reason: '',
      user: 'Pablo'
    },
    {
      _id: '604762aed7d1028120f70fe4',
      broken: true,
      brokenDate: '2010-01-04T00:00:00.000Z',
      buyDate: '1900-01-04T00:00:00.000Z',
      reason: '',
      user: 'David'
    }
  ],
  thumbnailUrl: 'https://i.ibb.co/X3Kj5gb/i.png',
  updatedDate: '2010-01-04T00:00:00.000Z'
};

describe('Given the calculateOwnersExowners function ', () => {
  describe('When it is invoked with a valid mocked up broken product', () => {
    test('Then the response should be {owners:0,exOwners:1}', () => {
      const response = calculateOwnersExowners(mockProductBroken);

      expect(response).toStrictEqual({ owners: 0, exOwners: 1 });
    });
  });

  describe('When it is invoked with a valid mocked up not broken product', () => {
    test('Then the response should be {owners:0,exOwners:1}', () => {
      const response = calculateOwnersExowners(mockProductNotBroken);

      expect(response).toStrictEqual({ owners: 1, exOwners: 0 });
    });
  });
});

// ==============================================================

describe('Given the scoreToColor function ', () => {
  describe('When it is invoked with 0', () => {
    test('Then the response should be 120', () => {
      const response = scoreToColor(0);

      expect(response).toStrictEqual(120);
    });
  });

  describe('When it is invoked with 10', () => {
    test('Then the response should be 0', () => {
      const response = scoreToColor(10);

      expect(response).toStrictEqual(0);
    });
  });
});

// ==============================================================

describe('Given the formatDate function ', () => {
  describe('When it is invoked with the date 2020-06-04T00:00:00.000Z', () => {
    test('Then the response should be 2020-06-04', () => {
      const response = formatDate('2020-06-04T00:00:00.000Z');

      expect(response).toStrictEqual('2020-6-4');
    });
  });
});

// ==============================================================

describe('Given the averageDuration function ', () => {
  describe('When it is invoked with a valid product with a specific stats die reasons', () => {
    test('Then the response should be 1.68', () => {
      const response = averageDuration(mockProductSeveralBroken);

      expect(response).toStrictEqual('1.68');
    });
  });
});

// ==============================================================

describe('Given the averageDuration function ', () => {
  describe('When it is invoked with a product with specific stats die reasons', () => {
    test('Then the response should be an array with a summary of the die reasons', () => {
      const response = deathStatistics(mockProductSeveralBroken);

      const expectedResponse = [{
        amount: 1,
        averageDuration: '0.68',
        deathReason: 'Slow System',
        percentageDeathReason: '50.0'
      },
      {
        amount: 1,
        averageDuration: '2.68',
        deathReason: 'Screen Broke',
        percentageDeathReason: '50.0'
      }];

      expect(response).toStrictEqual(expectedResponse);
    });
  });
});

// ==============================================================

describe('Given the obsoletionMagic function ', () => {
  describe('When it is invoked with a product with an object with deveral stats die reasons', () => {
    test('Then the response should be 5.71', () => {
      const response = obsoletionMagic(mockedProductForOboletionCalculation);
      expect(response).toStrictEqual(5.62);
    });
  });

  describe('When it is invoked with a product with an object with short duration statistics', () => {
    test('Then the response should be  8.03', () => {
      const response = obsoletionMagic(mockedProductForOboletionCalculationShortDuration);
      expect(response).toStrictEqual(8.03);
    });
  });

  describe('When it is invoked with a product with an object with all exOwners', () => {
    test('Then the response should be  10', () => {
      const response = obsoletionMagic(mockedProductForOboletionCalculationAllExowners);
      expect(response).toStrictEqual(10);
    });
  });
});

// ==============================================================

describe('Given the obsoletionMagic function ', () => {
  describe('When it is invoked with a product with no broken stats', () => {
    test('Then the response should be 0', () => {
      const response = obsoletionMagic(mockProductNotBroken);
      expect(response).toStrictEqual(0);
    });
  });
});

// ==============================================================

describe('Given the mapping function ', () => {
  describe('When it is invoked with a testing input/output range and value', () => {
    test('Then the response should be 0', () => {
      const response = mapping(1.5, 1, 2, 0, 25);
      expect(response).toStrictEqual(12.5);
    });
  });
});

// ==============================================================

describe('Given the userFeedbackPosible function ', () => {
  describe('When it is invoked with a product with and a user name that already submited the device as broken', () => {
    test('Then the response should be { userAlreadyFeedback: true, isBroken: true }', () => {
      const expectedResponse = { userAlreadyFeedback: true, isBroken: true };
      const response = userFeedbackPosible(mockProductBroken, 'Pablo');
      expect(response).toStrictEqual(expectedResponse);
    });
  });

  describe('When it is invoked with a product with and a user name that submited the device as bought but not broken', () => {
    test('Then the response should be { userAlreadyFeedback: true, isBroken: false }', () => {
      const expectedResponse = { userAlreadyFeedback: true, isBroken: false };
      const response = userFeedbackPosible(mockProductNotBroken, 'Pablo');
      expect(response).toStrictEqual(expectedResponse);
    });
  });

  describe('When it is invoked with a product with and a user name that has not yet submited feedback', () => {
    test('Then the response should be { userAlreadyFeedback: false, isBroken: false }', () => {
      const expectedResponse = { userAlreadyFeedback: false, isBroken: false };
      const response = userFeedbackPosible(mockedProductForOboletionCalculation, 'Pepe');
      expect(response).toStrictEqual(expectedResponse);
    });
  });
});

// ==============================================================

describe('Given the barDotPossition function ', () => {
  describe('When it is invoked with an obsoletion score of 5', () => {
    test('Then the response should be 47.5', () => {
      const response = barDotPossition(5);
      expect(response).toBe(47.5);
    });
  });
});

// ==============================================================

describe('Given the checkIfInObsoletesDb function ', () => {
  describe('When it is invoked with one array of commercial products and one array of Obsolete products with common products', () => {
    test('Then length of the combined array should be 9', () => {
      const mockedCommercialProductsArray = [
        {
          __v: 0,
          _id: '6043f94863a82a8214997f8e',
          brand: 'Ephone',
          category: 'smartPhones',
          name: 'Ephone Lite Xs',
          price: 276,
          thumbNail_url: 'https://i.ibb.co/pPZPjr7/m.png'
        },
        {
          __v: 0,
          _id: '6043f94863a82a8214997f8f',
          brand: 'Ephone',
          category: 'smartPhones',
          name: 'Ephone Lite NFC',
          price: 143,
          thumbNail_url: 'https://i.ibb.co/KLpHHyP/q.png'
        },
        {
          __v: 0,
          _id: '6043f94863a82a8214997f90',
          brand: 'Ephone',
          category: 'smartPhones',
          name: 'Ephone Lite A21',
          price: 292,
          thumbNail_url: 'https://i.ibb.co/xms5wJL/c.png'
        },
        {
          __v: 0,
          _id: '6043f94863a82a8214997f91',
          brand: 'Ephone',
          category: 'smartPhones',
          name: 'Ephone Pro Xs',
          price: 223,
          thumbNail_url: 'https://i.ibb.co/N9mJfj5/h.png'
        },
        {
          __v: 0,
          _id: '6043f94863a82a8214997f92',
          brand: 'Ephone',
          category: 'smartPhones',
          name: 'Ephone Pro NFC',
          price: 285,
          thumbNail_url: 'https://i.ibb.co/ysFvRGF/j.png'
        },
        {
          __v: 0,
          _id: '6043f94863a82a8214997f93',
          brand: 'Ephone',
          category: 'smartPhones',
          name: 'Ephone Pro A21',
          price: 284,
          thumbNail_url: 'https://i.ibb.co/N9mJfj5/h.png'
        },
        {
          __v: 0,
          _id: '6043f94863a82a8214997f95',
          brand: 'Ephone',
          category: 'smartPhones',
          name: 'Ephone Xp NFC',
          price: 103,
          thumbNail_url: 'https://i.ibb.co/N27W9kP/d.png'
        },
        {
          __v: 0,
          _id: '6043f94863a82a8214997f94',
          brand: 'Ephone',
          category: 'smartPhones',
          name: 'Ephone Xp Xs',
          price: 131,
          thumbNail_url: 'https://i.ibb.co/8cX5HpV/l.png'
        },
        {
          __v: 0,
          _id: '6043f94863a82a8214997f96',
          brand: 'Ephone',
          category: 'smartPhones',
          name: 'Ephone Xp A21',
          price: 142,
          thumbNail_url: 'https://i.ibb.co/2FTZ9dX/k.png'
        }
      ];
      const mockedObsoletesProductsArray = [
        {
          __v: 0,
          _id: '604762aed7d1028120f70fe3',
          brand: 'Ephone',
          category: 'smartPhones',
          obsoletion: 5.67,
          originId: '6043f94863a82a8214997f8e',
          productName: 'Ephone Lite Xs',
          stats: [
            {
              _id: '604762aed7d1028120f70fe4',
              broken: true,
              brokenDate: '2022-04-01T00:00:00.000Z',
              buyDate: '2020-01-04T00:00:00.000Z',
              reason: 'Battery dead',
              user: 'Pablo'
            },
            {
              _id: '605099a41a852e0ad0936e8b',
              broken: false,
              brokenDate: null,
              buyDate: '2021-03-16T11:42:29.783Z',
              reason: '',
              user: 'Inma'
            },
            {
              _id: '6050b1652ec17951c8c6174d',
              broken: false,
              brokenDate: null,
              buyDate: '2021-03-16T13:23:48.159Z',
              reason: '',
              user: 'Paco'
            },
            {
              _id: '6050b2c82ec17951c8c61752',
              broken: false,
              brokenDate: null,
              buyDate: '2021-03-16T13:29:43.251Z',
              reason: '',
              user: 'Manolo'
            },
            {
              _id: '6050b6852ec17951c8c6177a',
              broken: false,
              brokenDate: null,
              buyDate: '2021-03-16T13:45:40.103Z',
              reason: '',
              user: 'Pepe'
            },
            {
              _id: '6050b9772ec17951c8c6178c',
              broken: false,
              brokenDate: null,
              buyDate: '2021-03-16T13:58:14.328Z',
              reason: '',
              user: 'Vicente'
            },
            {
              _id: '6050e1572ec17951c8c617c4',
              broken: false,
              brokenDate: null,
              buyDate: '2021-03-16T16:48:22.252Z',
              reason: '',
              user: 'Xi'
            },
            {
              _id: '6050ebc885fe065b08403d03',
              broken: false,
              brokenDate: null,
              buyDate: '2021-03-16T17:32:56.198Z',
              reason: '',
              user: 'Pepaco'
            },
            {
              _id: '6050ec1b85fe065b08403d0d',
              broken: false,
              brokenDate: null,
              buyDate: '2021-03-16T17:34:19.308Z',
              reason: '',
              user: 'Dncjc'
            },
            {
              _id: '6050ed9c85fe065b08403d32',
              broken: false,
              brokenDate: null,
              buyDate: '2021-03-16T17:40:44.525Z',
              reason: '',
              user: 'Lol'
            },
            {
              _id: '6051b6e9d9236f50cca99e66',
              broken: false,
              brokenDate: null,
              buyDate: '2021-03-17T07:59:37.514Z',
              reason: '',
              user: 'Grruu'
            },
            {
              _id: '6052027bd9236f50cca99e73',
              broken: false,
              brokenDate: null,
              buyDate: '2021-03-17T13:22:01.865Z',
              reason: '',
              user: 'Rugusjfu'
            },
            {
              _id: '605210d3d9236f50cca99f2d',
              broken: true,
              brokenDate: '2021-03-17T14:23:14.072Z',
              buyDate: '2021-03-17T14:22:39.200Z',
              reason: 'Too ugly',
              user: '1234'
            },
            {
              _id: '6052159bd9236f50cca99f64',
              broken: true,
              brokenDate: '2021-03-17T14:43:38.337Z',
              buyDate: '2021-03-17T14:43:22.845Z',
              reason: 'Lol',
              user: 'Javi'
            },
            {
              _id: '60523319d9236f50cca9a03c',
              broken: false,
              brokenDate: null,
              buyDate: '2021-03-17T16:49:28.240Z',
              reason: '',
              user: 'Bartolo'
            },
            {
              _id: '60523452d9236f50cca9a066',
              broken: false,
              brokenDate: null,
              buyDate: '2021-03-17T16:54:41.037Z',
              reason: '',
              user: '12345'
            },
            {
              _id: '60523bcdd9236f50cca9a10d',
              broken: false,
              brokenDate: null,
              buyDate: '2021-03-17T17:26:36.110Z',
              reason: '',
              user: 'Xjfyf'
            },
            {
              _id: '60523be9d9236f50cca9a120',
              broken: false,
              brokenDate: null,
              buyDate: '2021-03-17T17:27:03.955Z',
              reason: '',
              user: 'Fu de ej'
            },
            {
              _id: '60523c13d9236f50cca9a134',
              broken: false,
              brokenDate: null,
              buyDate: '2021-03-17T17:27:46.392Z',
              reason: '',
              user: 'Los'
            },
            {
              _id: '60523c30d9236f50cca9a149',
              broken: false,
              brokenDate: null,
              buyDate: '2021-03-17T17:28:15.056Z',
              reason: '',
              user: 'Wppdod'
            },
            {
              _id: '60526ce921bf370708519e47',
              broken: false,
              brokenDate: null,
              buyDate: '2021-03-17T20:56:09.374Z',
              reason: '',
              user: 'Sonante'
            },
            {
              _id: '6053141d1129ac23a8a6f522',
              broken: true,
              brokenDate: '2021-03-18T08:49:33.236Z',
              buyDate: '2021-03-18T08:49:15.334Z',
              reason: 'Too ugly',
              user: '321'
            },
            {
              _id: '6054e072744a3212f801db17',
              broken: true,
              brokenDate: '2021-03-19T17:33:41.396Z',
              buyDate: '2021-03-19T17:33:26.993Z',
              reason: 'Too ugly',
              user: '54321'
            }
          ],
          thumbnailUrl: 'https://i.ibb.co/Z1gzRfK/n.png',
          updatedDate: '2021-03-19T17:33:26.993Z'
        },
        {
          __v: 0,
          _id: '6047631bd7d1028120f70fe5',
          brand: 'MiXiao',
          category: 'SmartPhones',
          obsoletion: 7.64,
          originId: 'afdsfgdf',
          productName: 'MiXiao Lite 64GB',
          stats: [
            {
              _id: '6047631bd7d1028120f70fe6',
              broken: true,
              brokenDate: '2020-02-12T00:00:00.000Z',
              buyDate: '2019-10-09T00:00:00.000Z',
              reason: 'Screen dead',
              user: 'Pablo'
            },
            {
              _id: '6050b6022ec17951c8c61773',
              broken: false,
              brokenDate: null,
              buyDate: '2021-03-16T13:43:29.023Z',
              reason: '',
              user: 'Pepe'
            },
            {
              _id: '6050c2272ec17951c8c61795',
              broken: false,
              brokenDate: null,
              buyDate: '2021-03-16T14:35:17.809Z',
              reason: '',
              user: 'Vicente'
            },
            {
              _id: '6050dfc42ec17951c8c617a5',
              broken: false,
              brokenDate: null,
              buyDate: '2021-03-16T16:41:38.499Z',
              reason: '',
              user: 'Xi'
            },
            {
              _id: '6050e6522ec17951c8c617f9',
              broken: false,
              brokenDate: null,
              buyDate: '2021-03-16T17:09:36.699Z',
              reason: '',
              user: 'Xo'
            },
            {
              _id: '6050ed0b85fe065b08403d18',
              broken: false,
              brokenDate: null,
              buyDate: '2021-03-16T17:38:19.407Z',
              reason: '',
              user: 'Dncjc'
            },
            {
              _id: '60520f56d9236f50cca99f13',
              broken: true,
              brokenDate: '2021-03-17T14:16:53.279Z',
              buyDate: '2021-03-17T14:16:27.902Z',
              reason: 'Battery dead',
              user: '1234'
            },
            {
              _id: '605229fed9236f50cca99fba',
              broken: true,
              brokenDate: '2021-03-17T16:10:36.997Z',
              buyDate: '2021-03-17T15:14:46.376Z',
              reason: 'Battery dead',
              user: 'Javi'
            },
            {
              _id: '60523214d9236f50cca9a00e',
              broken: true,
              brokenDate: '2021-03-17T16:45:07.435Z',
              buyDate: '2021-03-17T16:19:20.971Z',
              reason: 'Ugly',
              user: 'Bartolo'
            },
            {
              _id: '60523f64d9236f50cca9a1af',
              broken: true,
              brokenDate: '2021-03-17T17:41:55.844Z',
              buyDate: '2021-03-17T17:41:43.552Z',
              reason: 'Screen dead',
              user: 'Djxyx'
            },
            {
              _id: '6052413582850b2ad49a1f46',
              broken: false,
              brokenDate: null,
              buyDate: '2021-03-17T17:49:40.732Z',
              reason: '',
              user: 'Fkfhc'
            },
            {
              _id: '60526c3721bf370708519e0a',
              broken: true,
              brokenDate: '2021-03-17T20:53:10.936Z',
              buyDate: '2021-03-17T20:48:52.701Z',
              reason: 'Los',
              user: 'Contante'
            },
            {
              _id: '60526cd721bf370708519e32',
              broken: true,
              brokenDate: '2021-03-17T20:55:51.860Z',
              buyDate: '2021-03-17T20:55:29.329Z',
              reason: 'Screen dead',
              user: 'Sonante'
            }
          ],
          thumbnailUrl: 'https://i.ibb.co/NpCxt89/g.png',
          updatedDate: '2021-03-17T20:55:29.329Z'
        }];
      const response = checkIfInObsoletesDb(mockedCommercialProductsArray, mockedObsoletesProductsArray);
      expect(response.length).toBe(9);
    });
  });
});

// ==============================================================

describe('Given the removeRepeatedEntries function ', () => {
  describe('When it is invoked with an array of commercial products with repeated objects', () => {
    test('Then the response should be an array of length', () => {
      const mockedCommercialProductsArray = [
        {
          __v: 0,
          _id: '6043f94863a82a8214997f8e',
          brand: 'Ephone',
          category: 'smartPhones',
          name: 'Ephone Lite Xs',
          price: 276,
          thumbNail_url: 'https://i.ibb.co/pPZPjr7/m.png'
        },
        {
          __v: 0,
          _id: '6043f94863a82a8214997f8f',
          brand: 'Ephone',
          category: 'smartPhones',
          name: 'Ephone Lite NFC',
          price: 143,
          thumbNail_url: 'https://i.ibb.co/KLpHHyP/q.png'
        },
        {
          __v: 0,
          _id: '6043f94863a82a8214997f90',
          brand: 'Ephone',
          category: 'smartPhones',
          name: 'Ephone Lite A21',
          price: 292,
          thumbNail_url: 'https://i.ibb.co/xms5wJL/c.png'
        },
        {
          __v: 0,
          _id: '6043f94863a82a8214997f91',
          brand: 'Ephone',
          category: 'smartPhones',
          name: 'Ephone Pro Xs',
          price: 223,
          thumbNail_url: 'https://i.ibb.co/N9mJfj5/h.png'
        },
        {
          __v: 0,
          _id: '6043f94863a82a8214997f92',
          brand: 'Ephone',
          category: 'smartPhones',
          name: 'Ephone Pro NFC',
          price: 285,
          thumbNail_url: 'https://i.ibb.co/ysFvRGF/j.png'
        },
        {
          __v: 0,
          _id: '6043f94863a82a8214997f93',
          brand: 'Ephone',
          category: 'smartPhones',
          name: 'Ephone Pro A21',
          price: 284,
          thumbNail_url: 'https://i.ibb.co/N9mJfj5/h.png'
        },
        {
          __v: 0,
          _id: '6043f94863a82a8214997f95',
          brand: 'Ephone',
          category: 'smartPhones',
          name: 'Ephone Xp NFC',
          price: 103,
          thumbNail_url: 'https://i.ibb.co/N27W9kP/d.png'
        },
        {
          __v: 0,
          _id: '6043f94863a82a8214997f94',
          brand: 'Ephone',
          category: 'smartPhones',
          name: 'Ephone Xp Xs',
          price: 131,
          thumbNail_url: 'https://i.ibb.co/8cX5HpV/l.png'
        },
        {
          __v: 0,
          _id: '6043f94863a82a8214997f96',
          brand: 'Ephone',
          category: 'smartPhones',
          name: 'Ephone Xp A21',
          price: 142,
          thumbNail_url: 'https://i.ibb.co/2FTZ9dX/k.png'
        },
        {
          __v: 0,
          _id: '6043f94863a82a8214997f8e',
          brand: 'Ephone',
          category: 'smartPhones',
          name: 'Ephone Lite Xs',
          price: 276,
          thumbNail_url: 'https://i.ibb.co/pPZPjr7/m.png'
        },
        {
          __v: 0,
          _id: '6043f94863a82a8214997f8f',
          brand: 'Ephone',
          category: 'smartPhones',
          name: 'Ephone Lite NFC',
          price: 143,
          thumbNail_url: 'https://i.ibb.co/KLpHHyP/q.png'
        },
        {
          __v: 0,
          _id: '6043f94863a82a8214997f90',
          brand: 'Ephone',
          category: 'smartPhones',
          name: 'Ephone Lite A21',
          price: 292,
          thumbNail_url: 'https://i.ibb.co/xms5wJL/c.png'
        },
        {
          __v: 0,
          _id: '6043f94863a82a8214997f91',
          brand: 'Ephone',
          category: 'smartPhones',
          name: 'Ephone Pro Xs',
          price: 223,
          thumbNail_url: 'https://i.ibb.co/N9mJfj5/h.png'
        },
        {
          __v: 0,
          _id: '6043f94863a82a8214997f92',
          brand: 'Ephone',
          category: 'smartPhones',
          name: 'Ephone Pro NFC',
          price: 285,
          thumbNail_url: 'https://i.ibb.co/ysFvRGF/j.png'
        },
        {
          __v: 0,
          _id: '6043f94863a82a8214997f93',
          brand: 'Ephone',
          category: 'smartPhones',
          name: 'Ephone Pro A21',
          price: 284,
          thumbNail_url: 'https://i.ibb.co/N9mJfj5/h.png'
        },
        {
          __v: 0,
          _id: '6043f94863a82a8214997f95',
          brand: 'Ephone',
          category: 'smartPhones',
          name: 'Ephone Xp NFC',
          price: 103,
          thumbNail_url: 'https://i.ibb.co/N27W9kP/d.png'
        },
        {
          __v: 0,
          _id: '6043f94863a82a8214997f94',
          brand: 'Ephone',
          category: 'smartPhones',
          name: 'Ephone Xp Xs',
          price: 131,
          thumbNail_url: 'https://i.ibb.co/8cX5HpV/l.png'
        },
        {
          __v: 0,
          _id: '6043f94863a82a8214997f96',
          brand: 'Ephone',
          category: 'smartPhones',
          name: 'Ephone Xp A21',
          price: 142,
          thumbNail_url: 'https://i.ibb.co/2FTZ9dX/k.png'
        }
      ];
      const response = removeRepeatedEntries(mockedCommercialProductsArray);
      expect(response.length).toBe(9);
    });
  });
});

// ==============================================================

describe('Given the searchPetitionsAxiosConfig function ', () => {
  describe('When it is invoked with a string of three words separated by one space in betweem', () => {
    test('Then the response should be an array of length', () => {
      const searchQueryString = 'Mocked search db parameters';
      const response = searchPetitionsAxiosConfig(searchQueryString);
      expect(response.length).toBe(5);
    });
  });
});
