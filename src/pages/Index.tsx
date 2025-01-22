import { MapPin, Home, DoorOpen, Car, Coffee, Phone } from 'lucide-react';
import Map from '../components/Map';
import Gallery from '../components/Gallery';
import PropertyDetails from '../components/PropertyDetails';
import { Button } from "@/components/ui/button";
import Banner from '../components/Banner';
import { Helmet } from 'react-helmet';

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
  const phoneNumber = "+525535476828";

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    "name": "Local Comercial en Renta - Plutarco Elías Calles",
    "description": "Local Comercial en Renta con Ubicación Estratégica y Amplias Funcionalidades. Con 2 vistas sobre importante av. Plutarco Elias Calles y contra esquina de Metrobús",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plutarco Elías Calles 733",
      "addressLocality": "Nueva Santa Anita, Iztacalco",
      "addressRegion": "CDMX",
      "postalCode": "08210",
      "addressCountry": "MX"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "19.398056",
      "longitude": "-99.128806"
    },
    "price": "48000",
    "priceCurrency": "MXN",
    "telephone": phoneNumber,
    "image": images
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
        <title>Local Comercial en Renta - Plutarco Elías Calles 733</title>
        <meta name="description" content="Local Comercial en Renta con Ubicación Estratégica y Amplias Funcionalidades en Plutarco Elías Calles" />
      </Helmet>
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
              <h1 className="text-2xl font-bold mb-4">¡Local Comercial en Renta con Ubicación Estratégica y Amplias Funcionalidades!</h1>
              <h2>Con 2 vistas sobre importante av. Plutarco Elias Calles y contra esquina de Metrobús</h2>
              
              <div className="mt-6">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1" />
                  <p>Plutarco Elías Calles 733, Nueva Santa Anita, Iztacalco, CDMX, C.P. 08210</p>
                </div>
              </div>
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
                    <span>120m²</span>
                    <span>•</span>
                    <span>Comercial</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Renta Mensual</span>
                    <span className="font-medium">$48,000 MXN</span>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Contact */}
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Contacto</h2>
              <Button 
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center gap-2"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Contactar por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
