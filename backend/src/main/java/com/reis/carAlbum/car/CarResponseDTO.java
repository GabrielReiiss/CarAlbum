package com.reis.carAlbum.car;

public record CarResponseDTO(Long id, String modelo, String marca, String categoria, Integer ano, String imagem) {
    
    public CarResponseDTO(Car car){
        this(car.getId(), car.getModelo(), car.getMarca(), car.getCategoria(), car.getAno(), car.getImagem());
    }

}
