import type { Car } from "@/types/car"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface CarCardProps {
  car: Car
}

export function CarCard({ car }: CarCardProps) {
  return (
    <Card className="car-card-hover overflow-hidden bg-card/80 backdrop-blur-sm border-border/50">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={car.imagem || "/placeholder.svg"}
          alt={`${car.marca} ${car.modelo}`}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
            {car.ano}
          </Badge>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="mb-2">
          <h3 className="text-lg font-bold text-foreground">
            {car.marca} {car.modelo}
          </h3>
          <p className="text-sm text-muted-foreground">Categoria: {car.categoria}</p>
        </div>
      </CardContent>
    </Card>
  )
}
