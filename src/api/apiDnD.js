import axios from 'axios';
import 'regenerator-runtime/runtime';

const urlApi = 'https://api.open5e.com/monsters/';

const apiDnD = async (opt = '') => {
  const response = await axios.get(`${urlApi}${opt}`);

  return response.data;
};

export default apiDnD;
