import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";

interface GalleryProps {
  images: string[];
}

const Gallery = ({ images }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <Dialog key={index}>
          <DialogTitle className="hidden">Abrir imagen</DialogTitle>
          <DialogTrigger asChild>
            <div 
              className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image}
                alt={`Property ${index + 1}`}
                className=" w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-4xl">
            <img
              src={image}
              alt={`Property ${index + 1}`}
              className="max-h-[calc(100vh-5rem)] w-full h-full object-contain rounded-lg"
            />
            <DialogDescription className="hidden"></DialogDescription>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
};

export default Gallery;