import axios from 'axios';

export default async function letsFetch(url) {
  return axios.get(url, {
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer BQB9pg-0562s78uecDTSbcUpjOuM7o3QfmY4bMsSVrdSWx6THxLUhKm5YW6-eDy0f0ER1ZsbE_5_suz0-rDSaDwuBBtnXtfmXgRAqb7OuezgYv3nhFJrW22Ylg5r8EaByeQsBn0x',
      'Content-Type': 'application/json'
    }

  });
}
