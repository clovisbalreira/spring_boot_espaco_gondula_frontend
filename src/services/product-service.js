/* eslint-disable no-template-curly-in-string */
/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable-next-line no-template-curly-in-string */
import { http } from '../api'

export default {

  findAll: () => {
    return http.get('product');
  },

  save: (product) => {
    return http.post('product', product);
  },

  findById: (product) => {
    return http.get('product/${}', {data: product });
  },

  delete: (product) => {
    return http.delete('product/${}',{data: product });
  },

  update: (product) => {
    return http.put ('product', product);
  },
}
