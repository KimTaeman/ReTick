import { Axios } from 'axiosInstance';

export const getProfile = async () => {
  const response = await Axios.get('/users/users/current');
  return response.data;
};
