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
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in">
      {images.map((image, index) => (
        <Dialog key={index}>
          <DialogTrigger asChild>
            <div 
              className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image}
                alt={`Propiedad ${index + 1}`}
                className="w-full h-full object-cover hover:opacity-90 transition-opacity"
              />
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-4xl">
            <img
              src={image}
              alt={`Propiedad ${index + 1}`}
              className="w-full h-full object-contain animate-scale-in"
            />
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
};

export default Gallery;