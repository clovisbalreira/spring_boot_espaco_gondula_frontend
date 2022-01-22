/* eslint-disable no-template-curly-in-string */
/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable-next-line no-template-curly-in-string */
import { http } from '../api'

export default {

  findAll: () => {
    return http.get('marketplace');
  },

  save: (marketplace) => {
    return http.post('marketplace', marketplace);
  },

  findById: (marketplace) => {
    return http.get('marketplace/${}', {data: marketplace });
  },

  delete: (marketplace) => {
    return http.delete('marketplace/${}',{data: marketplace });
  },

  update: (marketplace) => {
    return http.put ('marketplace', marketplace);
  },
}
