
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const CreateListing = () => {
  const [step, setStep] = useState(1);
  
  const nextStep = () => {
    setStep(step + 1);
    window.scrollTo(0, 0);
  };
  
  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">Sell Your Tickets</h1>
            <p className="text-gray-600 mb-8">
              List your tickets on TicketSwap and connect with fans looking for exactly what you have.
            </p>
            
            {/* Step Indicator */}
            <div className="flex items-center mb-8">
              <div className={`flex items-center justify-center h-8 w-8 rounded-full ${step >= 1 ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}>
                1
              </div>
              <div className={`h-1 flex-1 mx-1 ${step >= 2 ? 'bg-purple-600' : 'bg-gray-200'}`}></div>
              <div className={`flex items-center justify-center h-8 w-8 rounded-full ${step >= 2 ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}>
                2
              </div>
              <div className={`h-1 flex-1 mx-1 ${step >= 3 ? 'bg-purple-600' : 'bg-gray-200'}`}></div>
              <div className={`flex items-center justify-center h-8 w-8 rounded-full ${step >= 3 ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}>
                3
              </div>
            </div>
            {step === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle>Step 1: Choose the Event</CardTitle>
                  <CardDescription>Select the event for which you're selling tickets</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="event-search">Search for the event</Label>
                    <Input 
                      id="event-search" 
                      placeholder="e.g., Taylor Swift, Coldplay, etc." 
                    />
                  </div>
                  
                  <div>
                    <Label>Popular Events</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                      {["Taylor Swift - The Eras Tour", "Coldplay - Music Of The Spheres", "Bad Bunny - Most Wanted Tour", "Billie Eilish - Hit Me Hard and Soft Tour"].map((event) => (
                        <Button 
                          key={event} 
                          variant="outline" 
                          className="justify-start h-auto py-3 font-normal text-left"
                        >
                          {event}
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Or add an event manually</Label>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="event-name">Event name</Label>
                        <Input id="event-name" placeholder="e.g., Taylor Swift - The Eras Tour" />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="event-venue">Venue</Label>
                          <Input id="event-venue" placeholder="e.g., Madison Square Garden" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="event-city">City</Label>
                          <Input id="event-city" placeholder="e.g., New York" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="event-date">Date</Label>
                          <Input id="event-date" type="date" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="event-time">Time</Label>
                          <Input id="event-time" type="time" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="event-category">Category</Label>
                        <Select>
                          <SelectTrigger id="event-category">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pop">Pop</SelectItem>
                            <SelectItem value="rock">Rock</SelectItem>
                            <SelectItem value="hip-hop">Hip-Hop</SelectItem>
                            <SelectItem value="rnb">R&B</SelectItem>
                            <SelectItem value="country">Country</SelectItem>
                            <SelectItem value="electronic">Electronic</SelectItem>
                            <SelectItem value="classical">Classical</SelectItem>
                            <SelectItem value="jazz">Jazz</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button onClick={nextStep} className="bg-purple-600 hover:bg-purple-700">
                      Continue
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
            
            {/* Step 2: Ticket Details */}
            {step === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle>Step 2: Ticket Details</CardTitle>
                  <CardDescription>Tell us about your tickets</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="ticket-quantity">Number of tickets</Label>
                      <Input id="ticket-quantity" type="number" min="1" defaultValue="1" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ticket-price">Price per ticket ($)</Label>
                      <Input id="ticket-price" type="number" min="0" step="0.01" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="ticket-section">Section</Label>
                    <Input id="ticket-section" placeholder="e.g., 101, VIP, General Admission" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="ticket-row">Row</Label>
                      <Input id="ticket-row" placeholder="e.g., A, 10" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ticket-seat">Seat(s)</Label>
                      <Input id="ticket-seat" placeholder="e.g., 1-2 or 15, 16" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="ticket-type">Ticket Type</Label>
                    <Select>
                      <SelectTrigger id="ticket-type">
                        <SelectValue placeholder="Select ticket type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mobile">Mobile Ticket</SelectItem>
                        <SelectItem value="print">Print-at-Home</SelectItem>
                        <SelectItem value="physical">Physical Ticket</SelectItem>
                        <SelectItem value="box-office">Box Office Pickup</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="ticket-description">Additional information (optional)</Label>
                    <Textarea 
                      id="ticket-description" 
                      placeholder="Add any details about your tickets that might be helpful for buyers."
                      className="min-h-[100px]"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="ticket-upload">Upload ticket images (optional)</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                      <input type="file" id="ticket-upload" className="hidden" />
                      <label htmlFor="ticket-upload" className="cursor-pointer">
                        <div className="space-y-2">
                          <div className="flex justify-center">
                            <svg className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                          </div>
                          <p className="text-sm text-gray-600">
                            Click to upload or drag and drop
                          </p>
                          <p className="text-xs text-gray-500">
                            PNG, JPG, GIF up to 5MB
                          </p>
                        </div>
                      </label>
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <Button variant="outline" onClick={prevStep}>
                      Back
                    </Button>
                    <Button onClick={nextStep} className="bg-purple-600 hover:bg-purple-700">
                      Continue
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
            
            {/* Step 3: Review & Listing */}
            {step === 3 && (
              <Card>
                <CardHeader>
                  <CardTitle>Step 3: Review & Confirm</CardTitle>
                  <CardDescription>Review your listing details before publishing</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="border rounded-md p-4">
                    <h3 className="font-semibold text-lg mb-4">Event Details</h3>
                    <div className="grid grid-cols-3 gap-y-2">
                      <div className="text-gray-600">Event:</div>
                      <div className="col-span-2 font-medium">Taylor Swift - The Eras Tour</div>
                      
                      <div className="text-gray-600">Venue:</div>
                      <div className="col-span-2 font-medium">SoFi Stadium</div>
                      
                      <div className="text-gray-600">Location:</div>
                      <div className="col-span-2 font-medium">Los Angeles, CA</div>
                      
                      <div className="text-gray-600">Date & Time:</div>
                      <div className="col-span-2 font-medium">August 15, 2025 at 7:00 PM</div>
                    </div>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="font-semibold text-lg mb-4">Ticket Details</h3>
                    <div className="grid grid-cols-3 gap-y-2">
                      <div className="text-gray-600">Quantity:</div>
                      <div className="col-span-2 font-medium">2 tickets</div>
                      
                      <div className="text-gray-600">Price per ticket:</div>
                      <div className="col-span-2 font-medium">$150.00</div>
                      
                      <div className="text-gray-600">Section:</div>
                      <div className="col-span-2 font-medium">B</div>
                      
                      <div className="text-gray-600">Row:</div>
                      <div className="col-span-2 font-medium">15</div>
                      
                      <div className="text-gray-600">Seats:</div>
                      <div className="col-span-2 font-medium">22, 23</div>
                      
                      <div className="text-gray-600">Ticket Type:</div>
                      <div className="col-span-2 font-medium">Mobile Ticket</div>
                    </div>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="font-semibold text-lg mb-4">Pricing Summary</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Ticket Price (2 x $150.00)</span>
                        <span className="font-medium">$300.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">TicketSwap Fee (5%)</span>
                        <span className="font-medium">$15.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Payment Processing Fee (3%)</span>
                        <span className="font-medium">$9.00</span>
                      </div>
                      <div className="border-t border-gray-200 pt-2 mt-2 flex justify-between">
                        <span className="font-semibold">You'll Receive</span>
                        <span className="font-bold text-lg">$276.00</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <Button variant="outline" onClick={prevStep}>
                      Back
                    </Button>
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      Publish Listing
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CreateListing;
