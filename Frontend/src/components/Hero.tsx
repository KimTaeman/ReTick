import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SearchBar from '@/components/SearchBar';

const Hero = () => {
  return (
    <div className='relative overflow-hidden bg-ticket-dark'>
      <div className='absolute inset-0 bg-gradient-to-br from-purple-600/20 to-purple-900/40' />

      <div
        className='absolute inset-0 opacity-10'
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className='container mx-auto px-4 py-16 lg:py-24 relative z-10'>
        <div className='max-w-3xl mx-auto text-center'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight'>
            Get Tickets to Your{' '}
            <span className='text-gradient'>Favorite Events</span>
          </h1>
          <p className='text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto'>
            The safest and most transparent marketplace to buy and sell concert
            tickets directly from fellow fans.
          </p>

          <div className='max-w-2xl mx-auto mb-10'>
            <SearchBar />
          </div>

          <div className='flex flex-wrap gap-4 justify-center'>
            <Link to='/tickets'>
              <Button size='lg' className='bg-teal-600 hover:bg-teal-700 px-8'>
                Browse Tickets
              </Button>
            </Link>
            <Link to='/sell'>
              <Button
                size='lg'
                className='bg-purple-600 hover:bg-purple-700 px-8'
              >
                Sell Tickets
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
