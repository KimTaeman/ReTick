
import { useState, useEffect } from "react";
import { Event } from "@/types/types";
import EventCard from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data for featured events
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
  }
];

const FeaturedEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  
  useEffect(() => {
    // In a real app, this would be an API call
    setEvents(mockEvents);
  }, []);
  
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Events</h2>
          <Link to="/events">
            <Button variant="ghost" className="text-purple-600 hover:text-purple-700 hover:bg-purple-50">
              View all
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              listingCount={Math.floor(Math.random() * 20) + 1}
              minPrice={Math.floor(Math.random() * 200) + 50}
              featured={event.featured}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
