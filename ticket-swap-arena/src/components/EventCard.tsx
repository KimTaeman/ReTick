
import { Link } from "react-router-dom";
import { Event } from "@/types/types";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface EventCardProps {
  event: Event;
  listingCount?: number;
  minPrice?: number;
  featured?: boolean;
}

// We're removing the local formatDate function since we're importing it from utils

const EventCard = ({ event, listingCount, minPrice, featured = false }: EventCardProps) => {
  return (
    <Link to={`/events/${event.id}`}>
      <Card className={`overflow-hidden border-0 shadow-md card-hover ${featured ? 'md:col-span-2 md:row-span-2' : ''}`}>
        <div className="relative">
          <img 
            src={event.imageUrl} 
            alt={event.name} 
            className={`w-full object-cover ${featured ? 'h-64 md:h-80' : 'h-48'}`}
          />
          {featured && (
            <div className="absolute top-3 left-3">
              <span className="bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                Featured
              </span>
            </div>
          )}
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
            <div className="flex items-center gap-2 text-white mb-1">
              <Calendar className="h-4 w-4" />
              <span className="text-sm">{formatDate(event.date)}</span>
            </div>
            <h3 className={`text-white font-bold ${featured ? 'text-xl md:text-2xl' : 'text-lg'} line-clamp-2`}>
              {event.name}
            </h3>
          </div>
        </div>
        <CardContent className="p-4">
          <div className="flex justify-between items-center">
            <p className="text-gray-600 text-sm">{event.venue}, {event.city}</p>
            {listingCount !== undefined && (
              <span className="text-sm text-gray-500">
                {listingCount} {listingCount === 1 ? 'listing' : 'listings'}
              </span>
            )}
          </div>
          {minPrice !== undefined && (
            <p className="mt-2 font-semibold text-purple-600">
              From ${minPrice.toFixed(2)}
            </p>
          )}
        </CardContent>
      </Card>
    </Link>
  );
};

export default EventCard;
