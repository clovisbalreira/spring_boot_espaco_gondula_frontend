/* eslint-disable no-template-curly-in-string */
/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable-next-line no-template-curly-in-string */
import { http } from '../api'

export default {

  findAll: () => {
    return http.get('provider');
  },

  save: (provider) => {
    return http.post('provider', provider);
  },

  findById: (provider) => {
    return http.get('provider/${id}', {data: provider });
  },

  delete: (provider) => {
    return http.delete('provider/${id}',{data: provider });
  },

  update: (provider) => {
    return http.put ('provider', provider);
  },
}
