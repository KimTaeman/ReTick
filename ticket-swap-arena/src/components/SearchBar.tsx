import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/events?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className='flex w-full'>
      <div className='relative flex-grow z-20'>
        <Input
          type='text'
          placeholder='Search for concerts, artists, or venues...'
          className='w-full py-6 pl-4 pr-10 rounded-l-md border-r-0 focus-visible:ring-purple-500'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <Button
        type='submit'
        className='bg-purple-600 hover:bg-purple-700 rounded-l-none h-auto px-6 relative right-2 z-0'
      >
        <Search className='h-5 w-5' />
        <span className='ml-2 hidden sm:inline'>Search</span>
      </Button>
    </form>
  );
};

export default SearchBar;
