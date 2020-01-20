import axios from 'axios';

const api = axios.create({
    //Coloque o endereco ip do seu Backend aqui.
    baseURL: 'http://192.168.0.103:3333',
});
export default api;