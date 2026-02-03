
'use client';
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef } from "react";
import {
  Briefcase,
  ShoppingCart,
  Plane,
  Landmark,
  Wallet,
  Tags,
  UserCheck,
} from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { FloatingDock } from "@/components/ui/floating-dock";
import { ColourfulText } from "@/components/ui/colourful-text";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const content = {
  es: {
    hero: {
      title: "CORPO TT SERVICES",
      subtitle1: "apoyo empresarial a distancia",
      subtitle2: "calidad y excelencia",
      description: "Ofrecemos una variedad de servicios de apoyo empresarial a distancia, destacándonos por nuestra filosofía de calidad y excelencia para la satisfacción del cliente.",
      button: "Nuestros Servicios",
    },
    quienesSomos: {
      title: "¿Quiénes Somos?",
      p1: "Corpott Services tiene como filosofía fundamental la calidad y excelencia en la ejecución de sus trabajos, buscando con esto la plena satisfacción del cliente. Por ello, brindamos soluciones adaptadas para resolver problemas de logística, asistencia remota, gestión de tesorería y contratación de personal temporal.",
    },
    about: {
      title: "Nuestra Visión y Misión",
      vision: {
        title: "Visión",
        description1: "Ser la empresa líder en servicios de apoyo empresarial a distancia, proporcionando personal calificado para las necesidades específicas de los clientes.",
      },
      mission: {
        title: "Misión",
        description1: "Proporcionar soluciones empresariales a distancia eficientes y sostenibles, mejorar la experiencia del cliente a través de un servicio de calidad y garantizar servicios de calidad con tiempos de respuesta expeditos.",
      },
    },
    services: {
      title: "Nuestros Servicios",
      subtitle: "Soluciones integrales para el apoyo empresarial a distancia.",
      list: [
        {
          icon: Briefcase,
          title: "Outsourcing a Distancia",
          description: "Servicio de operadores tecnológicos que simplifica la administración y contratación de personal, integrando un equipo especializado a su operación para ofrecer soporte y soluciones tecnológicas sin complicaciones administrativas.",
          image: "/images/outsourcing.webp",
          alt: "Servicio de operadores tecnológicos para simplificar la administración de personal."
        },
        {
          icon: ShoppingCart,
          title: "Gestión de Compras Remotas",
          description: "Nos encargamos de la selección de proveedores, negociación de precios y gestión de pedidos, asegurando la distribución eficiente y utilizando herramientas digitales para optimizar tiempos y costos.",
          image: "/images/sales-managment-corpott.webp",
          alt: "Gestión de compras remotas, desde la selección de proveedores hasta la distribución."
        },
        {
          icon: Plane,
          title: "Gestión de Reservas de Vuelos y Estadías",
          description: "Servicios de gestión de reservas nacionales e internacionales, coordinando detalles y usando plataformas avanzadas para encontrar las mejores opciones y precios.",
          image: "/images/flights-managment-corpott.webp",
          alt: "Gestión de reservas de vuelos y estadías, tanto nacionales como internacionales."
        },
        {
          icon: Landmark,
          title: "Soluciones Financieras de Tesorería",
          description: "Soluciones para optimizar la gestión del flujo de efectivo, encargándonos de la planificación, control y seguimiento de recursos financieros para maximizar la eficiencia y minimizar riesgos.",
          image: "/images/tesorería-corpott.webp",
          alt: "Soluciones financieras de tesorería para optimizar la gestión del flujo de efectivo."
        },
        {
          icon: Wallet,
          title: "Estructura de Pagos y Cobros en Multimoneda",
          description: "Servicio especializado para facilitar transacciones internacionales, optimizando el proceso, asegurando cumplimiento normativo y minimizando riesgos cambiarios.",
          image: "/images/currency-money-multi-wallet-corpott.webp",
          alt: "Servicio especializado para facilitar transacciones internacionales en múltiples monedas."
        },
        {
          icon: Tags,
          title: "Etiquetado de Datos para IA",
          description: "Nuestros servicios construyen una base sólida para modelos de IA de alto rendimiento, asignando etiquetas precisas a grandes volúmenes de datos para que los modelos reconozcan patrones y tomen decisiones más inteligentes.",
          image: "/images/ia-corpott.webp",
          alt: "Servicios de etiquetado de datos para modelos de inteligencia artificial de alto rendimiento."
        },
        {
          icon: UserCheck,
          title: "Personal Capacitado de Venezuela",
          description: "Ofrecemos personal capacitado sin las complications administrativas de la contratación, adaptándonos a sus necesidades para que pueda concentrarse en sus objectives principales.",
          image: "/images/team-corpott.webp",
          alt: "Personal capacitado de Venezuela para adaptarse a las necesidades de su empresa."
        },
      ],
    },
    clients: {
      title: "Nuestros Clientes",
      logos: [
        { src: "/images/clients/client-felix.png", alt: "Felix" },
        { src: "/images/clients/client-cb-pay.png", alt: "CB Pay", href: "https://www.cbpayapp.com/" },
        { src: "/images/clients/client-ock.png", alt: "Servicios Logisticos OCK", href: "https://grupoock.com/index.html" },
        { src: "/images/clients/client-abtrading.png", alt: "AB Trading America" },
      ]
    },
    contact: {
      title: "Contáctenos",
      subtitle: "Para más información, no dude en contactarnos.",
      links: [
        {
          title: "Ubicación",
          description: "Servicios a distancia",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>,
          href: "#",
        },
        {
          title: "Correo Electrónico",
          description: "corpottservices@gmail.com",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>,
          href: "mailto:corpottservices@gmail.com",
        },
      ],
    }
  },
  en: {
    hero: {
      title: "CORPO TT SERVICES",
      subtitle1: "remote business support",
      subtitle2: "quality and excellence",
      description: "We offer a variety of remote business support services, standing out for our philosophy of quality and excellence for client satisfaction.",
      button: "Our Services",
    },
    quienesSomos: {
      title: "Who We Are",
      p1: "Corpott Services' fundamental philosophy is quality and excellence in the execution of its work, seeking full client satisfaction. Therefore, we provide adapted solutions to solve problems in logistics, remote assistance, treasury management, and temporary staff hiring.",
    },
    about: {
      title: "Our Vision and Mission",
      vision: {
        title: "Vision",
        description1: "To be the leading company in remote business support services, providing qualified personnel for the specific needs of our clients.",
      },
      mission: {
        title: "Mission",
        description1: "To provide efficient and sustainable remote business solutions, enhance the client experience through quality service, and guarantee quality services with prompt response times.",
      },
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive solutions for remote business support.",
      list: [
        {
          icon: Briefcase,
          title: "Remote Outsourcing",
          description: "A technology operator service that simplifies personnel administration and hiring, integrating a specialized team into your operation to offer support and technological solutions without administrative complications.",
          image: "/images/outsourcing.webp",
          alt: "Technology operator service to simplify personnel administration."
        },
        {
          icon: ShoppingCart,
          title: "Remote Purchasing Management",
          description: "We handle supplier selection, price negotiation, and order management, ensuring efficient distribution and using digital tools to optimize time and costs.",
          image: "/images/sales-managment-corpott.webp",
          alt: "Remote purchasing management, from supplier selection to distribution."
        },
        {
          icon: Plane,
          title: "Flight and Accommodation Booking Management",
          description: "National and international booking management services, coordinating details and using advanced platforms to find the best options and prices.",
          image: "/images/flights-managment-corpott.webp",
          alt: "Management of national and international flight and accommodation bookings."
        },
        {
          icon: Landmark,
          title: "Treasury Financial Solutions",
          description: "Solutions to optimize cash flow management, handling the planning, control, and monitoring of financial resources to maximize efficiency and minimize risks.",
          image: "/images/tesorería-corpott.webp",
          alt: "Treasury financial solutions to optimize cash flow management."
        },
        {
          icon: Wallet,
          title: "Multi-currency Payment and Collection Structure",
          description: "A specialized service to facilitate international transactions, optimizing the process, ensuring regulatory compliance, and minimizing currency risks.",
          image: "/images/currency-money-multi-wallet-corpott.webp",
          alt: "Specialized service to facilitate international transactions in multiple currencies."
        },
        {
          icon: Tags,
          title: "Data Labeling for AI",
          description: "Our services build a solid foundation for high-performance AI models by assigning precise labels to large volumes of data, enabling the models to recognize patterns and make smarter decisions.",
          image: "/images/ia-corpott.webp",
          alt: "Data labeling services for high-performance artificial intelligence models."
        },
        {
          icon: UserCheck,
          title: "Trained Personnel from Venezuela",
          description: "We offer trained personnel without the administrative complications of hiring, adapting to your needs so you can focus on your main objectives.",
          image: "/images/team-corpott.webp",
          alt: "Trained personnel from Venezuela to adapt to your company's needs."
        },
      ],
    },
    clients: {
      title: "Our Clients",
      logos: [
        { src: "/images/clients/client-felix.png", alt: "Felix" },
        { src: "/images/clients/client-cb-pay.png", alt: "CB Pay", href: "https://www.cbpayapp.com/" },
        { src: "/images/clients/client-ock.png", alt: "Servicios Logisticos OCK", href: "https://grupoock.com/index.html" },
        { src: "/images/clients/client-abtrading.png", alt: "AB Trading America" },
      ]
    },
    contact: {
      title: "Contact Us",
      subtitle: "For more information, do not hesitate to contact us.",
      links: [
        {
          title: "Location",
          description: "Remote services",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>,
          href: "#",
        },
        {
          title: "Email",
          description: "corpottservices@gmail.com",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>,
          href: "mailto:corpottservices@gmail.com",
        },
      ],
    },
  },
};


