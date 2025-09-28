import { Car } from "@/types/car"
import { CarCard } from "./car-card"

interface CarGridProps {
  cars: Car[]
}

export function CarGrid({ cars }: CarGridProps) {
  if (cars.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="p-4 bg-muted/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
        </div>
        <h3 className="text-xl font-semibold mb-2">Nenhum carro adicionado</h3>
        <p className="text-muted-foreground">Comece sua coleção adicionando seu primeiro carro!</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  )
}
