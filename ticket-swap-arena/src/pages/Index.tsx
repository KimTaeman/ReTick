
import Hero from "@/components/Hero";
import FeaturedEvents from "@/components/FeaturedEvents";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, MessageSquare, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <FeaturedEvents />
        
        {/* How It Works Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">How TicketSwap Works</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The safest way to buy and sell tickets with other fans. No middleman, no unnecessary fees.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Fair Pricing</h3>
                <p className="text-gray-600 mb-4">
                  Tickets are sold at face value or lower. No inflated prices or hidden fees.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Secure Transactions</h3>
                <p className="text-gray-600 mb-4">
                  Our secure payment system ensures you get what you paid for.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Direct Communication</h3>
                <p className="text-gray-600 mb-4">
                  Chat directly with the seller to ask questions before purchasing.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <Link to="/how-it-works">
                <Button variant="outline" className="text-purple-600 border-purple-600 hover:bg-purple-50">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-purple-600 to-violet-500 rounded-2xl p-8 md:p-12 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to sell your tickets?</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Have tickets you can't use? List them on TicketSwap and connect with fans looking for exactly what you have.
              </p>
              <Link to="/sell">
                <Button size="lg" variant="outline" className="bg-white text-purple-600 border-white hover:bg-purple-50">
                  Sell Your Tickets
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
