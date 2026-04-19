"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import { Award, Building, Calendar, Clock, Shield, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="compact"
        sizing="largeSmall"
        background="noise"
        cardStyle="solid"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="glass"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Services",
          id: "#services",
        },
        {
          name: "Fleet",
          id: "#fleet",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Frisco Limousine"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="Frisco Limousine"
      description="Luxury Transportation in Frisco & DFW. Airport transfers, weddings, corporate travel & special events — delivered with professionalism and care."
      buttons={[
        {
          text: "Book Now",
          href: "#contact",
        },
        {
          text: "Get Quote",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/young-curly-woman-enjoying-her-wine-bar_627829-6909.jpg"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      features={[
        {
          title: "Airport Transfers",
          description: "Seamless, on-time arrivals.",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-luggage-travel-essentials-with-pinpoint_23-2148434415.jpg",
        },
        {
          title: "Weddings & Events",
          description: "Arrive in style on your big day.",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-women-getting-married_23-2150753712.jpg",
        },
        {
          title: "Corporate Travel",
          description: "Professional service for your team.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-women-traveling-by-bus_23-2149142283.jpg",
        },
      ]}
      title="Our Services"
      description="World-class transportation for every occasion."
    />
  </div>

  <div id="trust" data-section="trust">
      <AboutMetric
      useInvertedBackground={true}
      title="Why Choose Frisco Limousine"
      metrics={[
        {
          icon: Clock,
          label: "Reliability",
          value: "100%",
        },
        {
          icon: Shield,
          label: "Safety",
          value: "24/7",
        },
        {
          icon: Star,
          label: "Excellence",
          value: "VIP",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "John Doe",
          role: "CEO",
          company: "TechCorp",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/corporate-business-people_23-2148827022.jpg",
        },
        {
          id: "2",
          name: "Sarah Smith",
          role: "Traveler",
          company: "Personal",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-beautiful-traveler-woman-putting-arms-suitcase-isolated-white-wall-with-copy-space_141793-26097.jpg",
        },
        {
          id: "3",
          name: "Michael Brown",
          role: "Director",
          company: "GrowthCo",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-handsome-caucasian-man-posing-looking-camera-isolated-dark-background_613910-15062.jpg",
        },
        {
          id: "4",
          name: "Emily White",
          role: "Planner",
          company: "EventsInc",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/women-making-preparations-wedding_23-2149184361.jpg",
        },
        {
          id: "5",
          name: "David Wilson",
          role: "Executive",
          company: "StartupX",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/middle-age-businessman-smiling-happy-standing-city_839833-25759.jpg",
        },
      ]}
      kpiItems={[
        {
          value: "5/5",
          label: "Rating",
        },
        {
          value: "1000+",
          label: "Trips",
        },
        {
          value: "24/7",
          label: "Service",
        },
      ]}
      title="Client Reviews"
      description="What our clients are saying about our premium service."
    />
  </div>

  <div id="fleet" data-section="fleet">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "1",
          name: "Luxury Sedan",
          price: "From $80",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-choosing-car-car-showroom_1303-17457.jpg",
        },
        {
          id: "2",
          name: "Premium SUV",
          price: "From $120",
          imageSrc: "http://img.b2bpic.net/free-photo/fashionable-ladies-going-out-car_132075-12211.jpg",
        },
        {
          id: "3",
          name: "Stretch Limo",
          price: "From $250",
          imageSrc: "http://img.b2bpic.net/free-photo/luxury-car-parked-outside-elegant-modern-building-generative-ai_188544-8050.jpg",
        },
        {
          id: "4",
          name: "Party Bus",
          price: "From $400",
          imageSrc: "http://img.b2bpic.net/free-photo/female-taxi-driver-paying-attention-road_23-2149236681.jpg",
        },
        {
          id: "5",
          name: "Executive Car",
          price: "From $100",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-getting-taxi-car_23-2149149625.jpg",
        },
        {
          id: "6",
          name: "Luxury Van",
          price: "From $150",
          imageSrc: "http://img.b2bpic.net/free-photo/job-out-office-working-back-car-using-silver-colored-laptop-senior-businessman_146671-14500.jpg",
        },
      ]}
      title="Our Fleet"
      description="Luxury vehicles maintained to the highest standards."
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="About Frisco Limousine"
      metrics={[
        {
          icon: Award,
          label: "Quality",
          value: "Premium",
        },
        {
          icon: Building,
          label: "Experience",
          value: "10+ Years",
        },
        {
          icon: Calendar,
          label: "Availability",
          value: "24/7",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      title="Book Your Ride"
      description="Available 24/7 for all your transportation needs."
      tag="Contact Us"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Home",
              href: "#",
            },
            {
              label: "Services",
              href: "#services",
            },
          ],
        },
        {
          items: [
            {
              label: "Fleet",
              href: "#fleet",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
      ]}
      logoText="Frisco Limousine"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
