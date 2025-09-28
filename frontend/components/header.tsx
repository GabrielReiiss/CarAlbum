"use client"

import { Button } from "@/components/ui/button"
import { Plus, Car } from "lucide-react"

interface HeaderProps {
  onAddCar: () => void
}

export function Header({ onAddCar }: HeaderProps) {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Car className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Álbum de Carros</h1>
              <p className="text-sm text-muted-foreground">Sua coleção</p>
            </div>
          </div>

          <Button onClick={onAddCar} className="gap-2">
            <Plus className="h-4 w-4" />
            Adicionar Carro
          </Button>
        </div>
      </div>
    </header>
  )
}
