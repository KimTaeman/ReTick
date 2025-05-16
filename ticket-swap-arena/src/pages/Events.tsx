
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import SearchBar from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import { Event } from "@/types/types";

// Mock data for events
const mockEvents: Event[] = [
  {
    id: "1",
    name: "Taylor Swift - The Eras Tour",
    venue: "SoFi Stadium",
    city: "Los Angeles, CA",
    date: new Date("2025-08-15"),
    imageUrl: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Pop",
    featured: true
  },
  {
    id: "2",
    name: "Coldplay - Music Of The Spheres World Tour",
    venue: "MetLife Stadium",
    city: "New York, NY",
    date: new Date("2025-07-23"),
    imageUrl: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Rock"
  },
  {
    id: "3",
    name: "Billie Eilish - Hit Me Hard and Soft Tour",
    venue: "Madison Square Garden",
    city: "New York, NY",
    date: new Date("2025-06-10"),
    imageUrl: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Pop"
  },
  {
    id: "4",
    name: "Bad Bunny - Most Wanted Tour",
    venue: "T-Mobile Arena",
    city: "Las Vegas, NV",
    date: new Date("2025-09-05"),
    imageUrl: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Latin"
  },
  {
    id: "5",
    name: "Kendrick Lamar - The Big Steppers Tour",
    venue: "United Center",
    city: "Chicago, IL",
    date: new Date("2025-08-22"),
    imageUrl: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Hip-Hop"
  },
  {
    id: "6",
    name: "Bruno Mars - 24K Magic World Tour",
    venue: "Allegiant Stadium",
    city: "Las Vegas, NV",
    date: new Date("2025-10-15"),
    imageUrl: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Pop"
  },
  {
    id: "7",
    name: "The Weeknd - After Hours Tour",
    venue: "Barclays Center",
    city: "Brooklyn, NY",
    date: new Date("2025-11-01"),
    imageUrl: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "R&B"
  },
  {
    id: "8",
    name: "Dua Lipa - Future Nostalgia Tour",
    venue: "American Airlines Center",
    city: "Dallas, TX",
    date: new Date("2025-09-20"),
    imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Pop"
  },
  {
    id: "9",
    name: "Drake - It's All A Blur Tour",
    venue: "State Farm Arena",
    city: "Atlanta, GA",
    date: new Date("2025-08-30"),
    imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Hip-Hop"
  }
];

// Categories for filtering
const categories = ["All", "Pop", "Rock", "Hip-Hop", "R&B", "Latin", "Electronic", "Country"];

const EventsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  useEffect(() => {
    // In a real app, this would be an API call with search/filter params
    setEvents(mockEvents);
  }, []);
  
  useEffect(() => {
    // Filter events based on search query and category
    let result = [...events];
    
    if (query) {
      const lowerQuery = query.toLowerCase();
      result = result.filter(
        event => 
          event.name.toLowerCase().includes(lowerQuery) || 
          event.venue.toLowerCase().includes(lowerQuery) || 
          event.city.toLowerCase().includes(lowerQuery)
      );
    }
    
    if (selectedCategory !== "All") {
      result = result.filter(event => event.category === selectedCategory);
    }
    
    setFilteredEvents(result);
  }, [events, query, selectedCategory]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-ticket-dark py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {query ? `Results for "${query}"` : "Browse Events"}
            </h1>
            <div className="max-w-2xl">
              <SearchBar />
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8 overflow-x-auto pb-2">
            <div className="flex space-x-2">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={selectedCategory === category ? "bg-purple-600 hover:bg-purple-700" : ""}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          
          {filteredEvents.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No events found</h3>
              <p className="text-gray-600">
                Try adjusting your search or filters to find what you're looking for.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredEvents.map(event => (
                <EventCard
                  key={event.id}
                  event={event}
                  listingCount={Math.floor(Math.random() * 20) + 1}
                  minPrice={Math.floor(Math.random() * 200) + 50}
                />
              ))}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EventsPage;
