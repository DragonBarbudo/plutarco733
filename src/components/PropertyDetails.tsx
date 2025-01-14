import { Building2, MapPin, DoorOpen, Car, Coffee } from 'lucide-react';

const PropertyDetails = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-in">
      <h2 className="text-2xl font-bold mb-6">Detalles de la Propiedad</h2>
      
      <div className="space-y-4">
        <div className="flex items-start gap-4 hover:translate-x-1 transition-transform duration-300">
          <MapPin className="text-blue-500 mt-1" />
          <div>
            <h3 className="font-semibold">Ubicación Privilegiada</h3>
            <p className="text-gray-600">En esquina de dos ejes viales (4 Sur y 1 Ote)</p>
            <p className="text-gray-600">Frente a estación de Metrobús (Andrés Molina)</p>
            <p className="text-gray-600">Frente a mercado (Santa Anita)</p>
          </div>
        </div>

        <div className="flex items-start gap-4 hover:translate-x-1 transition-transform duration-300">
          <Building2 className="text-blue-500 mt-1" />
          <div>
            <h3 className="font-semibold">Espacios</h3>
            <p className="text-gray-600">Planta baja y mezzanine (200 m²)</p>
            <p className="text-gray-600">2 baños</p>
            <p className="text-gray-600">Oficina</p>
            <p className="text-gray-600">Bodega</p>
            <p className="text-gray-600">Cocineta</p>
          </div>
        </div>

        <div className="flex items-start gap-4 hover:translate-x-1 transition-transform duration-300">
          <Car className="text-blue-500 mt-1" />
          <div>
            <h3 className="font-semibold">Estacionamiento</h3>
            <p className="text-gray-600">Disponible</p>
          </div>
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg hover:scale-105 transition-transform duration-300">
          <p className="text-2xl font-bold text-blue-600">$400 MXN/m²</p>
          <p className="text-gray-600">Precio por metro cuadrado</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;