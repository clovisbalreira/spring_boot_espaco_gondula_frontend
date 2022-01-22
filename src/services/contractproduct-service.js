/* eslint-disable no-template-curly-in-string */
/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable-next-line no-template-curly-in-string */
import { http } from '../api'

export default {

  findAll: () => {
    return http.get('contractproduct');
  },

  save: (contractproduct) => {
    return http.post('contractproduct', contractproduct);
  },

  findById: (contractproduct) => {
    return http.get('contractproduct/${}', {data: contractproduct });
  },

  delete: (contractproduct) => {
    return http.delete('contractproduct/${}',{data: contractproduct });
  },

  update: (contractproduct) => {
    return http.put ('contractproduct', contractproduct);
  },
}
