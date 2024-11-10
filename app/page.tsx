'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { CalendarIcon, BedDouble, Bath, Wifi, Car, Utensils, MapPin, Star } from 'lucide-react'

const IMAGES = {
  hero: {
    main: '/images/hero/main.jpg',
  },
  rooms: {
    livingRoom: '/images/rooms/living-room.jpg',
    kitchen: '/images/rooms/kitchen.jpg',
    masterBedroom: '/images/rooms/master-bedroom.jpg',
    secondBedroom: '/images/rooms/second-bedroom.jpg',
    bathroom: '/images/rooms/bathroom.jpg',
  },
  exterior: {
    garden: '/images/exterior/garden.jpg',
  }
} as const

export default function Home() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking-section')
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5 pointer-events-none"></div>
      <div className="relative container mx-auto px-4 py-8">
        {/* Header with Hero Image */}
        <header className="mb-12 relative">
          <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://placehold.co/1920x1080/e2e8f0/475569?text=Luxury+Wimbledon+House"
              alt="Luxury 3 Bed House in Central Wimbledon"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40 flex flex-col justify-center items-start text-white p-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Luxury 3 Bed House in Central Wimbledon</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-lg">Entire house • Sleeps 7 • Central Wimbledon</p>
              <Button 
                onClick={scrollToBooking}
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-md transition duration-300 ease-in-out"
              >
                Reserve Now
              </Button>
            </div>
          </div>
        </header>

        {/* Property Details */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Property Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-card text-card-foreground shadow-md">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A beautiful 3 bedroom house in the heart of Wimbledon, perfect for families or groups. 
                  This spacious property features a stunning kitchen/diner, separate living room, and a 
                  private garden. Just a 7-minute walk to Wimbledon station with direct access to central 
                  London, and close to the vibrant Wimbledon Village and Common. The house comfortably 
                  sleeps 7 people with a king-size bed, a double bed, two single beds, and a sofa bed.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card text-card-foreground shadow-md">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Amenities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 gap-3 text-muted-foreground">
                  <li className="flex items-center"><BedDouble className="mr-2 text-primary" /> 3 Bedrooms</li>
                  <li className="flex items-center"><Bath className="mr-2 text-primary" /> 2.5 Bathrooms</li>
                  <li className="flex items-center"><Wifi className="mr-2 text-primary" /> Fast Wifi</li>
                  <li className="flex items-center"><Car className="mr-2 text-primary" /> Street Parking</li>
                  <li className="flex items-center"><Utensils className="mr-2 text-primary" /> Modern Kitchen</li>
                  <li className="flex items-center">🌳 <span className="ml-2">Private Garden</span></li>
                  <li className="flex items-center">🏠 <span className="ml-2">Self Check-in</span></li>
                  <li className="flex items-center">👶 <span className="ml-2">Family Friendly</span></li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Photo Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
              <Image
                src={IMAGES.rooms.livingRoom}
                alt="Bright and spacious living room with comfortable seating"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          </div>
        </section>

        {/* Nearby Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Nearby Attractions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                name: "Wimbledon Station", 
                distance: "7 min walk", 
                image: "https://placehold.co/600x400/e2e8f0/475569?text=Wimbledon+Station",
                description: "Direct trains to central London (17 mins to Waterloo)"
              },
              { 
                name: "Wimbledon Village", 
                distance: "15 min walk", 
                image: "https://placehold.co/600x400/e2e8f0/475569?text=Wimbledon+Village",
                description: "Boutique shops, restaurants, and cafes"
              },
              { 
                name: "Wimbledon Common", 
                distance: "12 min walk", 
                image: "https://placehold.co/600x400/e2e8f0/475569?text=Wimbledon+Common",
                description: "1,140 acres of woodland and green space"
              }
            ].map((attraction, index) => (
              <Card key={index} className="bg-card text-card-foreground shadow-md overflow-hidden">
                <div className="relative h-40">
                  <Image
                    src={attraction.image}
                    alt={attraction.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg text-primary mb-2">{attraction.name}</h3>
                  <p className="text-muted-foreground mb-2">{attraction.distance}</p>
                  <p className="text-sm text-muted-foreground">{attraction.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Reviews Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Guest Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { 
                name: "Sarah M.", 
                rating: 5, 
                date: "March 2024",
                comment: "Beautiful house in a perfect location. The garden was lovely for morning coffee and the kitchen had everything we needed. Easy walk to the station and shops." 
              },
              { 
                name: "James P.", 
                rating: 5, 
                date: "February 2024",
                comment: "Spacious and well-maintained property. Great for our family stay. The host was very responsive and helpful with local recommendations." 
              }
            ].map((review, index) => (
              <Card key={index} className="bg-card text-card-foreground shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mr-4">
                      {review.name[0]}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-primary">{review.name}</h3>
                      <p className="text-sm text-muted-foreground">{review.date}</p>
                      <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-primary fill-primary' : 'text-muted'}`} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{review.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Calendar and Pricing */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Availability and Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-card text-card-foreground shadow-md">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Check Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>
            <Card className="bg-card text-card-foreground shadow-md">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex justify-between">
                    <span>Nightly Rate:</span>
                    <span className="font-semibold">£250</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Weekly Rate (7+ nights):</span>
                    <span className="font-semibold">£1,750</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Cleaning Fee:</span>
                    <span className="font-semibold">£150</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Service Fee:</span>
                    <span className="font-semibold">£100</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Security Deposit:</span>
                    <span className="font-semibold">£350</span>
                  </li>
                  <li className="flex justify-between border-t pt-2 mt-4">
                    <span>Minimum Stay:</span>
                    <span className="font-semibold">3 nights</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Booking Form */}
        <section id="booking-section">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Reserve Your Stay</h2>
          <Card className="bg-card text-card-foreground shadow-md">
            <CardContent className="p-6">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="check-in" className="text-primary">Check-in Date</Label>
                    <div className="flex">
                      <Input id="check-in" type="date" className="border-input" />
                      <Button type="button" variant="outline" size="icon" className="ml-2 text-primary hover:text-primary-foreground hover:bg-primary">
                        <CalendarIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="check-out" className="text-primary">Check-out Date</Label>
                    <div className="flex">
                      <Input id="check-out" type="date" className="border-input" />
                      <Button type="button" variant="outline" size="icon" className="ml-2 text-primary hover:text-primary-foreground hover:bg-primary">
                        <CalendarIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-primary">Full Name</Label>
                    <Input id="name" placeholder="John Doe" className="border-input" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-primary">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="border-input" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-primary">Special Requests (Optional)</Label>
                  <Textarea id="message" placeholder="Any special requests or questions?" className="border-input" />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Request Reservation</Button>
              </form>
            </CardContent>
          </Card>
        </section>

        {/* Map Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Location</h2>
          <Card className="bg-card text-card-foreground shadow-md">
            <CardContent className="p-0">
              <div className="aspect-video relative">
                <Image
                  src="https://placehold.co/1920x1080/e2e8f0/475569?text=Map+of+Central+Wimbledon"
                  alt="Property Location Map"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-card p-2 rounded-md shadow-md">
                  <p className="text-sm text-muted-foreground flex items-center">
                    <MapPin className="mr-2 h-4 w-4 text-primary" />
                    Central Wimbledon, London SW19
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}