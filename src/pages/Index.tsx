import { useState } from 'react';
import { MapPin, Home, DoorOpen, Car, Coffee, Phone } from 'lucide-react';
import Map from '../components/Map';
import Gallery from '../components/Gallery';
import PropertyDetails from '../components/PropertyDetails';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const Index = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [showMap, setShowMap] = useState(false);
  
  const images = [
    'https://images.unsplash.com/photo-1487958449943-2429e8be8625',
    'https://images.unsplash.com/photo-1518005020951-eccb494ad742',
    'https://images.unsplash.com/photo-1496307653780-42ee777d4833',
    'https://images.unsplash.com/photo-1439337153520-7082a56a81f4'
  ];

  const location: [number, number] = [-99.122778, 19.408889];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Galería</h2>
              <div className="space-y-4">
                {images.map((image, index) => (
                  <Dialog key={index}>
                    <DialogTrigger asChild>
                      <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
                        <img 
                          src={image} 
                          alt={`Propiedad ${index + 1}`}
                          className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto p-0">
                      <img 
                        src={image} 
                        alt={`Propiedad ${index + 1}`}
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="cursor-pointer">
                    <img 
                      src={images[0]} 
                      alt="Propiedad Principal"
                      className="w-full h-[400px] object-cover rounded-2xl mb-6"
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto p-0">
                  <img 
                    src={images[0]} 
                    alt="Propiedad Principal"
                    className="w-full h-full object-contain rounded-lg"
                  />
                </DialogContent>
              </Dialog>
              <div>
                <h1 className="text-2xl font-bold mb-4">¡Local en Renta con Ubicación Estratégica y Amplias Funcionalidades!</h1>
                <p className="text-gray-600 mb-4">
                  ¡No pierdas la oportunidad de establecer tu negocio en un punto estratégico con alto flujo de personas! Ideal para oficinas, comercio o servicios.
                </p>
                <div className="text-gray-500">Nueva Santa Anita, Iztacalco</div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-3">
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
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Dirección</span>
                    <span className="font-medium text-sm">Plutarco Elías Calles 733</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="flex-1 rounded-xl">
                        <MapPin className="w-4 h-4 mr-2" />
                        Mapa
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto p-6">
                      <div className="h-[500px] w-full">
                        <Map location={location} />
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Button className="flex-1 rounded-xl bg-black hover:bg-black/90">
                    Agendar Visita
                  </Button>
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
