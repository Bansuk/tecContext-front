import axios from "axios";

const URL = "http://localhost:4000/";

function signUpUser(user) {
    return axios.post(`${URL}sign-up`, user);
}

function signInUser(user) {
    return axios.post(`${URL}sign-in`, user)
}

function getPromotionsProducts() {
    return axios.get(`${URL}promotions`)
}

function getProducts() {
    return axios.get(`${URL}products`)
}


export { 
    signUpUser, 
    signInUser,
    getPromotionsProducts,
    getProducts
};
