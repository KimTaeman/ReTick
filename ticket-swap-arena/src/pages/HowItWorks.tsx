import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  ShieldCheck,
  MessageSquare,
  CreditCard,
  Ticket,
  ArrowRight,
  BadgeCheck,
  Users,
  Handshake,
  CalendarCheck,
} from 'lucide-react';
import TestimonialCard from '@/components/TestimonialCard';
import FAQItem from '@/components/FAQItems';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState('buyers');
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />

      <main className='flex-grow'>
        {/* Hero Section */}
        <section className='bg-gradient-to-r from-purple-50 to-violet-50 py-16 md:py-20'>
          <div className='container mx-auto px-4 text-center'>
            <h1 className='text-3xl md:text-4xl font-bold mb-4'>
              How ReTick Works
            </h1>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              The safest, fairest way to buy and sell event tickets directly
              with other fans. No scalpers. No hidden fees. Just real fans
              helping each other out.
            </p>
          </div>
        </section>

        {/* Buyer/Seller Tabs */}
        <section className='py-12 md:py-16'>
          <div className='container mx-auto px-4'>
            <div className='flex justify-center mb-12'>
              <div className='inline-flex bg-gray-100 p-1 rounded-lg'>
                <button
                  className={`px-6 py-2 rounded-md font-medium ${
                    activeTab === 'buyers'
                      ? 'bg-white shadow-sm'
                      : 'text-gray-600'
                  }`}
                  onClick={() => setActiveTab('buyers')}
                >
                  For Buyers
                </button>
                <button
                  className={`px-6 py-2 rounded-md font-medium ${
                    activeTab === 'sellers'
                      ? 'bg-white shadow-sm'
                      : 'text-gray-600'
                  }`}
                  onClick={() => setActiveTab('sellers')}
                >
                  For Sellers
                </button>
              </div>
            </div>

            {/* Conditional rendering based on active tab */}
            {activeTab === 'buyers' ? <BuyerSteps /> : <SellerSteps />}
          </div>
        </section>

        {/* Trust & Safety */}
        <section className='py-12 md:py-16 bg-gray-50'>
          <div className='container mx-auto px-4'>
            <div className='text-center mb-12'>
              <h2 className='text-2xl md:text-3xl font-bold mb-4'>
                Our Safety Features
              </h2>
              <p className='text-gray-600 max-w-2xl mx-auto'>
                We've built multiple layers of protection to give you peace of
                mind.
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
              <div className='bg-white p-6 rounded-xl shadow-sm'>
                <div className='w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4'>
                  <BadgeCheck className='h-6 w-6 text-green-600' />
                </div>
                <h3 className='text-lg font-semibold mb-2'>Verified Users</h3>
                <p className='text-gray-600 text-sm'>
                  All users must verify their identity before buying or selling.
                </p>
              </div>

              <div className='bg-white p-6 rounded-xl shadow-sm'>
                <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4'>
                  <CreditCard className='h-6 w-6 text-blue-600' />
                </div>
                <h3 className='text-lg font-semibold mb-2'>Secure Payments</h3>
                <p className='text-gray-600 text-sm'>
                  Funds are held securely until ticket transfer is confirmed.
                </p>
              </div>

              <div className='bg-white p-6 rounded-xl shadow-sm'>
                <div className='w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4'>
                  <Users className='h-6 w-6 text-orange-600' />
                </div>
                <h3 className='text-lg font-semibold mb-2'>Fan Community</h3>
                <p className='text-gray-600 text-sm'>
                  Real reviews and ratings for every buyer and seller.
                </p>
              </div>

              <div className='bg-white p-6 rounded-xl shadow-sm'>
                <div className='w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4'>
                  <ShieldCheck className='h-6 w-6 text-red-600' />
                </div>
                <h3 className='text-lg font-semibold mb-2'>Guarantee</h3>
                <p className='text-gray-600 text-sm'>
                  Full refund if tickets aren't as described.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className='py-12 md:py-16'>
          <div className='container mx-auto px-4 max-w-4xl'>
            <h2 className='text-2xl md:text-3xl font-bold mb-8 text-center'>
              Frequently Asked Questions
            </h2>

            <div className='space-y-4'>
              <FAQItem
                question='How do I know the tickets are real?'
                answer='All sellers must verify their tickets before listing. We also hold payment until you confirm the tickets are valid.'
              />
              <FAQItem
                question='Why are prices capped at face value?'
                answer="We're committed to fair access to events. No scalping allowed - just fans helping fans."
              />
              <FAQItem
                question='What payment methods do you accept?'
                answer='We accept all major credit cards and digital wallets through our secure payment processor.'
              />
              <FAQItem
                question='How do digital ticket transfers work?'
                answer='For mobile tickets, we facilitate secure transfer through official team/app APIs when available.'
              />
              <FAQItem
                question='What if my event is canceled?'
                answer="If the event is officially canceled, you'll receive a full refund from the seller."
              />
            </div>

            <div className='mt-12 text-center'>
              <Link to='/contact'>
                <Button variant='outline'>
                  Still have questions? Contact us
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-12 bg-gradient-to-r from-purple-600 to-violet-500'>
          <div className='container mx-auto px-4 text-center text-white'>
            <h2 className='text-2xl md:text-3xl font-bold mb-4'>
              Ready to get started?
            </h2>
            <p className='text-lg mb-8 max-w-2xl mx-auto'>
              Join thousands of fans buying and selling tickets the fair way.
            </p>
            <div className='flex flex-col sm:flex-row justify-center gap-4'>
              <Link to='/signup'>
                <Button className='bg-white text-purple-600 hover:bg-gray-100'>
                  Sign Up Free
                </Button>
              </Link>
              <Link to='/events'>
                <Button
                  variant='outline'
                  className='text-white border-white hover:bg-white/10'
                >
                  Browse Events
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

