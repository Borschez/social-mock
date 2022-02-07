import axios from 'axios';
import { usersMock } from './mock';

const axiosObject = axios.create();

usersMock(axiosObject);

export const getAllUsers = () =>
  axiosObject.get('/users').then(response => response.data);
//.then((json) => console.log(json));

export const getUserFriends = (userId) =>
  axiosObject.get(`/friends/${userId}`).then((response) => response.data);
//.then((json) => console.log(json));
