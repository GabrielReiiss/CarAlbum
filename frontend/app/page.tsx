"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/header";
import { CarGrid } from "@/components/car-grid";
import { AddCarModal } from "@/components/add-car-modal";
import type { Car } from "@/types/car";
import toast from "react-hot-toast";

export default function HomePage() {
  const [cars, setCars] = useState<Car[]>([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await fetch("http://localhost:8080/cars");
        if (!res.ok) throw new Error("Erro ao buscar carros");
        const data: Car[] = await res.json();
        setCars(data);
      } catch (err) {
        console.error("Erro no fetch:", err);
        toast.error("Erro ao carregar carros!");
      }
    };

    fetchCars();
  }, []);

  const handleAddCar = async (newCar: Omit<Car, "id">) => {
    try {
      const res = await fetch("http://localhost:8080/cars", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCar),
      });

      if (!res.ok) throw new Error("Erro ao adicionar carro");

      const savedCar: Car = await res.json();
      setCars((prev) => [...prev, savedCar]);
      setIsAddModalOpen(false);

      // ✅ Notificação de sucesso
      toast.success("Carro adicionado com sucesso!");
    } catch (err) {
      console.error("Erro ao adicionar carro:", err);
      toast.error("Erro ao adicionar carro!");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onAddCar={() => setIsAddModalOpen(true)} />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 gradient-text text-balance">
            Meu Álbum de Carros
          </h1>
          <p className="text-muted-foreground text-lg">
            Sua coleção pessoal de veículos incríveis
          </p>
        </div>

        <CarGrid cars={cars} />
      </main>

      <AddCarModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddCar={handleAddCar}
      />
    </div>
  );
}
