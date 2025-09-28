"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { Car } from "@/types/car"

interface AddCarModalProps {
  isOpen: boolean
  onClose: () => void
  onAddCar: (car: Omit<Car, "id">) => void
}

export function AddCarModal({ isOpen, onClose, onAddCar }: AddCarModalProps) {
  const [formData, setFormData] = useState({
    marca: "",
    modelo: "",
    ano: new Date().getFullYear(),
    categoria: "",
    imagem: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.marca || !formData.modelo || !formData.categoria) {
      return
    }

    const imageUrl =
      formData.imagem ||
      `/placeholder.svg?height=300&width=400&query=${formData.marca} ${formData.modelo} ${formData.categoria} car`

    onAddCar({
      ...formData,
      imagem: imageUrl,
    })

    // Reset form
    setFormData({
      marca: "",
      modelo: "",
      ano: new Date().getFullYear(),
      categoria: "",
      imagem: "",
    })
  }

  const handleChange = (field: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Adicionar Novo Carro</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="marca">Marca *</Label>
              <Input
                id="marca"
                value={formData.marca}
                onChange={(e) => handleChange("marca", e.target.value)}
                placeholder="Ex: Ferrari"
                required
              />
            </div>

            <div>
              <Label htmlFor="modelo">Modelo *</Label>
              <Input
                id="modelo"
                value={formData.modelo}
                onChange={(e) => handleChange("modelo", e.target.value)}
                placeholder="Ex: F8 Tributo"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="ano">Ano</Label>
              <Input
                id="ano"
                type="number"
                value={formData.ano}
                onChange={(e) => handleChange("ano", Number.parseInt(e.target.value))}
                min="1900"
                max={new Date().getFullYear() + 1}
              />
            </div>

            <div>
              <Label htmlFor="categoria">Categoria *</Label>
              <Input
                id="categoria"
                value={formData.categoria}
                onChange={(e) => handleChange("categoria", e.target.value)}
                placeholder="Ex: Vermelho"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="imagem">URL da Imagem (opcional)</Label>
            <Input
              id="imagem"
              value={formData.imagem}
              onChange={(e) => handleChange("imagem", e.target.value)}
              placeholder="https://exemplo.com/imagem.jpg"
            />
          </div>
          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1 bg-transparent">
              Cancelar
            </Button>
            <Button type="submit" className="flex-1">
              Adicionar Carro
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
