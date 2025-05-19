
export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  createdAt: Date;
  rating?: number;
}

export interface Event {
  id: string;
  name: string;
  venue: string;
  city: string;
  date: Date;
  imageUrl: string;
  category: string;
  featured?: boolean;
}

export interface Ticket {
  id: string;
  eventId: string;
  sellerId: string;
  price: number;
  section: string;
  row: string;
  seat?: string;
  quantity: number;
  listingDate: Date;
  status: 'available' | 'pending' | 'sold';
}

export interface TicketListing extends Ticket {
  event: Event;
  seller: User;
}
