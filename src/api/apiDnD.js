import axios from 'axios';

const urlApi = 'https://api.open5e.com/monsters/';

const apiDnD = async (opt = '') => {
  const response = await axios.get(`${urlApi}${opt}`);

  return response.data;
};

export default apiDnD;
