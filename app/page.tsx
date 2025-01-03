'use client'







import { useState } from 'react'







import Image from 'next/image'







import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'







import { Button } from '@/components/ui/button'







import { Input } from '@/components/ui/input'







import { Label } from '@/components/ui/label'







import { Textarea } from '@/components/ui/textarea'







import { BedDouble, Bath, Wifi, Car, CookingPot, MapPin, Star, X, ChevronLeft, ChevronRight } from 'lucide-react'






import { toast } from 'sonner'















const IMAGES = {







  hero: {







    main: '/images/rooms/living-room.JPG',







  },







  rooms: {







    livingRoom: '/images/rooms/living-room.JPG',







    kitchen: '/images/rooms/kitchen.jpeg',







    masterBedroom: '/images/rooms/master-bedroom.jpeg',







    secondBedroom: '/images/rooms/second-bedroom.jpeg',







    thirdBedroom: '/images/rooms/third-bedroom.jpg',







    bathroom: '/images/rooms/bathroom.jpeg',







  },







  exterior: {







    garden: '/images/exterior/garden.jpeg',







  },







  attractions: {







    station: '/images/attractions/station.jpg',







    village: '/images/attractions/village.jpg',







    common: '/images/attractions/common.jpg',







    theatre: '/images/attractions/theatre.jpg',







    tennis: '/images/attractions/tennis.jpg',







    temple: '/images/attractions/temple.jpg',







  }







} as const















type GalleryImage = {







  src: string







  alt: string







}















