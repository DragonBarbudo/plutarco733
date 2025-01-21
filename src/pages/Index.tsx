import { MapPin, Home, DoorOpen, Car, Coffee, Phone } from 'lucide-react';
import Map from '../components/Map';
import Gallery from '../components/Gallery';
import PropertyDetails from '../components/PropertyDetails';
import { Button } from "@/components/ui/button";
import Banner from '../components/Banner';

const Index = () => {
  const images = [
    'banner/p1.webp',
    'banner/p2.webp',
    'banner/p3.webp',
    'banner/p4.webp'
  ];

  const gallist = [
    'banner/g1.webp',
    'banner/g2.webp',
    'banner/g3.webp',
    'banner/g4.webp',
    'banner/g5.webp',
    'banner/g6.webp',
    'banner/g7.webp',
    'banner/g8.webp',
    'banner/g9.webp'
  ];

  const location: [number, number] = [-99.128806, 19.398056];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <main className="container mx-auto px-6 py-8">
        

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Banner */}
            <div className="mb-8">
              <Banner images={images} />
            </div>
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h1 className="text-2xl font-bold mb-4">¡Local en Renta con Ubicación Estratégica y Amplias Funcionalidades!</h1>
              <h2>Con 2 vistas sobre importante av. Plutarco Elias Calles y contra esquina de Metrobús</h2>
              
           
            </div>

            <PropertyDetails />
          </div>

          {/* Right Column - Gallery and Pricing */}
          <div className="lg:col-span-5 space-y-6">
            

            {/* Gallery */}
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Galería</h2>
              <Gallery images={gallist} />
            </div>

            {/* Map */}
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Ubicación</h2>
              <div className="h-[300px] w-full">
                <Map location={location} />
              </div>
            </div>

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

             
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
