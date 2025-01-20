import { useState } from 'react';
import { MapPin, Home, DoorOpen, Car, Coffee, Phone } from 'lucide-react';
import Map from '../components/Map';
import Gallery from '../components/Gallery';
import PropertyDetails from '../components/PropertyDetails';
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Index = () => {
  const images = [
    'https://images.unsplash.com/photo-1487958449943-2429e8be8625',
    'https://images.unsplash.com/photo-1518005020951-eccb494ad742',
    'https://images.unsplash.com/photo-1496307653780-42ee777d4833',
    'https://images.unsplash.com/photo-1439337153520-7082a56a81f4'
  ];

  const location: [number, number] = [-99.128806, 19.398056];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <main className="container mx-auto px-6 py-8">
        {/* Banner Carousel */}
        <div className="mb-8">
          <Carousel
            opts={{
              align: "center",
              loop: true,
              dragFree: false,
              duration: 500,
            }}
            className="w-full relative"
            autoplay={true}
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="relative w-full">
                  <div className="relative h-[400px] w-full overflow-hidden rounded-2xl">
                    <img 
                      src={image} 
                      alt={`Property ${index + 1}`}
                      className="w-full h-full object-cover animate-carousel-fade"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h1 className="text-2xl font-bold mb-4">¡Local en Renta con Ubicación Estratégica y Amplias Funcionalidades!</h1>
              
              <div className="space-y-6 text-gray-600 mb-6">
                <div>
                  <h3 className="font-semibold mb-2">📍 Ubicación Premium:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Esquina de dos importantes ejes viales (4 Sur y 1 Oriente)</li>
                    <li>Frente a la estación de Metrobús Andrés Molina</li>
                    <li>Frente al concurrido mercado Santa Anita</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">🏢 Espacios Amplios y Funcionales:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>200 m² distribuidos en planta baja y mezzanine</li>
                    <li>Cuenta con 2 baños, oficina, bodega, cocineta y estacionamiento</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">💰 Precio Competitivo:</h3>
                  <ul className="list-disc pl-5">
                    <li>$400 MXN/m²</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">📌 Dirección:</h3>
                  <p>Plutarco Elías Calles 733, Nueva Santa Anita, Iztacalco, CDMX, C.P. 08210</p>
                </div>
              </div>

              <PropertyDetails />
            </div>
          </div>

          {/* Right Column - Gallery and Pricing */}
          <div className="lg:col-span-5 space-y-6">
            {/* Pricing Card */}
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-orange-500/10 text-orange-500 px-3 py-1 rounded-full text-sm font-medium">En Renta</span>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">$400/m²</h2>
                  <div className="flex gap-2 text-sm text-gray-500">
                    <span>200m²</span>
                    <span>•</span>
                    <span>Comercial</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Renta Mensual</span>
                    <span className="font-medium">$80,000 MXN</span>
                  </div>
                </div>

                <Button className="w-full rounded-xl bg-black hover:bg-black/90">
                  Agendar Visita
                </Button>
              </div>
            </div>

            {/* Gallery */}
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Galería</h2>
              <Gallery images={images} />
            </div>

            {/* Map */}
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Ubicación</h2>
              <div className="h-[300px] w-full">
                <Map location={location} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
