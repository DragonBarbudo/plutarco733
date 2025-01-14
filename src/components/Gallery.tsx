import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

interface GalleryProps {
  images: string[];
}

const Gallery = ({ images }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in">
      {images.map((image, index) => (
        <Dialog key={index}>
          <DialogTrigger asChild>
            <div 
              className="aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image}
                alt={`Propiedad ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-4xl">
            <img
              src={image}
              alt={`Propiedad ${index + 1}`}
              className="w-full h-full object-contain rounded-lg animate-scale-in"
            />
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
};

export default Gallery;