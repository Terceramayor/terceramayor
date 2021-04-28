import { queryArrayInterface } from './interfaces';

export function searchPetitionsAxiosConfig (userSearchQuery:string):queryArrayInterface[] {
  const queryArray = [];
  const arrayWords = userSearchQuery.split(' ');
  arrayWords.unshift(userSearchQuery);
  arrayWords.forEach(query => {
    const queryObject = {
      name: {
        $regex: query,
        $options: 'i'
      }
    };

    queryArray.push(queryObject);
  });

  return queryArray;
}
