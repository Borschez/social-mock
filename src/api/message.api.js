import axios from 'axios';
import { messagesMock } from './mock';

const axiosObject = axios.create();

messagesMock(axiosObject);

export const getUserMessages = (userId) =>
  axiosObject.get(`/messages/from/${userId}`).then((response) => response.data);
