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
    <div className="min-h-screen bg-[#F8FAFC]">
      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Properties</h2>
              <div className="space-y-4">
                {images.map((image, index) => (
                  <div key={index} className="relative rounded-2xl overflow-hidden group cursor-pointer">
                    <img 
                      src={image} 
                      alt={`Property ${index + 1}`}
                      className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <img 
                src={images[0]} 
                alt="Main Property"
                className="w-full h-[400px] object-cover rounded-2xl mb-6"
              />
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold mb-2">Local Comercial</h1>
                  <p className="text-gray-500">Nueva Santa Anita</p>
                </div>
                <div className="flex items-center gap-2">
                  <img 
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
                    alt="Owner"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="text-sm">
                    <p className="font-medium">Chris Williams</p>
                    <p className="text-gray-500">Owner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-orange-500/10 text-orange-500 px-3 py-1 rounded-full text-sm font-medium">For Sale</span>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">$400/m²</h2>
                  <div className="flex gap-2 text-sm text-gray-500">
                    <span>200m²</span>
                    <span>•</span>
                    <span>Commercial</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Rent</span>
                    <span className="font-medium">$80,000/Monthly</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Mortgage</span>
                    <span className="font-medium">$2.1M</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" className="flex-1 rounded-xl">
                    <MapPin className="w-4 h-4" />
                    Map
                  </Button>
                  <Button className="flex-1 rounded-xl bg-black hover:bg-black/90">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Map location={location} />
        </div>
      </main>
    </div>
  );
};

export default Index;