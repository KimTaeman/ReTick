import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as React from 'react'; // Add React import
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import Events from './pages/Events';
import Login from './pages/Login';
import Profile from './pages/Profile';
import CreateListing from './pages/CreateListing';
import HowItWorks from './pages/HowItWorks';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/events' element={<Events />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/sell' element={<CreateListing />} />
          <Route path='/how-it-works' element={<HowItWorks />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
