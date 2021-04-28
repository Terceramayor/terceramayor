import uploadMassiveProductList from './uploadMassiveProductList';

export function createArrayOfProducts(
  category,
  brands,
  models,
  extraInfo,
  priceRange,
  imagesArray
) {
  const productsArray = [];
  let price;
  let imagePossition;

  for (let i = 0; i < brands.length; i += 1) {
    for (let j = 0; j < models.length; j += 1) {
      for (let k = 0; k < extraInfo.length; k += 1) {
        price = Math.floor(Math.random() * (priceRange[1] - priceRange[0]) + priceRange[0]);
        imagePossition = Math.floor(Math.random() * imagesArray.length);
        const newProduct = {

          brand: brands[i],
          name: `${brands[i]} ${models[j]} ${extraInfo[k]}`,
          category,
          price,
          thumbNail_url: imagesArray[imagePossition]

        };

        productsArray.push(newProduct);
      }
    }
  }
  return productsArray;
}

const smartPhonesImgArray = [
  'https://i.ibb.co/5rDw93L/a.png',
  'https://i.ibb.co/d7RZNHY/b.png',
  'https://i.ibb.co/xms5wJL/c.png',
  'https://i.ibb.co/N27W9kP/d.png',
  'https://i.ibb.co/MNJbrPZ/e.png',
  'https://i.ibb.co/dgLFtNH/f.png',
  'https://i.ibb.co/NpCxt89/g.png',
  'https://i.ibb.co/N9mJfj5/h.png',
  'https://i.ibb.co/X3Kj5gb/i.png',
  'https://i.ibb.co/ysFvRGF/j.png',
  'https://i.ibb.co/2FTZ9dX/k.png',
  'https://i.ibb.co/8cX5HpV/l.png',
  'https://i.ibb.co/pPZPjr7/m.png',
  'https://i.ibb.co/Z1gzRfK/n.png',
  'https://i.ibb.co/CsSxypZ/o.png',
  'https://i.ibb.co/52q0mDV/p.png',
  'https://i.ibb.co/KLpHHyP/q.png',
  'https://i.ibb.co/9VrYfp8/r.png'
];

const tvImgArray = [
  'https://i.ibb.co/4PfrfhH/r.png',
  'https://i.ibb.co/4mr6vgx/q.png',
  'https://i.ibb.co/cg7W48L/p.png',
  'https://i.ibb.co/xMbHXPw/o.png',
  'https://i.ibb.co/Pjj1P9N/n.png',
  'https://i.ibb.co/Nsg2yhs/i.png',
  'https://i.ibb.co/dggs3PX/j.png',
  'https://i.ibb.co/Fn5tC0h/k.png',
  'https://i.ibb.co/fpGs7kQ/l.png',
  'https://i.ibb.co/hC3Srtd/m.png',
  'https://i.ibb.co/bF7j7HG/h.png',
  'https://i.ibb.co/zVNkbvg/g.png',
  'https://i.ibb.co/TcZzYpV/f.png',
  'https://i.ibb.co/DMfRxBd/e.png',
  'https://i.ibb.co/vxcJ5M9/d.png',
  'https://i.ibb.co/Jd9kK9y/a.png',
  'https://i.ibb.co/y6R1xZQ/b.png',
  'https://i.ibb.co/7nPv54J/c.png'
];

const lapTopsArray = [
  'https://i.ibb.co/WGzKCns/r.png',
  'https://i.ibb.co/Bjj0Dps/q.png',
  'https://i.ibb.co/LrMwkqp/p.png',
  'https://i.ibb.co/b5knqKf/o.png',
  'https://i.ibb.co/fNf9jS5/n.png',
  'https://i.ibb.co/VpTfy3z/i.png',
  'https://i.ibb.co/YPh7wZz/j.png',
  'https://i.ibb.co/tKC2fnD/k.png',
  'https://i.ibb.co/NLvKrqC/l.png',
  'https://i.ibb.co/9wFm83s/m.png',
  'https://i.ibb.co/RNW9LX4/h.png',
  'https://i.ibb.co/MfRYt8m/g.png',
  'https://i.ibb.co/WPw3wCJ/f.png',
  'https://i.ibb.co/3Bmh1GZ/e.png',
  'https://i.ibb.co/BL9RGJF/d.png',
  'https://i.ibb.co/526ZgVg/b.png',
  'https://i.ibb.co/HzxGktH/a.png',
  'https://i.ibb.co/MGtygrz/c.png'
];

export function uploadScript() {
  const smartphonesCatalog = createArrayOfProducts('smartPhones', ['Ephone', 'MiXiao', 'SumSag'], ['Lite', 'Pro', 'Xp'], ['Xs', 'NFC', 'A21'], [100, 300], smartPhonesImgArray);
  uploadMassiveProductList(smartphonesCatalog);

  const tvsCatalog = createArrayOfProducts('tvs', ['liphips', 'GL', 'Shotiva'], ['32"', '42"', '50"'], ['HD', 'FullHD', '4K'], [200, 700], tvImgArray);
  uploadMassiveProductList(tvsCatalog);

  const laptopsCatalog = createArrayOfProducts('laptops', ['Ism', 'Lonovo', 'PH'], ['AMD', 'Intel - Core i5', 'Intel - Core i7'], ['15"', '17"', '1T'], [1100, 1700], lapTopsArray);
  uploadMassiveProductList(laptopsCatalog);
}
