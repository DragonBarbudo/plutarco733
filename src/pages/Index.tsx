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
  
  const images = [
    'https://images.unsplash.com/photo-1487958449943-2429e8be8625',
    'https://images.unsplash.com/photo-1518005020951-eccb494ad742',
    'https://images.unsplash.com/photo-1496307653780-42ee777d4833',
    'https://images.unsplash.com/photo-1439337153520-7082a56a81f4'
  ];

  const location: [number, number] = [-99.122778, 19.408889];

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8 space-y-12">
        <section className="mb-12 animate-fade-in [animation-delay:200ms]">
          <h1 className="text-4xl font-bold mb-4">Local Comercial en Renta</h1>
          <p className="text-gray-600 text-xl">Plutarco Elías Calles 733, Nueva Santa Anita</p>
        </section>

        <section className="animate-fade-in [animation-delay:400ms]">
          <Gallery images={images} />
        </section>

        <section className="grid md:grid-cols-2 gap-8 my-12 animate-fade-in [animation-delay:600ms]">
          <PropertyDetails />
          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Map location={location} />
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8 mb-12 animate-fade-in [animation-delay:800ms]">
          <h2 className="text-2xl font-bold mb-6">Información de Contacto</h2>
          <div className="flex items-center gap-2 mb-4">
            <Phone className="text-blue-500" />
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" 
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 hover:scale-105 transition-all duration-300">
                  Ver Teléfono
                </Button>
              </DialogTrigger>
              <DialogContent>
                <div className="p-6 text-center animate-scale-in">
                  <h3 className="text-2xl font-bold mb-4">Contacto</h3>
                  <p className="text-xl">+52 (55) 1234-5678</p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;