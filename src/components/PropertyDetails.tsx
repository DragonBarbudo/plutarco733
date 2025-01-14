import { Building2, MapPin, DoorOpen, Car, Coffee } from 'lucide-react';

const PropertyDetails = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
      <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
        Detalles de la Propiedad
      </h2>
      
      <div className="space-y-6">
        <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1">
          <MapPin className="text-blue-500 w-6 h-6 mt-1" />
          <div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">Ubicación Privilegiada</h3>
            <div className="space-y-2 text-gray-600">
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                En esquina de dos ejes viales (4 Sur y 1 Ote)
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Frente a estación de Metrobús (Andrés Molina)
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Frente a mercado (Santa Anita)
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1">
          <Building2 className="text-blue-500 w-6 h-6 mt-1" />
          <div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">Espacios</h3>
            <div className="space-y-2 text-gray-600">
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Planta baja y mezzanine (200 m²)
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                2 baños
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Oficina
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Bodega
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Cocineta
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1">
          <Car className="text-blue-500 w-6 h-6 mt-1" />
          <div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">Estacionamiento</h3>
            <p className="text-gray-600">Disponible</p>
          </div>
        </div>

        <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:scale-105 transition-all duration-300">
          <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
            $400 MXN/m²
          </p>
          <p className="text-gray-600">Precio por metro cuadrado</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;