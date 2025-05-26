import { useQuery } from '@tanstack/react-query';
import { getAllTickets, getTicketById } from '../api/ticket';

export function useTickets() {
  return useQuery({
    queryKey: ['tickets'],
    queryFn: getAllTickets,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

export function useTicketById(id?: string) {
  return useQuery({
    queryKey: ['ticket', id],
    queryFn: () => getTicketById(id!),
    enabled: !!id,
  });
}
