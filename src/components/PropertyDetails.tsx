import { Building2, MapPin, DoorOpen, Car, Coffee } from 'lucide-react';

const PropertyDetails = () => {
  return (
    <div className="bg-white rounded-3xl shadow-sm p-8">
      <h2 className="text-2xl font-bold mb-8">Detalles de la Propiedad</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-blue-500/10 p-3 rounded-xl">
              <MapPin className="text-blue-500 w-5 h-5" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Ubicación Premium</h3>
              <p className="text-gray-500 text-sm">
                Esquina de dos importantes ejes viales (4 Sur y 1 Oriente)<br />
                Frente a la estación de Metrobús Andrés Molina<br />
                Frente al mercado Santa Anita
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-purple-500/10 p-3 rounded-xl">
              <Building2 className="text-purple-500 w-5 h-5" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Espacio</h3>
              <p className="text-gray-500 text-sm">
                120 m² distribuidos en planta baja y mezzanine
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-orange-500/10 p-3 rounded-xl">
              <Car className="text-orange-500 w-5 h-5" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Estacionamiento</h3>
              <p className="text-gray-500 text-sm">
                Disponible
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-green-500/10 p-3 rounded-xl">
              <Coffee className="text-green-500 w-5 h-5" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Amenidades</h3>
              <p className="text-gray-500 text-sm">
                2 baños, oficina, bodega, cocineta
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;