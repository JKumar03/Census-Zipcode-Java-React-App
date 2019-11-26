import axios from 'axios';

const runQuery = (query) => {
  if (query.method === 'POST') {
    return axios.post(query.endpoint, query.params.file, {})
      .then(resp => resp.data)
      .catch(e => console.log(e));;
  }
  return axios(query.endpoint, { params: query.params })
    .then(resp => resp.data)
    .catch(e => console.log(e));
};

export default runQuery;