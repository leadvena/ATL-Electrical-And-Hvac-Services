import { ServiceCategory, NavItem } from './types';

export const PHONE_NUMBER = "+64 22 367 0628";
export const EMAIL = "info@atlelectrical.co.nz";
export const ADDRESS = "Wellington, New Zealand";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    title: "Electrical Services",
    services: [
      {
        id: "panel-upgrades",
        title: "Panel Upgrades",
        description: "Modernize your electrical infrastructure for safety and performance.",
        icon: "Zap",
      },
      {
        id: "wiring-outlets",
        title: "Wiring & Outlets",
        description: "Professional installation and repair of residential and commercial wiring.",
        icon: "Power",
      },
      {
        id: "lighting",
        title: "Lighting Installation",
        description: "Energy-efficient interior and exterior lighting solutions.",
        icon: "Lightbulb",
      },
      {
        id: "ev-charging",
        title: "EV Charger Installation",
        description: "Certified home and commercial electric vehicle charging stations.",
        icon: "CarFront",
      },
    ],
  },
  {
    title: "HVAC Services",
    services: [
      {
        id: "heat-pumps",
        title: "Heat Pumps",
        description: "Expert installation of energy-efficient heat pump systems.",
        icon: "Thermometer",
      },
      {
        id: "air-conditioning",
        title: "Air Conditioning",
        description: "Cooling solutions designed for comfort and efficiency.",
        icon: "Wind",
      },
      {
        id: "duct-systems",
        title: "Duct Systems",
        description: "Custom ductwork design, installation, and maintenance.",
        icon: "Fan",
      },
      {
        id: "maintenance",
        title: "Maintenance & Repair",
        description: "Regular servicing to keep your HVAC systems running smoothly.",
        icon: "Wrench",
      },
    ],
  },
];

export const TRUST_SIGNALS = [
  "Certified Technicians",
  "Fast Response",
  "Residential & Commercial",
  "Servicing Wellington Area",
];

export const PROCESS_STEPS = [
  {
    title: "Contact Us",
    description: "Reach out via phone or our online form for an initial consultation.",
  },
  {
    title: "Get a Quote",
    description: "We provide a transparent, competitive quote tailored to your needs.",
  },
  {
    title: "We Schedule",
    description: "Our certified technicians arrive on time and ready to work.",
  },
  {
    title: "Job Completed",
    description: "Quality workmanship guaranteed, with thorough testing and cleanup.",
  },
];
