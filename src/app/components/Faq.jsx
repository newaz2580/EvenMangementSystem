"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQ() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              How do I book an event with your team?
            </AccordionTrigger>
            <AccordionContent>
              You can book an event by contacting us via our website or calling
              our customer service. We’ll discuss your requirements and confirm
              the booking with a contract.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              Do you provide customized event packages?
            </AccordionTrigger>
            <AccordionContent>
              Yes! We create tailor-made packages to fit your needs whether it’s
              a wedding, birthday, or corporate event.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              Can I cancel or reschedule my booking?
            </AccordionTrigger>
            <AccordionContent>
              Yes, cancellations and reschedules are allowed. Please notify us
              at least 7 days before the event. Cancellation charges may apply.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              Do you handle catering and decoration too?
            </AccordionTrigger>
            <AccordionContent>
              Absolutely! Our team covers catering, decoration, lighting, sound,
              and overall event management.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
