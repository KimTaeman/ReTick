import { Axios } from '../../axiosInstance';

export const getProfile = async () => {
  const response = await Axios.get('/users/users/current');
  return response.data;
};

export const registerUser = async (data: any) => {
  const response = await Axios.post('/users/signup', data);
  return response.data;
};

export const loginUser = async (data: any) => {
  const response = await Axios.post('/users/login', {
    data,
    withCredentials: true,
  });
  return response.data;
};
