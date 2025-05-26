import { Axios } from '../../axiosInstance';

export const getProfile = async () => {
  const response = await Axios.get('/users/current');
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
export const signupUser = async ({
  email,
  password,
  name,
  phone,
}: {
  email: string;
  password: string;
  name: string;
  phone?: string;
}) => {
  const response = await Axios.post('/users/signup', {
    email,
    password,
    name,
    phone,
  });
  return response.data;
};
