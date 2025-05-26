import { Axios } from '../../axiosInstance';

export const getAllTickets = async () => {
  const response = await Axios.get('/tickets');
  return response.data.data;
};

export const getTicketById = async (id: string) => {
  const response = await Axios.get(`/tickets/${id}`);
  return response.data.data;
};

export const createTicket = async (data: any) => {
  const response = await Axios.post('/tickets', data);
  return response.data;
};
