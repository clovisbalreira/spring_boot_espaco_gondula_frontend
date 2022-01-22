/* eslint-disable no-template-curly-in-string */
/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable-next-line no-template-curly-in-string */
import { http } from '../api'

export default {

  findAll: () => {
    return http.get('contractprovider');
  },

  save: (contractprovider) => {
    return http.post('contractprovider', contractprovider);
  },

  findById: (contractprovider) => {
    return http.get('contractprovider/${}', {data: contractprovider });
  },

  delete: (contractprovider) => {
    return http.delete('contractprovider/${}',{data: contractprovider });
  },

  update: (contractprovider) => {
    return http.put ('contractprovider', contractprovider);
  },
}