// Buyer Steps Component
const BuyerSteps = () => (
  <>
    <div className='grid md:grid-cols-3 gap-8 mb-16'>
      <div className='bg-white p-6 rounded-xl shadow-sm border'>
        <div className='w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4'>
          <span className='text-purple-600 font-bold'>1</span>
        </div>
        <h3 className='text-xl font-semibold mb-3'>Find Your Event</h3>
        <p className='text-gray-600'>
          Browse concerts, sports games, and shows in your area. Filter by date,
          price, or venue.
        </p>
      </div>

      <div className='bg-white p-6 rounded-xl shadow-sm border'>
        <div className='w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4'>
          <span className='text-purple-600 font-bold'>2</span>
        </div>
        <h3 className='text-xl font-semibold mb-3'>Connect Securely</h3>
        <p className='text-gray-600'>
          Message the seller directly through our platform to ask questions
          before buying.
        </p>
      </div>

      <div className='bg-white p-6 rounded-xl shadow-sm border'>
        <div className='w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4'>
          <span className='text-purple-600 font-bold'>3</span>
        </div>
        <h3 className='text-xl font-semibold mb-3'>Complete Purchase</h3>
        <p className='text-gray-600'>
          Pay through our secure system. Your money is protected until you
          receive the tickets.
        </p>
      </div>
    </div>

    <div className='text-center'>
      <Link to='/events'>
        <Button className='bg-purple-600 hover:bg-purple-700'>
          Browse Available Tickets
          <ArrowRight className='ml-2 h-4 w-4' />
        </Button>
      </Link>
    </div>
  </>
);

// Seller Steps Component
const SellerSteps = () => (
  <>
    <div className='grid md:grid-cols-3 gap-8 mb-16'>
      <div className='bg-white p-6 rounded-xl shadow-sm border'>
        <div className='w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4'>
          <span className='text-purple-600 font-bold'>1</span>
        </div>
        <h3 className='text-xl font-semibold mb-3'>List Your Tickets</h3>
        <p className='text-gray-600'>
          Create a listing with event details, seat information, and photos. Set
          your price at or below face value.
        </p>
      </div>

      <div className='bg-white p-6 rounded-xl shadow-sm border'>
        <div className='w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4'>
          <span className='text-purple-600 font-bold'>2</span>
        </div>
        <h3 className='text-xl font-semibold mb-3'>Connect with Buyers</h3>
        <p className='text-gray-600'>
          Answer buyer questions through our secure messaging system. Provide
          any additional verification they need.
        </p>
      </div>

      <div className='bg-white p-6 rounded-xl shadow-sm border'>
        <div className='w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4'>
          <span className='text-purple-600 font-bold'>3</span>
        </div>
        <h3 className='text-xl font-semibold mb-3'>Get Paid Securely</h3>
        <p className='text-gray-600'>
          Once the buyer confirms receipt, funds are released to you. No waiting
          for checks or worrying about bounced payments.
        </p>
      </div>
    </div>

    <div className='text-center'>
      <Link to='/sell'>
        <Button className='bg-purple-600 hover:bg-purple-700'>
          Start Selling Tickets
          <ArrowRight className='ml-2 h-4 w-4' />
        </Button>
      </Link>
    </div>
  </>
);

export default HowItWorks;
