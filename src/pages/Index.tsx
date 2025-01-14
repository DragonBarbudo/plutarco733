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
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <main className="container mx-auto px-4 py-12 space-y-16">
        <section className="text-center mb-16 animate-fade-in [animation-delay:200ms]">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Local Comercial en Renta
          </h1>
          <p className="text-gray-600 text-xl font-light">
            Plutarco Elías Calles 733, Nueva Santa Anita
          </p>
        </section>

        <section className="animate-fade-in [animation-delay:400ms]">
          <Gallery images={images} />
        </section>

        <section className="grid md:grid-cols-2 gap-12 my-16 animate-fade-in [animation-delay:600ms]">
          <PropertyDetails />
          <div className="h-[500px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
            <Map location={location} />
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-lg p-12 mb-16 animate-fade-in [animation-delay:800ms] hover:shadow-xl transition-all duration-300">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Información de Contacto
          </h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <Phone className="text-blue-500 w-6 h-6" />
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl"
                >
                  Ver Teléfono
                </Button>
              </DialogTrigger>
              <DialogContent className="p-8">
                <div className="text-center animate-scale-in">
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                    Contacto
                  </h3>
                  <p className="text-2xl font-semibold text-gray-700">
                    +52 (55) 1234-5678
                  </p>
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