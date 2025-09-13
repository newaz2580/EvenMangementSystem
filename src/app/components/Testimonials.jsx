"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Alice Brown",
    role: "Wedding Client",
    message:
      "They managed our wedding perfectly! Everything was smooth, organized, and beyond expectations. Highly recommend!",
    image: "https://i.ibb.co.com/DfT1Dw33/Wedding-Client.jpg",
  },
  {
    name: "James Smith",
    role: "Corporate Client",
    message:
      "Our annual corporate event was a huge success thanks to their professional team. Creative ideas and flawless execution!",
    image: "https://i.ibb.co.com/8LPfZRHY/image-11.jpg",
  },
  {
    name: "Rachel Kim",
    role: "Birthday Client",
    message:
      "From decorations to catering, everything was amazing! They made my daughter's birthday truly unforgettable.",
    image: "https://i.ibb.co.com/vCztD52S/Birthday-Client.jpg",
  },
  {
    name: "David Lee",
    role: "Conference Organizer",
    message:
      "Excellent event planning! The attention to detail and professionalism made our international conference a big success.",
    image: "https://i.ibb.co.com/20TnFycX/Corporate-Client.jpg",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
          What Our Clients Say
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <Card
              key={i}
              className="shadow-lg border-none bg-white p-6 hover:shadow-xl transition"
            >
              <CardHeader className="flex flex-col items-center">
                <Avatar className="h-16 w-16 mb-4">
                  <AvatarImage src={t.image} alt={t.name} />
                  <AvatarFallback>{t.name[0]}</AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-semibold">{t.name}</h3>
                <p className="text-sm text-gray-500">{t.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 italic">“{t.message}”</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
