import axios from 'axios';
import React from 'react';

const axiose = axios.create({
baseURL: 'https://assignment-11-server-theta-pearl.vercel.app',

});
const useAxios = () => {
    return axiose;
};

export default useAxios;