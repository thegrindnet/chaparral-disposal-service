import truckFront from "../assets/images/chaparral-disposal-truck-front.webp";
import truckSide from "../assets/images/chaparral-disposal-truck-side.webp";
import truckModern from "../assets/images/chaparral-disposal-truck-modern.webp";
import containers from "../assets/images/chaparral-disposal-containers.webp";
export const business = {
  phoneDisplay: "(575) 824-0887",
  phone: "+15758240887",
  email: "email@example.com",
  address: "549 N Rd, Chaparral, NM 88081",
  hours: "Monday–Friday, 8:00 AM–4:00 PM",
  mapUrl: "https://maps.app.goo.gl/M3KwZYkuew4jRwSbA",
};
export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Fleet", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];
export const services = [
  {
    number: "01",
    title: "Residential Pickup",
    description:
      "Dependable weekly household trash pickup that helps families keep their homes and properties clean.",
    features: [
      "Reliable weekly schedule",
      "96-gallon containers available",
      "Friendly local service",
    ],
  },
  {
    number: "02",
    title: "Commercial Service",
    description:
      "Larger containers and regular disposal service to help local businesses handle everyday waste needs.",
    features: [
      "2, 3, 4 & 6-yard dumpsters",
      "Service for local businesses",
      "Competitive local rates",
    ],
  },
];
export const galleryItems = [
  {
    src: truckFront,
    alt: "Chaparral Disposal white front-loading collection truck",
    label: "Local fleet",
  },
  {
    src: truckModern,
    alt: "Chaparral Disposal white collection truck parked under a blue sky",
    label: "Dependable equipment",
  },
  {
    src: truckSide,
    alt: "Side view of a Chaparral Disposal collection truck",
    label: "Ready for the route",
  },
  {
    src: containers,
    alt: "Blue residential cart and commercial dumpster from Chaparral Disposal",
    label: "Residential & commercial containers",
  },
];
export const reviews = [
  {
    name: "Sam Lopez",
    quote:
      "They have always picked up the trash every single week, early in the morning like clockwork. They have never let us down even once.",
  },
  {
    name: "Marlene Johnson",
    quote: "Great price. Amazing customer service and friendly. Recommended.",
  },
  {
    name: "Leticia Lopez",
    quote:
      "My trash always gets picked up on time every week. If there are any issues, explain the situation calmly and your problem will be resolved.",
  },
  {
    name: "Teresa Medina",
    quote:
      "Chaparral service and their staff are very nice, and they do a great job.",
  },
];
