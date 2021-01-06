import axios from 'axios';

const urlApi = 'https://api.open5e.com/monsters/?limit=1500';

const apiDnD = async () => {
  const response = await axios.get(urlApi);

  return response.data;
};

export default apiDnD;
