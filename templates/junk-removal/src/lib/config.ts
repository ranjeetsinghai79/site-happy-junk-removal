import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Happy Junk Removal",
    tagline: "Junk Gone, Stress Gone",
    phone: "(480) 557-5865",
    phoneHref: "tel:+14805575865",
    email: "info@happyjunkremoval.com",
    address: "123 Main St",
    city: "Mesa",
    serviceAreas: ["Mesa", "Gilbert", "Tempe", "Chandler", "Phoenix", "Scottsdale"],
    license: "Licensed & Insured",
    since: "2015",
    google_rating: "4.9",
    review_count: "320",
    emergency: false,
    theme: "slate",
    niche: "junk-removal",
  },

  services: [
    { icon: "truck", title: "Residential Junk Removal", desc: "We clear out unwanted items from homes, attics, and basements quickly and efficiently.", urgent: false },
    { icon: "home", title: "Eviction Cleanout", desc: "Fast and discreet cleanout services for landlords and property managers after an eviction.", urgent: true },
    { icon: "hammer", title: "Construction Clean Up", desc: "Post-construction debris removal, ensuring your site is clean and ready for the next phase.", urgent: false },
    { icon: "truck", title: "Dumpster Rental", desc: "Flexible dumpster rental options for your project, delivered and picked up on your schedule.", urgent: false },
    { icon: "thermometer", title: "Appliance Removal", desc: "Safe and eco-friendly removal of old appliances, from refrigerators to washing machines.", urgent: false },
    { icon: "scissors", title: "Furniture Removal", desc: "Effortless removal of old sofas, beds, tables, and other unwanted furniture items.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah L.", location: "Gilbert", stars: 5, text: "Happy Junk Removal saved my weekend! I had a garage full of old boxes and broken furniture. They gave me a transparent quote over the phone, showed up on time, and cleared everything out in under an hour. So professional and friendly, I couldn't be happier with the service. Highly recommend them for any cleanout!" },
    { name: "Mark T.", location: "Chandler", stars: 5, text: "Needed a dumpster for a home renovation project. Happy Junk Removal delivered an 18-yard dumpster exactly when they said they would. The process was seamless, and pickup was just as easy. Their pricing was competitive, and the customer service was excellent. Will definitely use them again for future projects." },
    { name: "Jessica R.", location: "Tempe", stars: 5, text: "After an eviction, I was overwhelmed with the mess left behind. Happy Junk Removal responded quickly to my call for an eviction cleanout. They were incredibly efficient, respectful, and thorough, making a stressful situation much easier to handle. Their team was a true lifesaver, and the property looked great afterwards." }
  ],

  trustBadges: [
    "Licensed & Insured", "Same-Day Service", "4.9 Google Rating", "Eco-Friendly Disposal", "Local & Family Owned"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 320, label: "Happy Customers", suffix: "+", decimals: 0 },
    { value: 9, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Response", desc: "We offer same-day service to get your junk gone quickly and efficiently." },
    { icon: "dollar-sign", title: "Upfront Pricing", desc: "Receive a transparent, no-obligation FREE quote before any work begins." },
    { icon: "award", title: "Professional Team", desc: "Our crew is experienced, friendly, and committed to excellent service." },
    { icon: "thumbs-up", title: "Eco-Friendly", desc: "We prioritize recycling and donating to minimize landfill waste." },
    { icon: "phone", title: "Responsive Support", desc: "Real humans answer your calls, ready to assist with your junk removal needs." },
    { icon: "truck", title: "Full-Service Hauling", desc: "No task too large or small – we handle all your junk removal needs." }
  ],

  formServiceOptions: ["Residential Junk Removal", "Dumpster Rental", "Eviction Cleanout", "Construction Clean Up", "Appliance Removal", "Furniture Removal"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!