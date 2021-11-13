import axios from "axios";

const URL = "http://localhost:4000/";

function signUpUser(user) {
    return axios.post(`${URL}sign-up`, user);
}

function signInUser(user) {
    return axios.post(`${URL}sign-in`, user);
}

function getPromotionsProducts() {
    return axios.get(`${URL}promotions`);
}

function getProducts() {
    return axios.get(`${URL}products`);
}

function getCategories() {
    return axios.get(`${URL}categories`)
}

function getProductsByCategories(categoryId) {
    return axios.get(`${URL}categories/${categoryId}`)
}

function getProductInfo(id) {
    return axios.get(`${URL}product/${id}`);
}

function postCartItem(body) {
    return axios.post(`${URL}cart`, body);
}

export {
    signUpUser,
    signInUser,
    getPromotionsProducts,
    getProducts,  
    getCategories,
    getProductsByCategories,
    getProductInfo,
    postCartItem,
};