export default function Home() {
  const [language, setLanguage] = useState('es');
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  const c = content[language as keyof typeof content];

  return (
    <div
      className="flex min-h-dvh flex-col bg-background relative"
    >
      <Header language={language} setLanguage={setLanguage} />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full h-[550px] overflow-hidden flex flex-col items-center justify-center">
          <div className="absolute inset-0 w-full h-full bg-background z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
          <div className="container mx-auto px-4 text-center z-20">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-foreground">
              {c.hero.title}
            </h1>
            <p className="uppercase text-lg sm:text-xl md:text-2xl font-semibold tracking-wider mt-4">
              <ColourfulText text={c.hero.subtitle1} /> & <ColourfulText text={c.hero.subtitle2} />
            </p>
            <p className="mx-auto mt-6 max-w-[800px] text-lg text-foreground/80 md:text-xl">
              {c.hero.description}
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="#services">{c.hero.button}</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Quienes Somos Section */}
        <section id="quienes-somos" className="w-full py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 md:grid-cols-2 md:gap-16 items-center">
              <div className="relative w-full aspect-video">
                  <Image
                    src="/images/who-are.webp"
                    alt="Imagen decorativa de la oficina de Corpo TT services"
                    data-ai-hint="office workspace"
                    fill
                    className="object-cover rounded-xl shadow-lg"
                  />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
                  <ColourfulText text={c.quienesSomos.title}/>
                </h2>
                <div className="mt-6 space-y-4 text-foreground/80">
                  <p>
                    {language === 'es' ?
                      <>Corpott Services tiene como filosofía fundamental la <ColourfulText text="calidad y excelencia" /> en la ejecución de sus trabajos, buscando con esto la plena satisfacción del cliente. Por ello, brindamos <ColourfulText text="soluciones adaptadas" /> para resolver problemas de logística, asistencia remota, gestión de tesorería y contratación de personal temporal.</> :
                      <>Corpott Services' fundamental philosophy is <ColourfulText text="quality and excellence" /> in the execution of its work, seeking full client satisfaction. Therefore, we provide <ColourfulText text="adapted solutions" /> to solve problems in logistics, remote assistance, treasury management, and temporary staff hiring.</>
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
                {c.about.title}
              </h2>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 justify-center">
              <CardSpotlight spotlightColor="hsl(220, 60%, 85%)" className="bg-secondary text-card-foreground p-0 overflow-hidden rounded-xl max-w-sm mx-auto">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="relative w-full h-80">
                    <Image
                      src="/images/business-vision-corpott.webp"
                      alt="Imagen decorativa para la visión de la empresa"
                      data-ai-hint="telescope future"
                      fill
                      className="object-cover rounded-t-xl"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-foreground relative z-20">{c.about.vision.title}</h3>
                    <p className="mt-2 text-foreground/80 relative z-20">
                      {language === 'es' ?
                        <>Ser la empresa líder en servicios de <ColourfulText text="apoyo empresarial a distancia" />, proporcionando <ColourfulText text="personal calificado" /> para las necesidades específicas de los clientes.</> :
                        <>To be the leading company in <ColourfulText text="remote business support" /> services, providing <ColourfulText text="qualified personnel" /> for the specific needs of our clients.</>
                      }
                    </p>
                  </div>
                </div>
              </CardSpotlight>
              <CardSpotlight spotlightColor="hsl(220, 60%, 85%)" className="bg-secondary text-card-foreground p-0 overflow-hidden rounded-xl max-w-sm mx-auto">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="relative w-full h-80">
                    <Image
                      src="/images/business-mission-corpott.webp"
                      alt="Imagen decorativa para la misión de la empresa"
                      data-ai-hint="target goal"
                      fill
                      className="object-cover rounded-t-xl"
                    />
                  </div>
                  <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground relative z-20">{c.about.mission.title}</h3>
                  <p className="mt-2 text-foreground/80 relative z-20">
                    {language === 'es' ?
                      <>Proporcionar <ColourfulText text="soluciones empresariales a distancia" /> eficientes y sostenibles, mejorar la experiencia del cliente a través de un <ColourfulText text="servicio de calidad" /> y garantizar servicios de calidad con <ColourfulText text="tiempos de respuesta expeditos" />.</> :
                      <>To provide efficient and sustainable <ColourfulText text="remote business solutions" />, enhance the client experience through <ColourfulText text="quality service" />, and guarantee quality services with <ColourfulText text="prompt response times" />.</>
                    }
                  </p>
                  </div>
                </div>
              </CardSpotlight>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
                {c.services.title}
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] text-foreground/80 md:text-lg">
                {c.services.subtitle}
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {c.services.list.map((service, index) => (
                <CardSpotlight
                  key={index}
                  spotlightColor="hsl(220, 60%, 85%)"
                  className={
                    "bg-card text-card-foreground p-0 overflow-hidden rounded-xl " +
                    (c.services.list.length % 2 !== 0 && index === c.services.list.length - 1
                      ? "sm:col-span-2 lg:col-span-1 lg:col-start-2"
                      : "")
                  }
                >
                  <div className="flex flex-col items-center text-center h-full">
                      <div className="relative w-full h-64">
                        <Image
                          src={service.image}
                          alt={service.alt}
                          data-ai-hint="tech service"
                          fill
                          className="object-cover rounded-t-xl"
                        />
                      </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-semibold mb-2 relative z-20 text-foreground">{service.title}</h3>
                      <p className="text-sm text-foreground/80 relative z-20">
                        {index === 0 ? (
                          language === 'es' ? 
                          <>Servicio de <ColourfulText text="operadores tecnológicos" /> que simplifica la <ColourfulText text="administración y contratación de personal" />, integrando un equipo especializado a su operación para ofrecer soporte y soluciones tecnológicas sin complicaciones administrativas.</> : 
                          <>A technology operator service that <ColourfulText text="simplifies personnel administration and hiring" />, integrating a specialized team into your operation to offer support and technological solutions without administrative complications.</>
                        ) : index === 1 ? (
                          language === 'es' ?
                          <>Nos encargamos de la <ColourfulText text="selección de proveedores" />, <ColourfulText text="negociación de precios" /> y <ColourfulText text="gestión de pedidos" />, asegurando la distribución eficiente y utilizando herramientas digitales para optimizar tiempos y costos.</> :
                          <>We handle <ColourfulText text="supplier selection" />, <ColourfulText text="price negotiation" />, and <ColourfulText text="order management" />, ensuring efficient distribution and using digital tools to optimize time and costs.</>
                        ) : index === 2 ? (
                          language === 'es' ?
                          <>Servicios de gestión de <ColourfulText text="reservas nacionales e internacionales" />, coordinando detalles y usando <ColourfulText text="plataformas avanzadas" /> para encontrar las mejores opciones y precios.</> :
                          <>National and international <ColourfulText text="booking management services" />, coordinating details and using <ColourfulText text="advanced platforms" /> to find the best options and prices.</>
                        ) : index === 3 ? (
                          language === 'es' ?
                          <>Soluciones para <ColourfulText text="optimizar la gestión del flujo de efectivo" />, encargándonos de la planificación, control y seguimiento de recursos financieros para <ColourfulText text="maximizar la eficiencia" /> y minimizar riesgos.</> :
                          <>Solutions to <ColourfulText text="optimize cash flow management" />, handling the planning, control, and monitoring of financial resources to <ColourfulText text="maximize efficiency" /> and minimize risks.</>
                        ) : index === 4 ? (
                          language === 'es' ?
                          <>Servicio especializado para <ColourfulText text="facilitar transacciones internacionales" />, optimizando el proceso, asegurando <ColourfulText text="cumplimiento normativo" /> y minimizando <ColourfulText text="riesgos cambiarios" />.</> :
                          <>A specialized service to <ColourfulText text="facilitate international transactions" />, optimizing the process, ensuring <ColourfulText text="regulatory compliance" />, and minimizing <ColourfulText risk="currency risks" />.</>
                        ) : index === 5 ? (
                          language === 'es' ?
                          <>Nuestros servicios construyen una <ColourfulText text="base sólida para modelos de IA" /> de alto rendimiento, asignando <ColourfulText text="etiquetas precisas" /> a grandes volúmenes de datos para que los modelos reconozcan patrones y tomen decisiones más inteligentes.</> :
                          <>Our services build a <ColourfulText text="solid foundation for high-performance AI models" /> by assigning <ColourfulText text="precise labels" /> to large volumes of data, enabling the models to recognize patterns and make smarter decisions.</>
                        ) : index === 6 ? (
                          language === 'es' ?
                          <>Ofrecemos <ColourfulText text="personal capacitado" /> sin las complications administrativas de la contratación, <ColourfulText text="adaptándonos a sus necesidades" /> para que pueda concentrarse en sus objetivos principales.</> :
                          <>We offer <ColourfulText text="trained personnel" /> without the administrative complications of hiring, <ColourfulText text="adapting to your needs" /> so you can focus on your main objectives.</>
                        ) : (
                          service.description
                        )}
                      </p>
                    </div>
                  </div>
                </CardSpotlight>
              ))}
            </div>
          </div>
        </section>
        
        {/* Clients Section */}
        <section id="clients" className="w-full py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
                <ColourfulText text={c.clients.title} />
              </h2>
            </div>
            <div className="flex items-center justify-center">
              <Carousel
                opts={{ loop: true }}
                plugins={[plugin.current]}
                className="w-full max-w-6xl"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
              >
                <CarouselContent>
                  {[...c.clients.logos, ...c.clients.logos].map((logo, index) => {
                    const Wrapper = logo.href ? Link : 'div';
                    const wrapperProps = logo.href ? { href: logo.href, target: "_blank", rel: "noopener noreferrer" } : {};
                    return (
                      <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/5">
                        <div className="p-1">
                          <Wrapper {...wrapperProps}>
                            <div className="flex aspect-square items-center justify-center p-6 relative">
                              <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={180}
                                height={90}
                                className="object-contain transition-all duration-300"
                              />
                            </div>
                          </Wrapper>
                        </div>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-16 md:py-24 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
                <ColourfulText text={c.contact.title} />
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] text-foreground/80 md:text-lg">
                {c.contact.subtitle}
              </p>
            </div>
            <div className="flex items-center justify-center w-full mt-12">
              <FloatingDock items={c.contact.links} />
            </div>
          </div>
        </section>
      </main>
      <Footer language={language} />
    </div>
  );
}