export default function Home() {







  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)







  const [mainImage, setMainImage] = useState<GalleryImage>({







    src: IMAGES.rooms.livingRoom,







    alt: "Bright and spacious living room with comfortable seating"







  })















  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {







    e.preventDefault()







    const bookingSection = document.getElementById('booking-section')







    bookingSection?.scrollIntoView({ behavior: 'smooth' })







  }















  const handleQuickContact = async (e: React.FormEvent<HTMLFormElement>) => {







    e.preventDefault()







    const formData = new FormData(e.currentTarget)







    const data = {







      email: formData.get('email'),







      message: formData.get('message')







    }















    try {







      const response = await fetch('/api/contact', {







        method: 'POST',







        headers: { 'Content-Type': 'application/json' },







        body: JSON.stringify(data),







      })















      if (!response.ok) throw new Error('Failed to send message')







      toast.success('Message sent successfully! We will get back to you soon.')







      e.currentTarget.reset()







    } catch {







      toast.error('Failed to send message. Please try again.')







    }







  }















  const handleReservation = async (e: React.FormEvent<HTMLFormElement>) => {







    e.preventDefault()







    const formData = new FormData(e.currentTarget)







    const data = {







      name: formData.get('name'),







      email: formData.get('email'),







      phone: formData.get('phone'),







      checkIn: formData.get('checkIn'),







      checkOut: formData.get('checkOut'),







      message: formData.get('message')







    }















    try {







      const response = await fetch('/api/contact', {







        method: 'POST',







        headers: { 'Content-Type': 'application/json' },







        body: JSON.stringify(data),







      })















      if (!response.ok) throw new Error('Failed to send reservation request')







      toast.success('Reservation request sent! We will get back to you soon.')







      e.currentTarget.reset()







    } catch {







      toast.error('Failed to send reservation request. Please try again.')







    }







  }















  const galleryImages = [







    {







      src: IMAGES.rooms.livingRoom,







      alt: "Bright and spacious living room with comfortable seating"







    },







    {







      src: IMAGES.rooms.kitchen,







      alt: "Modern fully equipped kitchen"







    },







    {







      src: IMAGES.rooms.masterBedroom,







      alt: "Master bedroom with king-size bed"







    },







    {







      src: IMAGES.rooms.secondBedroom,







      alt: "Second bedroom with double bed"







    },







    {







      src: IMAGES.rooms.thirdBedroom,







      alt: "Third bedroom with twin beds"







    },







    {







      src: IMAGES.rooms.bathroom,







      alt: "Modern bathroom with shower"







    }







  ]







  const handleNavigateGallery = (direction: 'prev' | 'next') => {







    if (!selectedImage) return







    const currentIndex = galleryImages.findIndex(img => img.src === selectedImage.src)







    let newIndex = direction === 'next' 







      ? (currentIndex + 1) % galleryImages.length 







      : (currentIndex - 1 + galleryImages.length) % galleryImages.length






    setSelectedImage(galleryImages[newIndex])







  }















  return (







    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">







      <div className="relative container mx-auto px-4 py-8">







        {/* Header with Hero Image */}







        <header className="mb-12 relative">







          <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-lg">







            <Image







              src={IMAGES.hero.main}







              alt="Luxury 3 Bed House in Central Wimbledon"







              fill







              className="object-cover"







              priority







            />







            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40 flex flex-col justify-center px-8">







              <div className="max-w-4xl">







                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Luxury 3 Bed House in Central Wimbledon</h1>







                <p className="text-xl md:text-2xl mb-6 text-white">Entire house • Sleeps 7 • Central Wimbledon</p>







                







                {/* Quick Date Selector */}







                <Card className="bg-white/95 backdrop-blur-sm w-full max-w-2xl">







                  <CardContent className="p-4">







                    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">







                      <div className="flex-1">







                        <Label htmlFor="hero-check-in">Check-in</Label>







                        <Input 







                          id="hero-check-in" 







                          name="checkIn" 







                          type="date" 







                          required 







                          className="border-input" 







                        />







                      </div>







                      <div className="flex-1">







                        <Label htmlFor="hero-check-out">Check-out</Label>







                        <Input 







                          id="hero-check-out" 







                          name="checkOut" 







                          type="date" 







                          required 







                          className="border-input" 







                        />







                      </div>







                      <div className="flex items-end">







                        <Button 







                          type="submit" 







                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"







                        >







                          Check Availability







                        </Button>







                      </div>







                    </form>







                  </CardContent>







                </Card>







              </div>







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







                  <li className="flex items-center"><Bath className="mr-2 text-primary" /> 2 Bathrooms</li>







                  <li className="flex items-center"><Wifi className="mr-2 text-primary" /> Fast Wifi</li>







                  <li className="flex items-center"><Car className="mr-2 text-primary" /> Street Parking</li>







                  <li className="flex items-center"><CookingPot className="mr-2 text-primary" /> Modern Kitchen</li>







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







          <div className="flex flex-col md:flex-row gap-4">







            {/* Main large image on the left */}







            <div className="md:w-2/3 relative aspect-[4/3]">







              <div 







                className="relative w-full h-full rounded-lg overflow-hidden shadow-md cursor-pointer"







                onClick={() => setSelectedImage(mainImage)}







              >







                <Image







                  src={mainImage.src}







                  alt={mainImage.alt}







                  fill







                  className="object-cover hover:scale-105 transition-transform duration-300"







                  sizes="(max-width: 768px) 100vw, 66vw"







                  priority







                />







              </div>







            </div>















            {/* Smaller images on the right */}







            <div className="md:w-1/3 grid grid-cols-3 md:grid-cols-2 gap-4">







              {galleryImages.map((image, index) => (







                <div







                  key={index}







                  className="relative aspect-square rounded-lg overflow-hidden shadow-md cursor-pointer"







                  onClick={() => {







                    setSelectedImage(image)







                  }}







                >







                  <Image







                    src={image.src}







                    alt={image.alt}







                    fill







                    className="object-cover hover:scale-105 transition-transform duration-300"







                    sizes="(max-width: 768px) 33vw, 16vw"







                  />







                </div>







              ))}







            </div>







          </div>















          {/* Full screen modal */}







          {selectedImage && (







            <div 







              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"







              onClick={() => setSelectedImage(null)}







            >







              <button 







                className="absolute top-4 right-4 text-white hover:text-gray-300"







                onClick={(e) => {







                  e.stopPropagation()







                  setSelectedImage(null)







                }}







              >







                <X size={32} />







              </button>







              <button 







                onClick={(e) => {







                  e.stopPropagation()







                  handleNavigateGallery('prev')







                }}







                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"







                aria-label="Previous image"







              >







                <ChevronLeft className="h-8 w-8" />







              </button>







              <div className="relative w-[90vw] h-[90vh]">







                <Image







                  src={selectedImage.src}







                  alt={selectedImage.alt}







                  fill







                  className="object-contain"







                  sizes="90vw"







                  priority







                />







              </div>







              <button 







                onClick={(e) => {







                  e.stopPropagation()







                  handleNavigateGallery('next')







                }}







                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"







                aria-label="Next image"







              >







                <ChevronRight className="h-8 w-8" />







              </button>







            </div>







          )}







        </section>















        {/* Reviews Section */}







        <section className="mb-12">







          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Guest Reviews</h2>







          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">







            {[







              { 







                name: "Miriam", 







                rating: 5, 







                date: "January 2024",







                comment: "Great place, clean, minimalistic and a short distance to the centre of Wimbledon and train station. Hosts were very responsive. Would recommend it any day." 







              },







              { 







                name: "David", 







                rating: 5, 







                date: "April 2024",







                comment: "Great place." 







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















        {/* Contact & Pricing */}







        <section className="mb-12">







          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Contact & Pricing</h2>







          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">







            {/* Quick Contact Form on the left */}







            <Card className="bg-card text-card-foreground shadow-md">







              <CardHeader>







                <CardTitle className="text-xl text-primary">Quick Enquiry</CardTitle>







              </CardHeader>







              <CardContent>







                <form onSubmit={handleQuickContact} className="space-y-4">







                  <div className="space-y-2">







                    <Label htmlFor="quick-email">Email Address</Label>







                    <Input 







                      id="quick-email" 







                      name="email" 







                      type="email" 







                      placeholder="your@email.com" 







                      required 







                      className="border-input" 







                    />







                  </div>







                  <div className="space-y-2">







                    <Label htmlFor="quick-message">Message</Label>







                    <Textarea 







                      id="quick-message" 







                      name="message" 







                      placeholder="Write your message here..." 







                      className="min-h-[100px] border-input" 







                      required 







                    />







                  </div>







                  <Button 







                    type="submit" 







                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"







                  >







                    Send Message







                  </Button>







                </form>







              </CardContent>







            </Card>















            {/* Pricing on the right */}







            <Card className="bg-card text-card-foreground shadow-md">







              <CardHeader>







                <CardTitle className="text-xl text-primary">Pricing</CardTitle>







              </CardHeader>







              <CardContent>







                <ul className="space-y-2 text-muted-foreground">







                  <li className="flex justify-between">







                    <span>Monthly Rate:</span>







                    <span className="font-semibold">£6,000</span>







                  </li>







                  <li className="flex justify-between">







                    <span>Weekly Rate:</span>







                    <span className="font-semibold">£1,650</span>







                  </li>







                  <li className="flex justify-between">







                    <span>Nightly Rate:</span>







                    <span className="font-semibold">£250</span>







                  </li>







                  <li className="flex justify-between border-t my-2 pt-2">







                    <span>Cleaning Fee:</span>







                    <span className="font-semibold">£150</span>







                  </li>







                  <li className="flex justify-between border-t pt-2 mt-4">







                    <span>Minimum Stay:</span>







                    <span className="font-semibold">3 nights</span>







                  </li>







                </ul>







                







                {/* Direct booking message in green */}







                <div className="mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">







                  <div className="flex items-start space-x-2">







                    <div className="text-emerald-600 mt-1">







                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">







                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>







                        <path d="m9 12 2 2 4-4"/>







                      </svg>







                    </div>







                    <div>







                      <p className="font-medium text-emerald-700">







                        Save up to 20% by booking direct







                      </p>







                      <p className="text-sm text-emerald-600 mt-1">







                        These are our best direct rates - no platform fees or hidden charges







                      </p>







                    </div>







                  </div>







                </div>







              </CardContent>







            </Card>







          </div>







        </section>















        {/* Second section: Full Reservation Form */}







        <section id="booking-section" className="mb-12">







          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Reserve Your Stay</h2>







          <Card className="bg-card text-card-foreground shadow-md">







            <CardContent className="p-6">







              <form onSubmit={handleReservation} className="space-y-6">







                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">







                  {/* Left Column - Contact Details */}







                  <div className="space-y-4">







                    {/* Dates and Name */}







                    <div className="grid grid-cols-2 gap-4">







                      <div className="space-y-2">







                        <Label htmlFor="check-in" className="text-sm">Check-in</Label>







                        <Input 







                          id="check-in" 







                          name="checkIn" 







                          type="date" 







                          required 







                          className="border-input h-9 text-sm"







                        />







                      </div>







                      <div className="space-y-2">







                        <Label htmlFor="check-out" className="text-sm">Check-out</Label>







                        <Input 







                          id="check-out" 







                          name="checkOut" 







                          type="date" 







                          required 







                          className="border-input h-9 text-sm"







                        />







                      </div>







                    </div>















                    <div className="space-y-2">







                      <Label htmlFor="name">Full Name</Label>







                      <Input 







                        id="name" 







                        name="name" 







                        placeholder="John Doe" 







                        required 







                        className="border-input" 







                      />







                    </div>















                    <div className="space-y-2">







                      <Label htmlFor="email">Email Address</Label>







                      <Input 







                        id="email" 







                        name="email" 







                        type="email" 







                        placeholder="john@example.com" 







                        required 







                        className="border-input" 







                      />







                    </div>















                    <div className="space-y-2">







                      <Label htmlFor="phone">Phone Number</Label>







                      <Input 







                        id="phone" 







                        name="phone" 







                        type="tel" 







                        placeholder="+44 7700 900000" 







                        required 







                        className="border-input" 







                      />







                    </div>







                  </div>















                  {/* Right Column - Special Requests */}







                  <div className="space-y-2">







                    <Label htmlFor="message">Special Requests (Optional)</Label>







                    <Textarea 






                      id="message" 







                      name="message" 







                      placeholder="Any special requests or questions?" 







                      className="border-input min-h-[280px]" // Made taller to match left column height







                    />







                  </div>







                </div>















                {/* Submit button - Full width below both columns */}







                <Button 







                  type="submit" 







                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"







                >







                  Request to Book







                </Button>







              </form>







            </CardContent>







          </Card>







        </section>















        {/* Nearby Attractions */}







        <section className="mb-12">







          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Nearby Attractions</h2>







          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">







            {[







              { 







                name: "Wimbledon Station", 







                distance: "7 min walk", 







                image: IMAGES.attractions.station,







                description: "Direct trains to central London (17 mins to Waterloo)"







              },







              { 







                name: "Wimbledon Village", 







                distance: "15 min walk", 







                image: IMAGES.attractions.village,







                description: "Boutique shops, restaurants, and cafes"







              },







              { 







                name: "Wimbledon Common", 







                distance: "12 min walk", 







                image: IMAGES.attractions.common,







                description: "1,140 acres of woodland and green space"







              },







              {







                name: "New Wimbledon Theatre",







                distance: "3 min walk",







                image: "/images/attractions/theatre.jpg",







                description: "Historic Edwardian theatre hosting West End shows"







              },







              {







                name: "All England Tennis Club",







                distance: "33 min walk",







                image: "/images/attractions/tennis.jpg",







                description: "Home of the Wimbledon Championships and Tennis Museum"







              },







              {







                name: "Buddhapadipa Temple",







                distance: "38 min walk",







                image: "/images/attractions/temple.jpg",







                description: "Traditional Thai Buddhist temple with beautiful gardens"







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















        {/* Map Section */}







        <section className="mb-12">







          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Location</h2>







          <Card className="bg-card text-card-foreground shadow-md">







            <CardContent className="p-0">







              <div className="aspect-video relative">







                <iframe







                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.4876874810366!2d-0.20293098803732283!3d51.42485659235761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487608b1043fabc9%3A0xf4001e231ef13084!2sRussell%20Rd%2C%20London%20SW19%207QN!5e0!3m2!1sen!2suk!4v1709844511460!5m2!1sen!2suk"







                  width="100%"







                  height="100%"







                  style={{ border: 0 }}







                  allowFullScreen={false}







                  loading="lazy"







                  referrerPolicy="no-referrer-when-downgrade"







                  className="absolute inset-0"







                />







                <div className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm p-3 rounded-md shadow-md">







                  <p className="text-sm text-muted-foreground flex items-center">







                    <MapPin className="mr-2 h-4 w-4 text-primary" />







                    Russell Road, Wimbledon, London SW19







                  </p>







                  <p className="text-xs text-muted-foreground mt-1">







                    7 min walk to Wimbledon Station







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






