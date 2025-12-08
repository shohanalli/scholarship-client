import axios from 'axios';
import React from 'react';

const axiose = axios.create({
baseURL: 'http://localhost:3000',

});
const useAxios = () => {
    return axiose;
};

export default useAxios;