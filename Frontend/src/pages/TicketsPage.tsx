import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { TicketCard } from '@/components/TicketCard';
import SearchBar from '@/components/SearchBar';
import { Button } from '@/components/ui/button';
import { useTickets } from '../hooks/use-tickets';

const mockTickets = [
  {
    id: '1',
    venue: 'Madison Square Garden',
    city: 'New York',
    eventDate: '2025-08-15T19:00:00Z',
    eventTime: '7:00 PM',
    category: 'Concert',
    eventName: 'The Weeknd: After Hours Tour',
    numberOfTickets: 2,
    pricePerTicket: 250.0,
    section: 'A',
    row: '12',
    seats: '101, 102',
    ticketType: 'VIP',
    description: 'Floor seats with VIP lounge access',
    imageUrl:
      'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    createdAt: '2025-05-01T10:30:00Z',
    updatedAt: '2025-05-01T10:30:00Z',
    seller: {
      id: 'user1',
      email: 'seller1@example.com',
      name: 'John Doe',
      phone: '+1234567890',
      createdAt: '2025-04-15T08:00:00Z',
      updatedAt: '2025-04-15T08:00:00Z',
    },
  },
  {
    id: '2',
    venue: 'Staples Center',
    city: 'Los Angeles',
    eventDate: '2025-07-23T20:30:00Z',
    eventTime: '8:30 PM',
    category: 'Sports',
    eventName: 'LA Lakers vs Brooklyn Nets',
    numberOfTickets: 4,
    pricePerTicket: 180.5,
    section: '210',
    row: 'B',
    seats: '1-4',
    ticketType: 'Standard',
    description: 'Great view from upper level',
    imageUrl:
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    createdAt: '2025-04-25T14:15:00Z',
    updatedAt: '2025-04-25T14:15:00Z',
    seller: {
      id: 'user2',
      email: 'seller2@example.com',
      name: 'Jane Smith',
      phone: '+1987654321',
      createdAt: '2025-03-10T11:20:00Z',
      updatedAt: '2025-03-10T11:20:00Z',
    },
  },
  {
    id: '3',
    venue: 'MetLife Stadium',
    city: 'New York',
    eventDate: '2025-06-10T20:00:00Z',
    eventTime: '8:00 PM',
    category: 'Concert',
    eventName: 'Taylor Swift - The Eras Tour',
    numberOfTickets: 1,
    pricePerTicket: 450.0,
    section: 'Floor',
    row: '5',
    seats: '23',
    ticketType: 'Platinum',
    description: 'Front row floor seats',
    imageUrl:
      'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    createdAt: '2025-04-10T09:45:00Z',
    updatedAt: '2025-04-10T09:45:00Z',
    seller: {
      id: 'user3',
      email: 'seller3@example.com',
      name: 'Mike Johnson',
      phone: '+1555123456',
      createdAt: '2025-02-20T07:30:00Z',
      updatedAt: '2025-02-20T07:30:00Z',
    },
  },
  {
    id: '4',
    venue: 'T-Mobile Arena',
    city: 'Las Vegas',
    eventDate: '2025-09-05T21:00:00Z',
    eventTime: '9:00 PM',
    category: 'Concert',
    eventName: 'Bad Bunny - Most Wanted Tour',
    numberOfTickets: 3,
    pricePerTicket: 175.0,
    section: '100',
    row: 'D',
    seats: '8-10',
    ticketType: 'Standard',
    description: 'Great lower bowl seats',
    imageUrl:
      'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    createdAt: '2025-05-05T12:20:00Z',
    updatedAt: '2025-05-05T12:20:00Z',
    seller: {
      id: 'user4',
      email: 'seller4@example.com',
      name: 'Sarah Williams',
      phone: '+1555987654',
      createdAt: '2025-01-15T10:10:00Z',
      updatedAt: '2025-01-15T10:10:00Z',
    },
  },
];

// Categories for filtering (aligned with your mock data)
const categories = ['All', 'Concert', 'Sports', 'Theater', 'Comedy', 'Family'];

const TicketsPage = () => {
  const { data: tickets = [], isLoading, error } = useTickets();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  // const [tickets, setTickets] = useState(mockTickets);
  const [filteredTickets, setFilteredTickets] = useState(mockTickets);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // useEffect(() => {
  //   // In a real app, this would be an API call with search/filter params
  //   setTickets(mockTickets);
  // }, []);

  useEffect(() => {
    // Filter tickets based on search query and category
    let result = [...tickets];

    if (query) {
      const lowerQuery = query.toLowerCase();
      result = result.filter(
        (ticket) =>
          ticket.eventName.toLowerCase().includes(lowerQuery) ||
          ticket.venue.toLowerCase().includes(lowerQuery) ||
          ticket.city.toLowerCase().includes(lowerQuery)
      );
    }

    if (selectedCategory !== 'All') {
      result = result.filter((ticket) => ticket.category === selectedCategory);
    }

    setFilteredTickets(result);
  }, [tickets, query, selectedCategory]);

  console.log('Tickets data:', tickets);
  if (isLoading) return <div>Loading tickets...</div>;
  if (error) return <div>Error loading tickets.</div>;

  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />

      <main className='flex-grow'>
        <div className='bg-ticket-dark py-10'>
          <div className='container mx-auto px-4'>
            <h1 className='text-3xl md:text-4xl font-bold text-white mb-6'>
              {query ? `Results for "${query}"` : 'Browse Tickets'}
            </h1>
            <div className='max-w-2xl'>
              <SearchBar />
            </div>
          </div>
        </div>

        <div className='container mx-auto px-4 py-8'>
          <div className='mb-8 overflow-x-auto pb-2'>
            <div className='flex space-x-2'>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? 'default' : 'outline'
                  }
                  className={
                    selectedCategory === category
                      ? 'bg-purple-600 hover:bg-purple-700'
                      : ''
                  }
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {filteredTickets.length === 0 ? (
            <div className='text-center py-12'>
              <h3 className='text-xl font-semibold mb-2'>No tickets found</h3>
              <p className='text-gray-600'>
                Try adjusting your search or filters to find what you're looking
                for.
              </p>
            </div>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {filteredTickets.map((ticket) => (
                <TicketCard key={ticket.id} ticket={ticket} />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TicketsPage;
