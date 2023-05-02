import axios from 'axios';

// export const API_KEY = '5f7559859986b78c33527b478befbc82';
export const BASE_URL = 'https://connections-api.herokuapp.com/';

export const postSignUp = (name, email, password) => {
  return axios.post(`${BASE_URL}users/signup`).then(response => response.data);
};
export const postLogIn = (email, password) => {
  return axios.post(`${BASE_URL}users/login`).then(response => response.data);
};
export const postLogOut = token => {
  return axios.post(`${BASE_URL}users/logout`).then(response => response.data);
};
export const getCurrentUser = token => {
  return axios.get(`${BASE_URL}users/current`).then(response => response.data);
};
export const getUserContacts = token => {
  return axios
    .get(
      `
${BASE_URL}contacts`
    )
    .then(response => response.data);
};
export const postUserContacts = (name, number) => {
  return axios.post(`${BASE_URL}contacts`).then(response => response.data);
};
export const deleteUserContact = id => {
  return axios
    .delete(`${BASE_URL}contacts/${id}`)
    .then(response => response.data);
};
export const patchExistingContact = id => {
  return axios
    .patch(`${BASE_URL}contacts/${id}`)
    .then(response => response.data);
};
