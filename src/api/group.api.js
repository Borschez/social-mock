import axios from 'axios';
import { groupsMock } from './mock';

const axiosObject = axios.create();

groupsMock(axiosObject);

export const getAllGroups = () =>
  axiosObject.get('/groups').then((response) => response.data);
//.then((json) => console.log(json));

export const getGroupMembers = (groupId) =>
  axiosObject.get(`/group/${groupId}/members`).then((response) => response.data);
//.then((json) => console.log(json));
