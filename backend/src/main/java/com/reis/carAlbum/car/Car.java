package com.reis.carAlbum.car;

import jakarta.annotation.Generated;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "cars")
@Entity(name = "cars")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String modelo;
    private String marca;
    private String categoria;
    private Integer ano;
    private String imagem = null;

    public Car(CarRequestDTO data) {
        this.modelo = data.modelo();
        this.marca = data.marca();
        this.categoria = data.categoria();
        this.ano = data.ano();
        this.imagem = data.imagem();
    }
}
